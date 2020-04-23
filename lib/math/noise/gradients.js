"use strict";
/*
     MIT License

     Copyright (c) 2020 Metwas

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
/**
 * Dimensional gradientient helper function
 */
var gradient = /** @class */ (function () {
    /**
     * Default 4 dimensional constructor setup
     */
    function gradient(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    /**
     * Calculates the dot product for points upto the 4th dimension
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} w
     * @returns {Number}
     */
    gradient.prototype.dot = function (x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 0; }
        var x0 = Number(this.x * x) || 0;
        var y0 = Number(this.y * y) || 0;
        var z0 = Number(this.z * z) || 0;
        var w0 = Number(this.w * w) || 0;
        return x0 + y0 + z0 + w0;
    };
    return gradient;
}());
exports.gradient = gradient;
/**
 * 3rd dimensional gradient definitions
 *
 * @type {Array<gradient>}
 */
exports.GRAD_3D = [
    new gradient(1, 1, 0),
    new gradient(-1, 1, 0),
    new gradient(1, -1, 0),
    new gradient(-1, -1, 0),
    new gradient(1, 0, 1),
    new gradient(-1, 0, 1),
    new gradient(1, 0, -1),
    new gradient(-1, 0, -1),
    new gradient(0, 1, 1),
    new gradient(0, -1, 1),
    new gradient(0, 1, -1),
    new gradient(0, -1, -1),
];
/**
 * 4th dimensional gradient definitions
 *
 * @type {Array<gradient>}
 */
exports.GRAD_4D = [
    new gradient(0, 1, 1, 1),
    new gradient(0, 1, 1, -1),
    new gradient(0, 1, -1, 1),
    new gradient(0, 1, -1, -1),
    new gradient(0, -1, 1, 1),
    new gradient(0, -1, 1, -1),
    new gradient(0, -1, -1, 1),
    new gradient(0, -1, -1, -1),
    new gradient(1, 0, 1, 1),
    new gradient(1, 0, 1, -1),
    new gradient(1, 0, -1, 1),
    new gradient(1, 0, -1, -1),
    new gradient(-1, 0, 1, 1),
    new gradient(-1, 0, 1, -1),
    new gradient(-1, 0, -1, 1),
    new gradient(-1, 0, -1, -1),
    new gradient(1, 1, 0, 1),
    new gradient(1, 1, 0, -1),
    new gradient(1, -1, 0, 1),
    new gradient(1, -1, 0, -1),
    new gradient(-1, 1, 0, 1),
    new gradient(-1, 1, 0, -1),
    new gradient(-1, -1, 0, 1),
    new gradient(-1, -1, 0, -1),
    new gradient(1, 1, 1, 0),
    new gradient(1, 1, -1, 0),
    new gradient(1, -1, 1, 0),
    new gradient(1, -1, -1, 0),
    new gradient(-1, 1, 1, 0),
    new gradient(-1, 1, -1, 0),
    new gradient(-1, -1, 1, 0),
    new gradient(-1, -1, -1, 0),
];
