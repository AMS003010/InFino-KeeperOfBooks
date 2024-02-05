#!/bin/bash

cd serverJs

docker build -t serverjs .

cd ../serverPython

docker build -t serverpython .

cd ../client

docker build -t clientapp .

cd ..

docker-compose up
