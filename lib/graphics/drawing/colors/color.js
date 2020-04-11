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
//===================== imports =====================//
var utils = require("../../../utils/utils");
var math = require("../../../math/math");
var conversions = require("../../../utils/text/conversions");
//===================== End imports =====================//
/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the base types
 */
var Color = /** @class */ (function () {
    /**
     * Constructs a color object with the provided rgb values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
     * @returns {Color} Color
     */
    function Color(red, green, blue, alpha) {
        if (alpha === void 0) { alpha = 255; }
        this.name = "";
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.alpha = alpha;
        this._hex = 0;
        if (utils.isUndefined(green) && utils.isUndefined(blue)) {
            // only default to the first parameter
            this.setHex(red);
        }
        else {
            this.setRGB(Number(red), Number(green), Number(blue));
        }
    }
    Object.defineProperty(Color, "AliceBlue", {
        /**
         * Color: 'AliceBlue' HEX: #F0F8FF'
         */
        get: function () {
            return Color.fromHex(0xF0F8FF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "AntiqueWhite", {
        /**
         * Color: 'AntiqueWhite' HEX: #FAEBD7'
         */
        get: function () {
            return Color.fromHex(0xFAEBD7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Aqua", {
        /**
         * Color: 'Aqua' HEX: #00FFFF'
         */
        get: function () {
            return Color.fromHex(0x00FFFF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "AquaMarine", {
        /**
         * Color: 'AquaMarine' HEX: #7FFFD4'
         */
        get: function () {
            return Color.fromHex(0x7FFFD4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Azure", {
        /**
         * Color: 'Azure' HEX: #007FFF'
         */
        get: function () {
            return Color.fromHex(0x007FFF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Beige", {
        /**
         * Color: 'Beige' HEX: #F5F5DC'
         */
        get: function () {
            return Color.fromHex(0xF5F5DC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Bisque", {
        /**
         * Color: 'Bisque' HEX: #FFE4C4'
         */
        get: function () {
            return Color.fromHex(0xFFE4C4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Black", {
        /**
         * Color: 'Black' HEX: #000000'
         */
        get: function () {
            return Color.fromHex(0x000000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "BlanchedAlmond", {
        /**
         * Color: 'BlanchedAlmond' HEX: #FFEBCD'
         */
        get: function () {
            return Color.fromHex(0xFFEBCD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Blue", {
        /**
         * Color: 'Blue' HEX: #0000FF'
         */
        get: function () {
            return Color.fromHex(0x0000FF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "BlueViolet", {
        /**
         * Color: 'blueViolet' HEX: #8A2BE2'
         */
        get: function () {
            return Color.fromHex(0x8A2BE2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Brown", {
        /**
         * Color: 'Brown' HEX: #654321'
         */
        get: function () {
            return Color.fromHex(0x654321);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Burlywood", {
        /**
         * Color: 'Burlywood' HEX: #DEB887'
         */
        get: function () {
            return Color.fromHex(0xDEB887);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "CadetBlue", {
        /**
         * Color: 'CadetBlue' HEX: #5F9EA0'
         */
        get: function () {
            return Color.fromHex(0x5F9EA0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Chartreuse", {
        /**
         * Color: 'Chartreuse' HEX: #7FFF00'
         */
        get: function () {
            return Color.fromHex(0x7FFF00);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Chocolate", {
        /**
         * Color: 'Chocolate' HEX: #D2691E'
         */
        get: function () {
            return Color.fromHex(0xD2691E);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Coral", {
        /**
         * Color: 'Coral' HEX: #FF7F50'
         */
        get: function () {
            return Color.fromHex(0xFF7F50);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "CornFlowerBlue", {
        /**
         * Color: 'CornFlowerBlue' HEX: #6495ED'
         */
        get: function () {
            return Color.fromHex(0x6495ED);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Cornsilk", {
        /**
         * Color: 'Cornsilk' HEX: #FFF8DC'
         */
        get: function () {
            return Color.fromHex(0xFFF8DC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Crimson", {
        /**
         * Color: 'Crimson' HEX: #DC143C'
         */
        get: function () {
            return Color.fromHex(0xDC143C);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Cyan", {
        /**
         * Color: 'Cyan' HEX: #00FFFF'
         */
        get: function () {
            return Color.fromHex(0x00FFFF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkBlue", {
        /**
         * Color: 'DarkBlue' HEX: #00008B'
         */
        get: function () {
            return Color.fromHex(0x00008B);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkCyan", {
        /**
         * Color: 'DarkCyan' HEX: #008B8B'
         */
        get: function () {
            return Color.fromHex(0x008B8B);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkGoldenRod", {
        /**
         * Color: 'DarkGoldenRod' HEX: #B8860B'
         */
        get: function () {
            return Color.fromHex(0xB8860B);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkGray", {
        /**
         * Color: 'DarkGray' HEX: #A9A9A9'
         */
        get: function () {
            return Color.fromHex(0xA9A9A9);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkGreen", {
        /**
         * Color: 'DarkGreen' HEX: #006400'
         */
        get: function () {
            return Color.fromHex(0x006400);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkKhaki", {
        /**
         * Color: 'DarkKhaki' HEX: #BDB76B'
         */
        get: function () {
            return Color.fromHex(0xBDB76B);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkGrey", {
        /**
         * Color: 'darkGrey' HEX: #A9A9A9'
         */
        get: function () {
            return Color.fromHex(0xA9A9A9);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Darkgray", {
        /**
         * Color: 'Darkgray' HEX: #A9A9A9'
         */
        get: function () {
            return Color.fromHex(0xA9A9A9);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkMagenta", {
        /**
         * Color: 'DarkMagenta' HEX: #8B008B'
         */
        get: function () {
            return Color.fromHex(0x8B008B);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkOliveGreen", {
        /**
         * Color: 'DarkOliveGreen' HEX: #556B2F'
         */
        get: function () {
            return Color.fromHex(0x556B2F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkOrange", {
        /**
         * Color: 'DarkOrange' HEX: #FF8C00'
         */
        get: function () {
            return Color.fromHex(0xFF8C00);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkOrchid", {
        /**
         * Color: 'DarkOrchid' HEX: #9932CC'
         */
        get: function () {
            return Color.fromHex(0x9932CC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkRed", {
        /**
         * Color: 'DarkRed' HEX: #8B0000'
         */
        get: function () {
            return Color.fromHex(0x8B0000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkSalmon", {
        /**
         * Color: 'DarkSalmon' HEX: #E9967A'
         */
        get: function () {
            return Color.fromHex(0xE9967A);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkSeaGreen", {
        /**
         * Color: 'DarkSeaGreen' HEX: #8FBC8F'
         */
        get: function () {
            return Color.fromHex(0x8FBC8F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkSlateBlue", {
        /**
         * Color: 'DarkSlateBlue' HEX: #483D8B'
         */
        get: function () {
            return Color.fromHex(0x483D8B);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkSlateGray", {
        /**
         * Color: 'DarkSlateGray' HEX: #2F4F4F'
         */
        get: function () {
            return Color.fromHex(0x2F4F4F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkSlateGrey", {
        /**
         * Color: 'DarkSlateGrey' HEX: #2F4F4F'
         */
        get: function () {
            return Color.fromHex(0x2F4F4F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkTurquoise", {
        /**
         * Color: 'DarkTurquoise' HEX: #00CED1'
         */
        get: function () {
            return Color.fromHex(0x00CED1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DarkViolet", {
        /**
         * Color: 'DarkViolet' HEX: #9400D3'
         */
        get: function () {
            return Color.fromHex(0x9400D3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DeepPink", {
        /**
         * Color: 'DeepPink' HEX: #FF1493'
         */
        get: function () {
            return Color.fromHex(0xFF1493);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DeepSkyBlue", {
        /**
         * Color: 'DeepSkyBlue' HEX: #00BFFF'
         */
        get: function () {
            return Color.fromHex(0x00BFFF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DimGray", {
        /**
         * Color: 'DimGray' HEX: #696969'
         */
        get: function () {
            return Color.fromHex(0x696969);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DimGrey", {
        /**
         * Color: 'DimGrey' HEX: #696969'
         */
        get: function () {
            return Color.fromHex(0x696969);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "DodgerBlue", {
        /**
         * Color: 'DodgerBlue' HEX: #1E90FF'
         */
        get: function () {
            return Color.fromHex(0x1E90FF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "FireBrick", {
        /**
         * Color: 'FireBrick' HEX: #B22222'
         */
        get: function () {
            return Color.fromHex(0xB22222);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "FloralWhite", {
        /**
         * Color: 'FloralWhite' HEX: #FFFAF0'
         */
        get: function () {
            return Color.fromHex(0xFFFAF0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "ForestGreen", {
        /**
         * Color: 'ForestGreen' HEX: #228B22'
         */
        get: function () {
            return Color.fromHex(0x228B22);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Fuchsia", {
        /**
         * Color: 'Fuchsia' HEX: #FF00FF'
         */
        get: function () {
            return Color.fromHex(0xFF00FF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Gainsboro", {
        /**
         * Color: 'Gainsboro' HEX: #DCDCDC'
         */
        get: function () {
            return Color.fromHex(0xDCDCDC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "GhostWhite", {
        /**
         * Color: 'GhostWhite' HEX: #F8F8FF'
         */
        get: function () {
            return Color.fromHex(0xF8F8FF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Gold", {
        /**
         * Color: 'Gold' HEX: #FFD700'
         */
        get: function () {
            return Color.fromHex(0xFFD700);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "GoldenRod", {
        /**
         * Color: 'GoldenRod' HEX: #DAA520'
         */
        get: function () {
            return Color.fromHex(0xDAA520);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Gray", {
        /**
         * Color: 'Gray' HEX: #808080'
         */
        get: function () {
            return Color.fromHex(0x808080);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Green", {
        /**
         * Color: 'Green' HEX: #008000'
         */
        get: function () {
            return Color.fromHex(0x008000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "GreenYellow", {
        /**
         * Color: 'GreenYellow' HEX: #ADFF2F'
         */
        get: function () {
            return Color.fromHex(0xADFF2F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Grey", {
        /**
         * Color: 'Grey' HEX: #808080'
         */
        get: function () {
            return Color.fromHex(0x808080);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "HoneyDew", {
        /**
         * Color: 'HoneyDew' HEX: #F0FFF0'
         */
        get: function () {
            return Color.fromHex(0xF0FFF0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "HotPink", {
        /**
         * Color: 'HotPink' HEX: #FF69B4'
         */
        get: function () {
            return Color.fromHex(0xFF69B4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "IndianRed", {
        /**
         * Color: 'IndianRed' HEX: #CD5C5C'
         */
        get: function () {
            return Color.fromHex(0xCD5C5C);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Indigo", {
        /**
         * Color: 'Indigo' HEX: #4B0082'
         */
        get: function () {
            return Color.fromHex(0x4B0082);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Ivory", {
        /**
         * Color: 'Ivory' HEX: #FFFFF0'
         */
        get: function () {
            return Color.fromHex(0xFFFFF0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Khaki", {
        /**
         * Color: 'Khaki' HEX: #F0E68C'
         */
        get: function () {
            return Color.fromHex(0xF0E68C);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Lavender", {
        /**
         * Color: 'Lavender' HEX: #E6E6FA'
         */
        get: function () {
            return Color.fromHex(0xE6E6FA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LavenderBlush", {
        /**
         * Color: 'LavenderBlush' HEX: #FFF0F5'
         */
        get: function () {
            return Color.fromHex(0xFFF0F5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LawnGreen", {
        /**
         * Color: 'LawnGreen' HEX: #7CFC00'
         */
        get: function () {
            return Color.fromHex(0x7CFC00);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightBlue", {
        /**
         * Color: 'LightBlue' HEX: #ADD8E6'
         */
        get: function () {
            return Color.fromHex(0xADD8E6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightCoral", {
        /**
         * Color: 'LightCoral' HEX: #F08080'
         */
        get: function () {
            return Color.fromHex(0xF08080);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightCyan", {
        /**
         * Color: 'LightCyan' HEX: #E0FFFF'
         */
        get: function () {
            return Color.fromHex(0xE0FFFF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightGray", {
        /**
         * Color: 'LightGray' HEX: #D3D3D3'
         */
        get: function () {
            return Color.fromHex(0xD3D3D3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightGreen", {
        /**
         * Color: 'LightGreen' HEX: #90EE90'
         */
        get: function () {
            return Color.fromHex(0x90EE90);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightGrey", {
        /**
         * Color: 'LightGrey' HEX: #D3D3D3'
         */
        get: function () {
            return Color.fromHex(0xD3D3D3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightPink", {
        /**
         * Color: 'LightPink' HEX: #FFB6C1'
         */
        get: function () {
            return Color.fromHex(0xFFB6C1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightSalmon", {
        /**
         * Color: 'LightSalmon' HEX: #FFA07A'
         */
        get: function () {
            return Color.fromHex(0xFFA07A);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightSeaGreen", {
        /**
         * Color: 'LightSeaGreen' HEX: #20B2AA'
         */
        get: function () {
            return Color.fromHex(0x20B2AA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightSkyBlue", {
        /**
         * Color: 'LightSkyBlue' HEX: #87CEFA'
         */
        get: function () {
            return Color.fromHex(0x87CEFA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightSlateGray", {
        /**
         * Color: 'LightSlateGray' HEX: #778899'
         */
        get: function () {
            return Color.fromHex(0x778899);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightSlateGrey", {
        /**
         * Color: 'LightSlateGrey' HEX: #778899'
         */
        get: function () {
            return Color.fromHex(0x778899);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightSteelBlue", {
        /**
         * Color: 'LightSteelBlue' HEX: #B0C4DE'
         */
        get: function () {
            return Color.fromHex(0xB0C4DE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LightYellow", {
        /**
         * Color: 'LightYellow' HEX: #FFFFE0'
         */
        get: function () {
            return Color.fromHex(0xFFFFE0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Lime", {
        /**
         * Color: 'Lime' HEX: #00FF00'
         */
        get: function () {
            return Color.fromHex(0x00FF00);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "LimeGreen", {
        /**
         * Color: 'LimeGreen' HEX: #32CD32'
         */
        get: function () {
            return Color.fromHex(0x32CD32);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Linen", {
        /**
         * Color: 'Linen' HEX: #FAF0E6'
         */
        get: function () {
            return Color.fromHex(0xFAF0E6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Magenta", {
        /**
         * Color: 'Magenta' HEX: #FF00FF'
         */
        get: function () {
            return Color.fromHex(0xFF00FF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Maroon", {
        /**
         * Color: 'Maroon' HEX: #800000'
         */
        get: function () {
            return Color.fromHex(0x800000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumAquaMarine", {
        /**
         * Color: 'MediumAquaMarine' HEX: #66CDAA'
         */
        get: function () {
            return Color.fromHex(0x66CDAA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumBlue", {
        /**
         * Color: 'MediumBlue' HEX: #0000CD'
         */
        get: function () {
            return Color.fromHex(0x0000CD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumOrchid", {
        /**
         * Color: 'MediumOrchid' HEX: #BA55D3'
         */
        get: function () {
            return Color.fromHex(0xBA55D3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumPurple", {
        /**
         * Color: 'MediumPurple' HEX: #9370DB'
         */
        get: function () {
            return Color.fromHex(0x9370DB);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumSeaGreen", {
        /**
         * Color: 'MediumSeaGreen' HEX: #3CB371'
         */
        get: function () {
            return Color.fromHex(0x3CB371);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumSlateBlue", {
        /**
         * Color: 'MediumSlateBlue' HEX: #7B68EE'
         */
        get: function () {
            return Color.fromHex(0x7B68EE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumSpringGreen", {
        /**
         * Color: 'MediumSpringGreen' HEX: #00FA9A'
         */
        get: function () {
            return Color.fromHex(0x00FA9A);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumTurquoise", {
        /**
         * Color: 'MediumTurquoise' HEX: #48D1CC'
         */
        get: function () {
            return Color.fromHex(0x48D1CC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MediumVioletRed", {
        /**
         * Color: 'MediumVioletRed' HEX: #C71585'
         */
        get: function () {
            return Color.fromHex(0xC71585);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MidnightBlue", {
        /**
         * Color: 'MidnightBlue' HEX: #191970'
         */
        get: function () {
            return Color.fromHex(0x191970);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MintCream", {
        /**
         * Color: 'MintCream' HEX: #F5FFFA'
         */
        get: function () {
            return Color.fromHex(0xF5FFFA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "MistyRose", {
        /**
         * Color: 'MistyRose' HEX: #FFE4E1'
         */
        get: function () {
            return Color.fromHex(0xFFE4E1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Moccasin", {
        /**
         * Color: 'Moccasin' HEX: #FFE4B5'
         */
        get: function () {
            return Color.fromHex(0xFFE4B5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "NavajoWhite", {
        /**
         * Color: 'NavajoWhite' HEX: #FFDEAD'
         */
        get: function () {
            return Color.fromHex(0xFFDEAD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Navy", {
        /**
         * Color: 'Navy' HEX: #000080'
         */
        get: function () {
            return Color.fromHex(0x000080);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "OldLace", {
        /**
         * Color: 'OldLace' HEX: #FDF5E6'
         */
        get: function () {
            return Color.fromHex(0xFDF5E6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Olive", {
        /**
         * Color: 'Olive' HEX: #808000'
         */
        get: function () {
            return Color.fromHex(0x808000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "OliveDrab", {
        /**
         * Color: 'OliveDrab' HEX: #6B8E23'
         */
        get: function () {
            return Color.fromHex(0x6B8E23);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Orange", {
        /**
         * Color: 'Orange' HEX: #FFA500'
         */
        get: function () {
            return Color.fromHex(0xFFA500);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "OrangeRed", {
        /**
         * Color: 'OrangeRed' HEX: #FF4500'
         */
        get: function () {
            return Color.fromHex(0xFF4500);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Orchid", {
        /**
         * Color: 'Orchid' HEX: #DA70D6'
         */
        get: function () {
            return Color.fromHex(0xDA70D6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "PaleGoldenRod", {
        /**
         * Color: 'PaleGoldenRod' HEX: #EEE8AA'
         */
        get: function () {
            return Color.fromHex(0xEEE8AA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "PaleGreen", {
        /**
         * Color: 'PaleGreen' HEX: #98FB98'
         */
        get: function () {
            return Color.fromHex(0x98FB98);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "PaleTurquoise", {
        /**
         * Color: 'PaleTurquoise' HEX: #AFEEEE'
         */
        get: function () {
            return Color.fromHex(0xAFEEEE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "PaleVioletRed", {
        /**
         * Color: 'PaleVioletRed' HEX: #DB7093'
         */
        get: function () {
            return Color.fromHex(0xDB7093);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "PapayaWhip", {
        /**
         * Color: 'PapayaWhip' HEX: #FFDAB9'
         */
        get: function () {
            return Color.fromHex(0xFFDAB9);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "PeachPuff", {
        /**
         * Color: 'PeachPuff' HEX: #FFEFD5'
         */
        get: function () {
            return Color.fromHex(0xFFEFD5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Peru", {
        /**
         * Color: 'Peru' HEX: #CD853F'
         */
        get: function () {
            return Color.fromHex(0xCD853F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Pink", {
        /**
         * Color: 'Pink' HEX: #FFC0CB'
         */
        get: function () {
            return Color.fromHex(0xFFC0CB);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Plum", {
        /**
         * Color: 'Plum' HEX: #DDA0DD'
         */
        get: function () {
            return Color.fromHex(0xDDA0DD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "PowderBlue", {
        /**
         * Color: 'PowderBlue' HEX: #B0E0E6'
         */
        get: function () {
            return Color.fromHex(0xB0E0E6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Purple", {
        /**
         * Color: 'Purple' HEX: #800080'
         */
        get: function () {
            return Color.fromHex(0x800080);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "RebeccaPurple", {
        /**
         * Color: 'RebeccaPurple' HEX: #663399'
         */
        get: function () {
            return Color.fromHex(0x663399);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Red", {
        /**
         * Color: 'Red' HEX: #FF0000'
         */
        get: function () {
            return Color.fromHex(0xFF0000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "RosyBrown", {
        /**
         * Color: 'RosyBrown' HEX: #BC8F8F'
         */
        get: function () {
            return Color.fromHex(0xBC8F8F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "RoyalBlue", {
        /**
         * Color: 'RoyalBlue' HEX: #4169E1'
         */
        get: function () {
            return Color.fromHex(0x4169E1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SaddleBrown", {
        /**
         * Color: 'SaddleBrown' HEX: #8B4513'
         */
        get: function () {
            return Color.fromHex(0x8B4513);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Salmon", {
        /**
         * Color: 'Salmon' HEX: #FA8072'
         */
        get: function () {
            return Color.fromHex(0xFA8072);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SandyBrown", {
        /**
         * Color: 'SandyBrown' HEX: #F4A460'
         */
        get: function () {
            return Color.fromHex(0xF4A460);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SeaGreen", {
        /**
         * Color: 'SeaGreen' HEX: #2E8B57'
         */
        get: function () {
            return Color.fromHex(0x2E8B57);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SeaShell", {
        /**
         * Color: 'SeaShell' HEX: #FFF5EE'
         */
        get: function () {
            return Color.fromHex(0xFFF5EE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Sienna", {
        /**
         * Color: 'Sienna' HEX: #A0522D'
         */
        get: function () {
            return Color.fromHex(0xA0522D);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Silver", {
        /**
         * Color: 'Silver' HEX: #C0C0C0'
         */
        get: function () {
            return Color.fromHex(0xC0C0C0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SkyBlue", {
        /**
         * Color: 'SkyBlue' HEX: #87CEEB'
         */
        get: function () {
            return Color.fromHex(0x87CEEB);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SlateBlue", {
        /**
         * Color: 'SlateBlue' HEX: #6A5ACD'
         */
        get: function () {
            return Color.fromHex(0x6A5ACD);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SlateGray", {
        /**
         * Color: 'SlateGray' HEX: #708090'
         */
        get: function () {
            return Color.fromHex(0x708090);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SlateGrey", {
        /**
         * Color: 'SlateGrey' HEX: #708090'
         */
        get: function () {
            return Color.fromHex(0x708090);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Snow", {
        /**
         * Color: 'Snow' HEX: #FFFAFA'
         */
        get: function () {
            return Color.fromHex(0xFFFAFA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SpringGreen", {
        /**
         * Color: 'SpringGreen' HEX: #00FF7F'
         */
        get: function () {
            return Color.fromHex(0x00FF7F);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "SteelBlue", {
        /**
         * Color: 'SteelBlue' HEX: #4682B4'
         */
        get: function () {
            return Color.fromHex(0x4682B4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Tan", {
        /**
         * Color: 'Tan' HEX: #D2B48C'
         */
        get: function () {
            return Color.fromHex(0xD2B48C);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Teal", {
        /**
         * Color: 'Teal' HEX: #008080'
         */
        get: function () {
            return Color.fromHex(0x008080);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Thistle", {
        /**
         * Color: 'Thistle' HEX: #D8BFD8'
         */
        get: function () {
            return Color.fromHex(0xD8BFD8);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Tomato", {
        /**
         * Color: 'Tomato' HEX: #FF6347'
         */
        get: function () {
            return Color.fromHex(0xFF6347);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Turquoise", {
        /**
         * Color: 'Turquoise' HEX: #40E0D0'
         */
        get: function () {
            return Color.fromHex(0x40E0D0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Violet", {
        /**
         * Color: 'Violet' HEX: #EE82EE'
         */
        get: function () {
            return Color.fromHex(0xEE82EE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Wheat", {
        /**
         * Color: 'Wheat' HEX: #F5DEB3'
         */
        get: function () {
            return Color.fromHex(0xF5DEB3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "White", {
        /**
         * Color: 'White' HEX: #FFFFFF'
         */
        get: function () {
            return Color.fromHex(0xFFFFFF);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "WhiteSmoke", {
        /**
         * Color: 'WhiteSmoke' HEX: #F5F5F5'
         */
        get: function () {
            return Color.fromHex(0xF5F5F5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Yellow", {
        /**
         * Color: 'Yellow' HEX: #FFFF00'
         */
        get: function () {
            return Color.fromHex(0xFFFF00);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "YellowGreen", {
        /**
         * Color: 'YellowGreen' HEX: #9ACD32'
         */
        get: function () {
            return Color.fromHex(0x9ACD32);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number} hex A 24 bit hexidecimal value. e.g: 0xFFFFFF
     * @returns {Color}
     */
    Color.fromHex = function (hex) {
        return new Color(hex);
    };
    /**
     * Constructs a color object with the provided RGB values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @returns {Color}
     */
    Color.fromRGB = function (red, green, blue) {
        return new Color(red, green, blue);
    };
    /**
     * Constructs a color object with the provided RGBA values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @returns {Color}
     */
    Color.fromRGBA = function (red, green, blue, alpha) {
        return new Color(red, green, blue, alpha);
    };
    /**
      * Builds the current color instance into a hexidecimal format
      *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
      * @returns {Color}
      */
    Color.toHexString = function (red, green, blue, alpha) {
        var hex = "";
        if (alpha === void 0) {
            var value = ((red << 16) + (green << 8) + blue).toString(16);
            hex = "#" + conversions.padLeft(value, "0", 6);
        }
        else {
            var value = ((red << 24 >>> 0) + (green << 16) + (blue << 8) + alpha).toString(16);
            hex = "#" + conversions.padLeft(value, "0", 8);
        }
        return hex;
    };
    /**
     * Linear interpolates a hexidecimal color value, this allows for a fade effect transition between each steps of colors
     *
     * @param from The initial starting color
     * @param to The final resting color
     * @param increment Resolution of steps to take before making a rest to the defined end color
     * @returns {Color}
     */
    Color.lerp = function (from, to, increment) {
        if (utils.isNullOrUndefined(from)) {
            throw new Error("The initial start color was not provided");
        }
        if (utils.isNullOrUndefined(to)) {
            throw new Error("The finally transition color was not provided!");
        }
        if (!utils.isNumber(increment)) {
            increment = 1;
        }
        return from.lerp(to, increment);
    };
    Object.defineProperty(Color.prototype, "hex", {
        /**
         * Gets the hexidecimal value for the current color instance
         */
        get: function () {
            return this._hex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Constructs a color object with the provided RGB values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @returns {Color} Color
     */
    Color.prototype.setRGB = function (red, green, blue) {
        return this.setRGBA(red, green, blue, this.alpha);
    };
    /**
     * Constructs a color object with the provided RGBA values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
     * @returns {Color} Color
     */
    Color.prototype.setRGBA = function (red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        this._updateHex();
        return this;
    };
    /**
     * Converts the current @see Color instance to a HSLA string
     *
     * @returns {String} 'hsla(hue, saturation, lightness)'
     */
    Color.prototype.toHSLA = function () {
        /**
         * Make rgb fractions from 0 - 1
         */
        var red = this.red / 255;
        var green = this.green / 255;
        var blue = this.blue / 255;
        /**
         * Obtain color dominance
         */
        var min = Math.min(red, green, blue);
        var max = Math.max(red, green, blue);
        var delta = max - min;
        /**
         * Define HSLA components
         */
        var hue = 0;
        var saturation = 0;
        var lightness = 0;
        /**
         * Map current @see Color instance alpha from 0 - 255 to 0 - 1
         */
        var alpha = (this.alpha / 255);
        /**
         * Code below calculates hue from accordinly to which @see Color channel is most dominant
         */
        /**
         * No color difference
         */
        if (delta === 0) {
            hue = 0;
        }
        /**
         * Red is most dominant
         */
        else if (max === red) {
            hue = ((green - blue) / delta) % 6;
        }
        /**
         * Green is most dominant
         */
        else if (max === green) {
            hue = (blue - red) / delta + 2;
        }
        /**
         * Blue is most dominant
         */
        else {
            hue = (red - green) / delta + 4;
        }
        /**
         * Correctly map the hue to degrees and above negative values
         */
        hue = Math.round(hue * 60);
        if (hue < 0) {
            hue += 360;
        }
        /**
         * Code below calculates the lightness
         */
        lightness = (max + min) / 2;
        /**
         * Calculate saturation, based on the @see lightness average
         */
        saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
        /**
         * Get lightness and saturation pecentages
         */
        saturation = (saturation * 100);
        lightness = (lightness * 100);
        /**
         * Finally return the HSLA string
         */
        return "hsla(" + hue + "," + saturation + "%," + lightness + "%," + alpha + ")";
    };
    /**
     * Sets the current @see Color instance from the HSLA color format components
     *
     * @param {Number} Hue A value in a range of 0 - 360 degrees, representing a color wheel
     * @param {Number} saturation Percentage of color saturation
     * @param {Number} lightness Percentage of color lightness white - black scale
     * @returns {Color}
     */
    Color.prototype.setHSLA = function (hue, saturation, lightness, alpha) {
        /**
         * Being a percentage value , we must get fractions of 1
         */
        saturation /= 100;
        lightness /= 100;
        /**
         * Color intensity
         */
        var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
        var satX = chroma * (1 - Math.abs((hue / 60) % 2 - 1));
        var intensity = lightness - chroma / 2;
        /**
         * Define RGBA components
         */
        var red = 0;
        var green = 0;
        var blue = 0;
        /**
         * HSLA alpha value is a range from 0 - 1, therefore calculate a factor of 255
         */
        alpha = utils.isNumber(alpha) ? (alpha * 255) : this.alpha;
        /**
         * Code below calculates where the color channel lies within the wheel based from the hue angle
         *
         * @see chroma represents which color is most dominant
         */
        /**
         * Mix red and green dominance color band
         */
        if (hue >= 0 && hue < 60) {
            red = chroma;
            green = satX;
            blue = 0;
        }
        /**
         * Mostly green color dominance
         */
        else if (hue >= 60 && hue < 120) {
            red = satX;
            green = chroma;
            blue = 0;
        }
        /**
         * Mix green and blue dominance
         */
        else if (hue >= 120 && hue < 180) {
            red = 0;
            green = chroma;
            blue = satX;
        }
        /**
         * Mostly blue dominance
         */
        else if (hue >= 180 && hue < 240) {
            red = 0;
            green = satX;
            blue = chroma;
        }
        /**
         * Mix blue and red dominance
         */
        else if (hue >= 240 && hue < 300) {
            red = satX;
            green = 0;
            blue = chroma;
        }
        /**
         * Mostyl red dominance
         */
        else if (hue >= 300 && hue < 360) {
            red = chroma;
            green = 0;
            blue = satX;
        }
        /**
         * Map channels to 255 based on @see intensity
         */
        this.red = Math.round((red + intensity) * 255);
        this.green = Math.round((green + intensity) * 255);
        this.blue = Math.round((blue + intensity) * 255);
        this.alpha = alpha;
        /**
         * Return @see Color instance for chaing
         */
        return this;
    };
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number | string} hex A 24 bit hexidecimal value or a string representation. e.g: Number: 0xFFFFFF, string: #FFFFFF
     * @returns {Color} Color
     */
    Color.prototype.setHex = function (hex) {
        var color = null;
        var colorHex = utils.isNumber(hex) ? hex.toString(16) : (utils.isString(hex) ? hex : "#000").replace("0x", "");
        var size = colorHex.length === 8 ? 8 : 6;
        colorHex = conversions.padLeft(colorHex, "0", size);
        colorHex = colorHex.replace("0x", "#");
        var index = colorHex.indexOf("#");
        if (!(index === 0)) {
            // prepend the hash delimiter
            colorHex = "#" + colorHex;
        }
        // match any shorthand hexidecimal values, such as: #fff => #ffffff
        colorHex = colorHex.replace(Color._shortHexRegex, function (m, r, g, b) {
            return "#" + r + r + g + g + b + b;
        });
        // should return either a group of 3 or 4 byte sequences
        var results = colorHex.match(Color._hexRegex);
        if (typeof results === "undefined" || results === null) {
            // dont change the current color instance
            return this;
        }
        var group = [];
        var length = 3;
        if (results.length >= 4) {
            length = 4;
        }
        // iterate through the results, skipping the first indexed position
        var i = 0;
        for (; i < length; i++) {
            var hex_1 = 0;
            var result = results[i];
            if (!utils.isNullOrUndefined(result)) {
                // convert to decimal
                var value = parseInt(result, 16);
                if (utils.isNumber(hex_1)) {
                    hex_1 = value;
                }
            }
            group.push(hex_1);
        }
        this.setRGBA(group[0], group[1], group[2], group.length === 4 ? group[3] : this.alpha);
        return this;
    };
    /**
     * Linear interpolates to a new color by a defined amount of steps
     *
     * @param {Color} to The final resting color
     * @param {Number} increment Resolution of steps to take before making a rest to the defined end color
     * @returns {Color}
     */
    Color.prototype.lerp = function (to, increment) {
        if (to instanceof Color) {
            var currentHexValue = this.hex;
            var toHexValue = to.hex;
            var cRed = this.red;
            var cGreen = this.green;
            var cBlue = this.blue;
            var cAlpha = this.alpha;
            var tRed = to.red;
            var tGreen = to.green;
            var tBlue = to.blue;
            var tAlpha = to.alpha;
            var nRed = Math.round(math.clamp(math.lerp(cRed, tRed, increment), 0, 255));
            var nGreen = Math.round(math.clamp(math.lerp(cGreen, tGreen, increment), 0, 255));
            var nBlue = Math.round(math.clamp(math.lerp(cBlue, tBlue, increment), 0, 255));
            var nAlpha = Math.round(math.clamp(math.lerp(cAlpha, tAlpha, increment), 0, 255));
            this.setRGBA(nRed, nGreen, nBlue, nAlpha);
        }
        return this;
    };
    /**
     * Builds a string representation for the current color instance
     *
     * @param {Boolean} hexidecimal The option to output the current color into hexidecimal format, rather than RGBA
     */
    Color.prototype.toString = function (hexidecimal) {
        var _a = this, red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
        if (hexidecimal === true) {
            return Color.toHexString(red, green, blue, alpha);
        }
        return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
    };
    Color.prototype._updateHex = function () {
        var _a = this, red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
        this._hex = (red << 24) + (green << 16) + (blue << 8) + (alpha);
    };
    /**
     * Js removes any beginning zeros once converted to hexidecimal, therefore check to see if it must be added back
     *
     * @private
     * @param {String} value
     */
    Color.addZeroPadding = function (value) {
        return (value.length === 2 || value.length === 5 || value.length === 7) ? ("0" + value) : value;
    };
    /**
     * Regular expression for the hexidecimal match sequence
     */
    Color._hexRegex = /([a-fA-F\d]{2})/g;
    /**
     * Shorthand regular expression for the hexidecimal match sequence
     */
    Color._shortHexRegex = /^#([a-fA-F\d])([a-fA-F\d])([a-fA-F\d])$/g;
    /**
     * Creates a @see Color instance from the HSLA color format components
     *
     * @param {Number} Hue A value in a range of 0 - 360 degrees, representing a color wheel
     * @param {Number} saturation Percentage of color saturation
     * @param {Number} lightness Percentage of color lightness white - black scale
     * @param {Number} alpha Optional alpha value, defaults to 1
     * @returns {Color}
     */
    Color.fromHSLA = function (hue, saturation, lightness, alpha) {
        return Color.Black.setHSLA(hue, saturation, lightness, alpha || 1);
    };
    return Color;
}());
exports.Color = Color;
