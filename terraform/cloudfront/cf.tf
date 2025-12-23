# 1. Provider for lookup (Must be us-east-1 for CloudFront)
provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}

# 2. Create Origin Access Control
resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "s3-oac"
  description                       = "OAC for Next.js S3 Bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# 3. Look up the existing bucket (from your other project)
data "aws_s3_bucket" "existing_nextjs_bucket" {
  bucket = "ofi-web"
}

# 4. Look up the existing certificate (from your other project)
data "aws_acm_certificate" "existing_cert" {
  provider = aws.virginia
  domain   = "ofi.com.sb"
  statuses = ["ISSUED", "PENDING_VALIDATION"]
}

# 5. Create the CloudFront Distribution
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = data.aws_s3_bucket.existing_nextjs_bucket.bucket_regional_domain_name
    origin_id                = "S3-NextJS-Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CloudFront for ofi.com.sb"
  default_root_object = "index.html"

  aliases = ["ofi.com.sb", "www.ofi.com.sb"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-NextJS-Origin"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  viewer_certificate {
    # UPDATED: Using the data source ARN
    acm_certificate_arn      = data.aws_acm_certificate.existing_cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Added Custom Error Responses for Next.js routing support
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/404.html"
    error_caching_min_ttl = 10
  }

  tags = {
    Environment = "production"
  }
}

# 6. IMPORTANT: The Bucket Policy to allow CloudFront to enter
resource "aws_s3_bucket_policy" "allow_cloudfront" {
  bucket = data.aws_s3_bucket.existing_nextjs_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontOAC"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = "s3:GetObject"
        Resource  = "${data.aws_s3_bucket.existing_nextjs_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}