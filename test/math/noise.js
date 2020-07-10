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

//===================== imports =====================//

const { map, getMatrixIndex } = require("../../lib/math/math");
const { test, printService } = require("../helpers/helper");
const { Simplex_octave } = require("../../lib/math/noise/simplexOctave");
const { PERMUTATION_FIXED_256, create } = require("../../lib/math/noise/permutations");

//===================== End imports =====================//

const { log, header } = printService;


// testing initialization
log(header("#### Noise Testing ####"));

/**
 * Initialize simplex noise with a random seed
 */
var simplex = new Simplex_octave();

/**
 * Map dimensions
 */
const height = 500;
const width = 500;

/**
 * One dimensional noise container of a one byte each per pixel
 */
const arrMap = [];

for (var y = 0; y < height; y++) {

    for (var x = 0; x < width; x++) {

        const noise = simplex.noise(x, y);
        console.log(`Noise: [${noise}]`);        
        const index = getMatrixIndex(x, y, width);
        arrMap[index] = Math.floor(map(noise, -1, 1, 0, 255));

    }

}

console.log(arrMap);
