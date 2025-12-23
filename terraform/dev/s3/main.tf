provider "aws" {
  region = "ap-southeast-2" # Change to your preferred region
}

# 1. Create the S3 Bucket
resource "aws_s3_bucket" "nextjs_bucket" {
  bucket = "ofi-web" # Must be globally unique
}

# 2. Configure Website Hosting
resource "aws_s3_bucket_website_configuration" "nextjs_site" {
  bucket = aws_s3_bucket.nextjs_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# 3. Disable "Block Public Access" (Necessary for static sites)
resource "aws_s3_bucket_public_access_block" "nextjs_access" {
  bucket = aws_s3_bucket.nextjs_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# 4. Add Bucket Policy to allow public reads
resource "aws_s3_bucket_policy" "public_read_policy" {
  bucket = aws_s3_bucket.nextjs_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.nextjs_bucket.arn}/*"
      },
    ]
  })
  
  # Ensure public access settings are applied before the policy
  depends_on = [aws_s3_bucket_public_access_block.nextjs_access]
}

# Output the Website URL
output "website_url" {
  value = aws_s3_bucket_website_configuration.nextjs_site.website_endpoint
}