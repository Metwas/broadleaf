#!/bin/bash
PORT=2009

echo Initializing ssl server on port: $PORT
# Attempts to get the server certificate specified from the user input
function getServerCertificate
{
	read serverCer
	if [[ ! -f $serverCer ]]; then
		echo Please provide a valid server certificate:
		getServerCertificate
	fi
}
# Attempts to get the server key specified from the user input
function getServerKey
{
	read serverKey
	if [[ ! -f $serverKey ]]; then
        	echo Please provide a valid server key: 
		getServerKey
	fi
}

echo Provide path to server key:
getServerKey
echo Provide path to server certificate:
getServerCertificate
# initialize server
openssl s_server -accept 2009 -key $serverKey -cert $serverCer


