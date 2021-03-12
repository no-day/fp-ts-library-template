#/usr/bin/env bash

case "$1" in
  "test")
  yarn jest
    ;;
  "test:watch")
    yarn jest --watch
    ;;
  "build")
    yarn jest --watch
    ;;
  "build:watch")
    yarn jest --watch
    ;;
  *)
    echo "Script not available"
    exit 1
    ;;
esac