#!/bin/bash
NAME=$1
KEYPATH=$2

echo Creating root key...
# Provide a default name for the root key
if [[ -z $NAME || -d $NAME ]]; then
        NAME="root"
fi
# Provide the current directory as a default
if [[ ! -d $KEYPATH ]]; then
     KEYPATH="./"
fi
# generate key
openssl genrsa -out $KEYPATH/"${NAME}.key" 2048 &> /dev/null

