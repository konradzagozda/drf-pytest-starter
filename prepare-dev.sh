#!/usr/bin/env bash
set -ex

python -m pip install poetry

cp env/local.env .env
