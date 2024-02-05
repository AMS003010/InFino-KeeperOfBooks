#!/bin/bash

docker build -t serverjs ./serverJs

docker build -t serverpython ./serverPython

docker build -t clientapp ./client

docker-compose up
