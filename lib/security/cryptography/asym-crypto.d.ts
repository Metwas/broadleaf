/// <reference types="node" />
import * as crypto from "crypto";
/**
 * Encrypts a message using a public key
 *
 * @param {String} message
 * @param {String | Buffer} publicKeyOrPath Public key as a string, buffer or the relative or absolute path to the public key
 * @throws {Error} if public key was null
 * @returns {String} The encrypted message
 */
export declare function publicKeyEncrypt(message: any, publicKeyOrPath: string): string;
/**
 * Decrypts a message using a private key
 *
 * @param {String} message
 * @param {String | Buffer} privateKeyOrPath Private key as a string, buffer or the relative or absolute path to the private key
 * @param {String} passphrase
 * @throws {Error} If private key was null
 * @returns {String} The decrypted message
 */
export declare function privateKeyDecrypt(encryptedMessage: string, privateKeyOrPath: string, passphrase: string): string;
/**
 * Generates a new set of public and private key pairs
 *
 * @param {String} type The algorithm type. Supported algorithms are: RSA, DSA, EC, Ed25519 and Ed448. (Defaults to RSA)
 * @param {Object} options Algorithmic defined options. see: https://nodejs.org/api/crypto.html#crypto_crypto_generatekeypair_type_options_callback
 * @throws {Error} If options is null or not a valid object
 * @returns {Object} The private and public key pair
 */
export declare function generatePublicPrivateKeyPair(type: "rsa", options: any): crypto.KeyPairSyncResult<string, string>;
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
export declare const createPublicKeyDefaults: () => any;
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
export declare const createPrivateKeyDefaults: (passphrase: string) => any;
