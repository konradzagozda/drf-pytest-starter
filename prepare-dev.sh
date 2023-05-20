#!/usr/bin/env bash
set -ex

python -m pip install poetry pre-commit

pre-commit install

cp env/local.env .env
