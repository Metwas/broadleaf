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

//===================== Imports =====================//

// import cryptography library
import * as crypto from "crypto";
// path used to obtain private and public key information
import path from "path";
// filesystem used to retrieve or save public and private key information
import fs from "fs";
// import utilities
import { isString, isObject } from "../../utils/utils";

//===================== End Imports =====================//

/**
 * Encrypts a message using a public key 
 * 
 * @param {String} message
 * @param {String | Buffer} publicKeyOrPath Public key as a string, buffer or the relative or absolute path to the public key
 * @throws {Error} if public key was null
 * @returns {String} The encrypted message
 */
export function publicKeyEncrypt(message: any, publicKeyOrPath: string): string {

     // validate the private key parameter
     if (isString(publicKeyOrPath) || Buffer.isBuffer(publicKeyOrPath)) {

          let key: string | Buffer = "";
          let srcPath: string = path.resolve(publicKeyOrPath);
          
          if (fs.existsSync(srcPath)) {
               key = fs.readFileSync(key, "utf8");
          } else {
               // attempt to regard it as a private key buffer
               key = Buffer.isBuffer(publicKeyOrPath) ? publicKeyOrPath : Buffer.from(publicKeyOrPath, "utf8");
          }

          // store message data into a buffer container
          const data: Buffer = Buffer.from(message, "utf8");
          // encrypt the message
          const encryptedMessage: Buffer = crypto.publicEncrypt(key, data);
          // return encrypted message as base64 encoded 
          return encryptedMessage.toString("base64");

     } else {
          throw new Error(`Invalid public key parameter provided, must be either the path or the public key as a string or buffer`);
     }

};

/**
 * Decrypts a message using a private key 
 * 
 * @param {String} message
 * @param {String | Buffer} privateKeyOrPath Private key as a string, buffer or the relative or absolute path to the private key
 * @param {String} passphrase
 * @throws {Error} If private key was null
 * @returns {String} The decrypted message
 */
export function privateKeyDecrypt(encryptedMessage: string, privateKeyOrPath: string, passphrase: string): string {

     // validate the private key parameter
     if (isString(privateKeyOrPath) || Buffer.isBuffer(privateKeyOrPath)) {

          let key: string | Buffer = "";
          let srcPath: string = path.resolve(privateKeyOrPath);

          if (fs.existsSync(srcPath)) {
               key = fs.readFileSync(key, "utf8");
          } else {
               // attempt to regard it as a private key buffer
               key = Buffer.isBuffer(privateKeyOrPath) ? privateKeyOrPath : Buffer.from(privateKeyOrPath, "utf8");
          }

          // create buffer container with expected encoding type to be base64
          const data: Buffer = Buffer.from(encryptedMessage, "base64");
          // decrypt using the private key
          const message: Buffer = crypto.privateDecrypt({ key: key, passphrase: passphrase }, data);
          // return message as the default utf8 encoding
          return message.toString("utf8");

     } else {
          throw new Error(`Invalid private key parameter provided, must be either the path or the private key as a string or buffer`);
     }

};

/**
 * Generates a new set of public and private key pairs
 * 
 * @param {String} type The algorithm type. Supported algorithms are: RSA, DSA, EC, Ed25519 and Ed448. (Defaults to RSA) 
 * @param {Object} options Algorithmic defined options. see: https://nodejs.org/api/crypto.html#crypto_crypto_generatekeypair_type_options_callback 
 * @throws {Error} If options is null or not a valid object
 * @returns {Object} The private and public key pair
 */
export function generatePublicPrivateKeyPair(type: "rsa", options: any) {

     if (!isObject(options)) {
          throw new Error("Invalid options argument was provided");
     }

     // generate the private and public key pairs based from defined algorithm options
     return crypto.generateKeyPairSync(type, options);

}

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
export const createPublicKeyDefaults = function (): any {

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
export const createPrivateKeyDefaults = function (passphrase: string): any {

     return {
          type: "pkcs8",
          format: "pem",
          cipher: "aes-256-cbc",
          passphrase: passphrase
     };

};
