provider "aws" {
  region = "us-east-1"
}

# AWS par ek simple EC2 instance launch karne ka blueprint
resource "aws_instance" "ecommerce_app" {
  ami           = "ami-0c55b159cbfafe1f0" # Ubuntu LTS AMI
  instance_type = "t2.micro"

  tags = {
    Name = "1Fi-EMI-App-Server"
  }
}