terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "ap-southeast-1"
}

resource "aws_instance" "web_server" {
  ami           = "ami-04e914639d0cca79a" 
  instance_type = "t2.micro"

  tags = {
    Name = "Web-Server"
  }
}
