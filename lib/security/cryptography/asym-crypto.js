"use strict";
/*
     MIT License

     Copyright (c) 2019 Metwas

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// import cryptography library
const crypto = require("crypto");
// path used to obtain private and public key information
const path_1 = require("path");
// filesystem used to retrieve or save public and private key information
const fs_1 = require("fs");
// import utilities
const utils_1 = require("../../utils/utils");
/**
 * Encrypts a message using a public key
 *
 * @param {String} message
 * @param {String | Buffer} publicKeyOrPath Public key as a string, buffer or the relative or absolute path to the public key
 * @throws {Error} if public key was null
 * @returns {String} The encrypted message
 */
function publicKeyEncrypt(message, publicKeyOrPath) {
    // validate the private key parameter
    if (utils_1.isString(publicKeyOrPath) || Buffer.isBuffer(publicKeyOrPath)) {
        let key = "";
        let srcPath = path_1.default.resolve(publicKeyOrPath);
        if (fs_1.default.existsSync(srcPath)) {
            key = fs_1.default.readFileSync(key, "utf8");
        }
        else {
            // attempt to regard it as a private key buffer
            key = Buffer.isBuffer(publicKeyOrPath) ? publicKeyOrPath : Buffer.from(publicKeyOrPath, "utf8");
        }
        // store message data into a buffer container
        const data = Buffer.from(message, "utf8");
        // encrypt the message
        const encryptedMessage = crypto.publicEncrypt(key, data);
        // return encrypted message as base64 encoded 
        return encryptedMessage.toString("base64");
    }
    else {
        throw new Error(`Invalid public key parameter provided, must be either the path or the public key as a string or buffer`);
    }
}
exports.publicKeyEncrypt = publicKeyEncrypt;
;
/**
 * Decrypts a message using a private key
 *
 * @param {String} message
 * @param {String | Buffer} privateKeyOrPath Private key as a string, buffer or the relative or absolute path to the private key
 * @param {String} passphrase
 * @throws {Error} If private key was null
 * @returns {String} The decrypted message
 */
function privateKeyDecrypt(encryptedMessage, privateKeyOrPath, passphrase) {
    // validate the private key parameter
    if (utils_1.isString(privateKeyOrPath) || Buffer.isBuffer(privateKeyOrPath)) {
        let key = "";
        let srcPath = path_1.default.resolve(privateKeyOrPath);
        if (fs_1.default.existsSync(srcPath)) {
            key = fs_1.default.readFileSync(key, "utf8");
        }
        else {
            // attempt to regard it as a private key buffer
            key = Buffer.isBuffer(privateKeyOrPath) ? privateKeyOrPath : Buffer.from(privateKeyOrPath, "utf8");
        }
        // create buffer container with expected encoding type to be base64
        const data = Buffer.from(encryptedMessage, "base64");
        // decrypt using the private key
        const message = crypto.privateDecrypt({ key: key, passphrase: passphrase }, data);
        // return message as the default utf8 encoding
        return message.toString("utf8");
    }
    else {
        throw new Error(`Invalid private key parameter provided, must be either the path or the private key as a string or buffer`);
    }
}
exports.privateKeyDecrypt = privateKeyDecrypt;
;
/**
 * Generates a new set of public and private key pairs
 *
 * @param {String} type The algorithm type. Supported algorithms are: RSA, DSA, EC, Ed25519 and Ed448. (Defaults to RSA)
 * @param {Object} options Algorithmic defined options. see: https://nodejs.org/api/crypto.html#crypto_crypto_generatekeypair_type_options_callback
 * @throws {Error} If options is null or not a valid object
 * @returns {Object} The private and public key pair
 */
function generatePublicPrivateKeyPair(type, options) {
    if (!utils_1.isObject(options)) {
        throw new Error("Invalid options argument was provided");
    }
    // generate the private and public key pairs based from defined algorithm options
    return crypto.generateKeyPairSync(type, options);
}
exports.generatePublicPrivateKeyPair = generatePublicPrivateKeyPair;
/**
 * Export Modules
 * @public
 */
/**
 * Creates public key algorithm defaults
 *
 * @description
 * type: 'spki',
 * format: 'pem'
 * @returns {Any}
 */
exports.createPublicKeyDefaults = function () {
    return {
        type: "spki",
        format: "pem"
    };
};
/**
 * Creates a private key defaults only accepting a passphrase
 *
 * @param {String} passphrase
 * @description
 * type: 'pkcs8',
 * format: 'pem',
 * cipher: 'aes-256-cbc'
 * @returns {Any}
 */
exports.createPrivateKeyDefaults = function (passphrase) {
    return {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: passphrase
    };
};
