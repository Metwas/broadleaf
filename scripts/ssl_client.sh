#!/bin/bash
HOST=$1
PORT=$2

# Validate the host, defaults to localhost
if [[ -z $HOST ]]; then
	HOST="localhost"
fi
# Validate the port, defaults to 2009
if [[ -z $PORT ]]; then
	PORT=2009
fi

# Attempts to get the root certificate specified from the user input
function getRootCertificate
{
	read rootCer
	if [[ ! -f $rootCer ]]; then
        	echo Please provide a valid root certificate: 
		getRootCertificate
	fi
}
# Attempts to get the client key specified from the user input
function getClientKey
{
	read clientKey
	if [[ ! -f $clientKey ]]; then
        	echo Please provide a valid client key: 
		getClientKey
	fi
}
# Attempts to get the client certificate specified from the user input
function getClientCertificate
{
	read clientCer
	if [[ ! -f $clientCer ]]; then
		echo Please provide a valid client certificate:
		getClientCertificate
	fi
}

echo Provide path to client key:
getClientKey
echo Provide path to client certificate:
getClientCertificate
echo Provide path to root certificate:
getRootCertificate
echo Connecting to host: $HOST on port: $PORT...
# initialize server
openssl s_client -connect $HOST:$PORT -key $clientKey -cert $clientCer -CAfile $rootCer -showcerts


