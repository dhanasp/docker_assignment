#!/usr/bin/env bash

docker build -t javaapp .
docker run -p 3000:8080  javaapp  bash