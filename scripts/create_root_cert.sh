#!/bin/bash
NAME=$1
KEYPATH=$2

echo Creating root certificate...
# Provide a default name for the root key
if [[ -z $NAME || -d $NAME ]]; then
        NAME="root"
fi
# Provide the current directory as a default
if [[ ! -d $KEYPATH ]]; then
     KEYPATH="./"
fi
# Attempts to get the root key path from the specified user input
function getRootKey
{
     read rootKey
     if [[ ! -f $rootKey ]]; then
          echo Please provide a valid root key:
          getRootKey
     fi
}
# Prompt user for root key
echo Provide the root key path:
getRootKey
# generate certificate using the key path specified
sudo openssl req -new -x509 -days 365 -sha256 -writerand -key $rootKey -out $KEYPATH/"${NAME}.pem" -subj "/C=UK/ST=Derbyshire/O=EMQ/CN=${NAME}CA" &> /dev/null
