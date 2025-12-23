# We need a provider specifically for US-EAST-1 for the certificate
provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}

# 1. Request the Certificate
resource "aws_acm_certificate" "cert" {
  provider                  = aws.virginia
  domain_name               = "ofi.com.sb"
  subject_alternative_names = ["*.ofi.com.sb"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "ofi-ssl-cert"
  }
}

# 2. Output the values you need to give to Only Domains
output "dns_validation_name" {
  value = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_name
  description = "Go to Only Domains and create a CNAME with this NAME"
}

output "dns_validation_value" {
  value = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_value
  description = "Go to Only Domains and use this as the VALUE/TARGET"
}