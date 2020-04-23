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

/**
 * Dimensional gradientient helper function
 */
export class gradient {

    /**
     * Default 1 dimensional contructor setup
     */
    public constructor(x: number);

    /**
     * Default 2 dimensional contructor setup
     */
    public constructor(x: number, y: number);

    /**
     * Default 3 dimensional constructor setup
     */
    public constructor(x: number, y: number, z: number);

    /**
     * Default 4 dimensional constructor setup
     */
    public constructor(x: number, y: number, z: number, w: number);

    /**
     * Default 4 dimensional constructor setup
     */
    public constructor(public x: number = 0, public y: number = 0, public z: number = 0, public w: number = 0) { }


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
    public dot(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {

        const x0: number = Number(this.x * x) || 0;
        const y0: number = Number(this.y * y) || 0;
        const z0: number = Number(this.z * z) || 0;
        const w0: number = Number(this.w * w) || 0;
        return x0 + y0 + z0 + w0;

    }

}

/**
 * 3rd dimensional gradient definitions
 * 
 * @type {Array<gradient>}
 */
export const GRAD_3D: Array<any> = [
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
export const GRAD_4D: Array<any> = [
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
