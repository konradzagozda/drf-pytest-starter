#!/usr/bin/env bash
set -ex

sudo apt-get update -y
sudo apt-get install -y dnsutils iputils-ping

python -m pip install poetry pre-commit

pre-commit install

cp env/local.env .env
