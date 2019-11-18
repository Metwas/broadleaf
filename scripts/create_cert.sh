#!/bin/bash
NAME=$1
OUT=$2

# Provide a default name for each of the certificate components
if [[ -z $NAME || -d $NAME ]]; then
	NAME="app"
fi

KEY="${NAME}_key.key"
CSR="${NAME}_csr.csr"
CER="${NAME}_cert.pem"
echo Creating client certificate...

if [[ ! -d $OUT ]]; then
	OUT="./"
fi

echo Generating client key...
openssl genrsa -out $OUT/$KEY 2048 &> /dev/null

echo Creating signing request...
openssl req -new -days 360 -key $OUT/$KEY -out $OUT/$CSR

echo Creating certificate...
# Attempts to get the root certificate specified from the user input
function getRootCertificate
{
	read rootCer
	if [[ ! -f $rootCer ]]; then
		echo Please provide a valid root certificate:
		getRootCertificate
	fi
}
# Attempts to get the root key specified from the user input
function getRootKey
{
	read rootKey
	if [[ ! -f $rootKey ]]; then
        	echo Please provide a valid root key: 
		getRootKey
	fi
}

echo Provide path to root key:
getRootKey
echo Provide path to root certificate:
getRootCertificate
# create certificate based on the arguments created above
openssl x509 -req -in $OUT/$CSR -CA $rootCer -CAkey $rootKey -CAcreateserial -out $OUT/$CER -days 365 -sha256 &> /dev/null

