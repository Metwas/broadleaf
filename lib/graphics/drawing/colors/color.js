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
const utils_1 = require("../../../utils/utils");
const math_1 = require("../../../math/math");
/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the base types
 */
class Color {
    /**
     * Constructs a color object with the provided rgb values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
     * @returns {Color} Color
     */
    constructor(red, green, blue, alpha = 255) {
        this.name = "";
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.alpha = 255;
        this._hex = math_1.default.MAX_UNSIGNED_32BIT;
        if (utils_1.default.isUndefined(green) && utils_1.default.isUndefined(blue)) {
            // only default to the first parameter
            this.setHex(red);
        }
        else {
            this.setRGB(Number(red), Number(green), Number(blue));
        }
    }
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number} hex A 24 bit hexidecimal value. e.g: 0xFFFFFF
     */
    static fromHex(hex) {
        return new Color(hex);
    }
    /**
     * Constructs a color object with the provided RGB values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     */
    static fromRGB(red, green, blue) {
        return new Color(red, green, blue);
    }
    /**
     * Constructs a color object with the provided RGBA values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     */
    static fromRGBA(red, green, blue, alpha) {
        return new Color(red, green, blue, alpha);
    }
    /**
      * Builds the current color instance into a hexidecimal format
      *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
      * @returns {Color} Color
      */
    static toHexString(red, green, blue, alpha) {
        let hex = "";
        if (alpha === void 0) {
            const value = ((red << 16) + (green << 8) + blue).toString(16);
            hex = "#" + Color.addZeroPadding(value);
        }
        else {
            const value = ((red << 24 >>> 0) + (green << 16) + (blue << 8) + alpha).toString(16);
            hex = "#" + Color.addZeroPadding(value);
        }
        return hex;
    }
    /**
     * Linear interpolates a hexidecimal color value, this allows for a fade effect transition between each steps of colors
     *
     * @param from The initial starting color
     * @param to The final resting color
     * @param increment Resolution of steps to take before making a rest to the defined end color
     * @returns {Color}
     */
    static lerp(from, to, increment) {
        if (utils_1.default.isNullOrUndefined(from)) {
            throw new Error("The initial start color was not provided");
        }
        if (utils_1.default.isNullOrUndefined(to)) {
            throw new Error("The finally transition color was not provided!");
        }
        return from.lerp(to, increment);
    }
    /**
     * Gets the hexidecimal value for the current color instance
     */
    get hex() {
        return this._hex;
    }
    /**
     * Constructs a color object with the provided RGB values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @returns {Color} Color
     */
    setRGB(red, green, blue) {
        return this.setRGBA(red, green, blue, this.alpha);
    }
    /**
     * Constructs a color object with the provided RGBA values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
     * @returns {Color} Color
     */
    setRGBA(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        this._updateHex();
        return this;
    }
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number | string} hex A 24 bit hexidecimal value or a string representation. e.g: Number: 0xFFFFFF, string: #FFFFFF
     * @returns {Color} Color
     */
    setHex(hex) {
        let color = null;
        // default to black
        let colorHex = utils_1.default.isNumber(hex) ? hex.toString(16) : (utils_1.default.isString(hex) ? hex : "#000").replace("0x", "");
        colorHex = Color.addZeroPadding(colorHex);
        colorHex = colorHex.replace("0x", "#");
        if (!(colorHex.indexOf("#") > -1)) {
            // prepend the hash delimiter
            colorHex = "#" + colorHex;
        }
        // shorthand initialization #fff -> #ffffff
        const shorthandHex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        colorHex = colorHex.replace(shorthandHex, function (m, r, g, b) {
            return "#" + r + r + g + g + b + b;
        });
        var hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);
        let nRed = 0;
        let nGreen = 0;
        let nBlue = 0;
        if (hexMatch) {
            nRed = parseInt(hexMatch[1], 16);
            nGreen = parseInt(hexMatch[2], 16);
            nBlue = parseInt(hexMatch[3], 16);
        }
        this.setRGB(nRed, nGreen, nBlue);
        return this;
    }
    /**
     * Linear interpolates to a new color by a defined amount of steps
     *
     * @param to The final resting color
     * @param increment Resolution of steps to take before making a rest to the defined end color
     * @returns {Color}
     */
    lerp(to, increment) {
        const currentHexValue = this.hex;
        const toHexValue = to.hex;
        const cRed = currentHexValue >> 24;
        const cGreen = currentHexValue >> 16;
        const cBlue = currentHexValue >> 8;
        const cAlpha = currentHexValue | 0;
        const tRed = toHexValue >> 24;
        const tGreen = toHexValue >> 16;
        const tBlue = toHexValue >> 8;
        const tAlpha = toHexValue | 0;
        const nRed = cRed + increment * (tRed - cRed);
        const nGreen = cGreen + increment * (tGreen - cGreen);
        const nBlue = cBlue + increment * (tBlue - cBlue);
        const nAlpha = cAlpha + increment * (tAlpha - cAlpha);
        this.setRGBA(nRed, nGreen, nBlue, nAlpha);
        return this;
    }
    /**
     * Builds a string representation for the current color instance
     *
     * @param {Boolean} hexidecimal The option to output the current color into hexidecimal format, rather than RGBA
     */
    toString(hexidecimal) {
        const { red, green, blue, alpha } = this;
        if (hexidecimal === true) {
            return Color.toHexString(red, green, blue, alpha);
        }
        return `rgba(${red},${green},${blue},${alpha})`;
    }
    _updateHex() {
        const { red, green, blue, alpha } = this;
        this._hex = (red << 24) + (green << 16) + (blue << 8) + (alpha);
    }
    /**
     * Js removes any beginning zeros once converted to hexidecimal, therefore check to see if it must be added back
     *
     * @private
     * @param {String} value
     */
    static addZeroPadding(value) {
        return (value.length === 2 || value.length === 5 || value.length === 7) ? ("0" + value) : value;
    }
}
/**
 * Color: 'AliceBlue' HEX: '0xF0F8FF'
 */
Color.AliceBlue = Color.fromHex(0xF0F8FF);
/**
 * Color: 'AntiqueWhite' HEX: '0xFAEBD7'
 */
Color.AntiqueWhite = Color.fromHex(0xFAEBD7);
/**
 * Color: 'Aqua' HEX: '0x00FFFF'
 */
Color.Aqua = Color.fromHex(0x00FFFF);
/**
 * Color: 'AquaMarine' HEX: '0x7FFFD4'
 */
Color.AquaMarine = Color.fromHex(0x7FFFD4);
/**
 * Color: 'Azure' HEX: '0xF0FFFF'
 */
Color.Azure = Color.fromHex(0xF0FFFF);
/**
 * Color: 'Beige' HEX: '0xF5F5DC'
 */
Color.Beige = Color.fromHex(0xF5F5DC);
/**
 * Color: 'Bisque' HEX: '0xFFE4C4'
 */
Color.Bisque = Color.fromHex(0xFFE4C4);
/**
 * Color: 'Black' HEX: '0x000000'
 */
Color.Black = Color.fromHex(0x000000);
/**
 * Color: 'BlanchedAlmond' HEX: '0xFFEBCD'
 */
Color.BlanchedAlmond = Color.fromHex(0xFFEBCD);
/**
 * Color: 'Blue' HEX: '0x0000FF'
 */
Color.Blue = Color.fromHex(0x0000FF);
/**
 * Color: 'blueViolet' HEX: '0x8A2BE2'
 */
Color.BlueViolet = Color.fromHex(0x8A2BE2);
/**
 * Color: 'Brown' HEX: '0xA52A2A'
 */
Color.Brown = Color.fromHex(0xA52A2A);
/**
 * Color: 'Burlywood' HEX: '0xDEB887'
 */
Color.Burlywood = Color.fromHex(0xDEB887);
/**
 * Color: 'CadetBlue' HEX: '0x5F9EA0'
 */
Color.CadetBlue = Color.fromHex(0x5F9EA0);
/**
 * Color: 'Chartreuse' HEX: '0x7FFF00'
 */
Color.Chartreuse = Color.fromHex(0x7FFF00);
/**
 * Color: 'Chocolate' HEX: '0xD2691E'
 */
Color.Chocolate = Color.fromHex(0xD2691E);
/**
 * Color: 'Coral' HEX: '0xFF7F50'
 */
Color.Coral = Color.fromHex(0xFF7F50);
/**
 * Color: 'CornFlowerBlue' HEX: '0x6495ED'
 */
Color.CornFlowerBlue = Color.fromHex(0x6495ED);
/**
 * Color: 'Cornsilk' HEX: '0xFFF8DC'
 */
Color.Cornsilk = Color.fromHex(0xFFF8DC);
/**
 * Color: 'Crimson' HEX: '0xDC143C'
 */
Color.Crimson = Color.fromHex(0xDC143C);
/**
 * Color: 'Cyan' HEX: '0x00FFFF'
 */
Color.Cyan = Color.fromHex(0x00FFFF);
/**
 * Color: 'DarkBlue' HEX: '0x00008B'
 */
Color.DarkBlue = Color.fromHex(0x00008B);
/**
 * Color: 'DarkCyan' HEX: '0x008B8B'
 */
Color.DarkCyan = Color.fromHex(0x008B8B);
/**
 * Color: 'DarkGoldenRod' HEX: '0xB8860B'
 */
Color.DarkGoldenRod = Color.fromHex(0xB8860B);
/**
 * Color: 'DarkGray' HEX: '0xA9A9A9'
 */
Color.DarkGray = Color.fromHex(0xA9A9A9);
/**
 * Color: 'DarkGreen' HEX: '0x006400'
 */
Color.DarkGreen = Color.fromHex(0x006400);
/**
 * Color: 'DarkKhaki' HEX: '0xBDB76B'
 */
Color.DarkKhaki = Color.fromHex(0xBDB76B);
/**
 * Color: 'darkGrey' HEX: '0xA9A9A9'
 */
Color.darkGrey = Color.fromHex(0xA9A9A9);
/**
 * Color: 'Darkgray' HEX: '0x000000'
 */
Color.Darkgray = Color.fromHex(0x000000);
/**
 * Color: 'DarkMagenta' HEX: '0x8B008B'
 */
Color.DarkMagenta = Color.fromHex(0x8B008B);
/**
 * Color: 'DarkOliveGreen' HEX: '0x556B2F'
 */
Color.DarkOliveGreen = Color.fromHex(0x556B2F);
/**
 * Color: 'DarkOrange' HEX: '0xFF8C00'
 */
Color.DarkOrange = Color.fromHex(0xFF8C00);
/**
 * Color: 'DarkOrchid' HEX: '0x9932CC'
 */
Color.DarkOrchid = Color.fromHex(0x9932CC);
/**
 * Color: 'DarkRed' HEX: '0x8B0000'
 */
Color.DarkRed = Color.fromHex(0x8B0000);
/**
 * Color: 'DarkSalmon' HEX: '0xE9967A'
 */
Color.DarkSalmon = Color.fromHex(0xE9967A);
/**
 * Color: 'DarkSeaGreen' HEX: '0x8FBC8F'
 */
Color.DarkSeaGreen = Color.fromHex(0x8FBC8F);
/**
 * Color: 'DarkSlateBlue' HEX: '0x483D8B'
 */
Color.DarkSlateBlue = Color.fromHex(0x483D8B);
/**
 * Color: 'DarkSlateGray' HEX: '0x2F4F4F'
 */
Color.DarkSlateGray = Color.fromHex(0x2F4F4F);
/**
 * Color: 'DarkSlateGrey' HEX: '0x2F4F4F'
 */
Color.DarkSlateGrey = Color.fromHex(0x2F4F4F);
/**
 * Color: 'DarkTurquoise' HEX: '0x00CED1'
 */
Color.DarkTurquoise = Color.fromHex(0x00CED1);
/**
 * Color: 'DarkViolet' HEX: '0x9400D3'
 */
Color.DarkViolet = Color.fromHex(0x9400D3);
/**
 * Color: 'DeepPink' HEX: '0xFF1493'
 */
Color.DeepPink = Color.fromHex(0xFF1493);
/**
 * Color: 'DeepSkyBlue' HEX: '0x00BFFF'
 */
Color.DeepSkyBlue = Color.fromHex(0x00BFFF);
/**
 * Color: 'DimGray' HEX: '0x696969'
 */
Color.DimGray = Color.fromHex(0x696969);
/**
 * Color: 'DimGrey' HEX: '0x696969'
 */
Color.DimGrey = Color.fromHex(0x696969);
/**
 * Color: 'DodgerBlue' HEX: '0x1E90FF'
 */
Color.DodgerBlue = Color.fromHex(0x1E90FF);
/**
 * Color: 'FireBrick' HEX: '0xB22222'
 */
Color.FireBrick = Color.fromHex(0xB22222);
/**
 * Color: 'FloralWhite' HEX: '0xFFFAF0'
 */
Color.FloralWhite = Color.fromHex(0xFFFAF0);
/**
 * Color: 'ForestGreen' HEX: '0x228B22'
 */
Color.ForestGreen = Color.fromHex(0x228B22);
/**
 * Color: 'Fuchsia' HEX: '0xFF00FF'
 */
Color.Fuchsia = Color.fromHex(0xFF00FF);
/**
 * Color: 'Gainsboro' HEX: '0xDCDCDC'
 */
Color.Gainsboro = Color.fromHex(0xDCDCDC);
/**
 * Color: 'GhostWhite' HEX: '0xF8F8FF'
 */
Color.GhostWhite = Color.fromHex(0xF8F8FF);
/**
 * Color: 'Gold' HEX: '0xFFD700'
 */
Color.Gold = Color.fromHex(0xFFD700);
/**
 * Color: 'GoldenRod' HEX: '0xDAA520'
 */
Color.GoldenRod = Color.fromHex(0xDAA520);
/**
 * Color: 'Gray' HEX: '0x808080'
 */
Color.Gray = Color.fromHex(0x808080);
/**
 * Color: 'Green' HEX: '0x008000'
 */
Color.Green = Color.fromHex(0x008000);
/**
 * Color: 'GreenYellow' HEX: '0xADFF2F'
 */
Color.GreenYellow = Color.fromHex(0xADFF2F);
/**
 * Color: 'Grey' HEX: '0x808080'
 */
Color.Grey = Color.fromHex(0x808080);
/**
 * Color: 'HoneyDew' HEX: '0xF0FFF0'
 */
Color.HoneyDew = Color.fromHex(0xF0FFF0);
/**
 * Color: 'HotPink' HEX: '0xFF69B4'
 */
Color.HotPink = Color.fromHex(0xFF69B4);
/**
 * Color: 'IndianRed' HEX: '0xCD5C5C'
 */
Color.IndianRed = Color.fromHex(0xCD5C5C);
/**
 * Color: 'Indigo' HEX: '0x4B0082'
 */
Color.Indigo = Color.fromHex(0x4B0082);
/**
 * Color: 'Ivory' HEX: '0xFFFFF0'
 */
Color.Ivory = Color.fromHex(0xFFFFF0);
/**
 * Color: 'Khaki' HEX: '0xF0E68C'
 */
Color.Khaki = Color.fromHex(0xF0E68C);
/**
 * Color: 'Lavender' HEX: '0xE6E6FA'
 */
Color.Lavender = Color.fromHex(0xE6E6FA);
/**
 * Color: 'LavenderBlush' HEX: '0xFFF0F5'
 */
Color.LavenderBlush = Color.fromHex(0xFFF0F5);
/**
 * Color: 'LawnGreen' HEX: '0x7CFC00'
 */
Color.LawnGreen = Color.fromHex(0x7CFC00);
/**
 * Color: 'LightBlue' HEX: '0xADD8E6'
 */
Color.LightBlue = Color.fromHex(0xADD8E6);
/**
 * Color: 'LightCoral' HEX: '0xF08080'
 */
Color.LightCoral = Color.fromHex(0xF08080);
/**
 * Color: 'LightCyan' HEX: '0xE0FFFF'
 */
Color.LightCyan = Color.fromHex(0xE0FFFF);
/**
 * Color: 'LightGray' HEX: '0xD3D3D3'
 */
Color.LightGray = Color.fromHex(0xD3D3D3);
/**
 * Color: 'LightGreen' HEX: '0x90EE90'
 */
Color.LightGreen = Color.fromHex(0x90EE90);
/**
 * Color: 'LightGrey' HEX: '0xD3D3D3'
 */
Color.LightGrey = Color.fromHex(0xD3D3D3);
/**
 * Color: 'LightPink' HEX: '0xFFB6C1'
 */
Color.LightPink = Color.fromHex(0xFFB6C1);
/**
 * Color: 'LightSalmon' HEX: '0xFFA07A'
 */
Color.LightSalmon = Color.fromHex(0xFFA07A);
/**
 * Color: 'LightSeaGreen' HEX: '0x20B2AA'
 */
Color.LightSeaGreen = Color.fromHex(0x20B2AA);
/**
 * Color: 'LightSkyBlue' HEX: '0x87CEFA'
 */
Color.LightSkyBlue = Color.fromHex(0x87CEFA);
/**
 * Color: 'LightSlateGray' HEX: '0x778899'
 */
Color.LightSlateGray = Color.fromHex(0x778899);
/**
 * Color: 'LightSlateGrey' HEX: '0x778899'
 */
Color.LightSlateGrey = Color.fromHex(0x778899);
/**
 * Color: 'LightSteelBlue' HEX: '0xB0C4DE'
 */
Color.LightSteelBlue = Color.fromHex(0xB0C4DE);
/**
 * Color: 'LightYellow' HEX: '0xFFFFE0'
 */
Color.LightYellow = Color.fromHex(0xFFFFE0);
/**
 * Color: 'Lime' HEX: '0x00FF00'
 */
Color.Lime = Color.fromHex(0x00FF00);
/**
 * Color: 'LimeGreen' HEX: '0x32CD32'
 */
Color.LimeGreen = Color.fromHex(0x32CD32);
/**
 * Color: 'Linen' HEX: '0xFAF0E6'
 */
Color.Linen = Color.fromHex(0xFAF0E6);
/**
 * Color: 'Magenta' HEX: '0xFF00FF'
 */
Color.Magenta = Color.fromHex(0xFF00FF);
/**
 * Color: 'Maroon' HEX: '0x800000'
 */
Color.Maroon = Color.fromHex(0x800000);
/**
 * Color: 'MediumAquaMarine' HEX: '0x66CDAA'
 */
Color.MediumAquaMarine = Color.fromHex(0x66CDAA);
/**
 * Color: 'MediumBlue' HEX: '0x0000CD'
 */
Color.MediumBlue = Color.fromHex(0x0000CD);
/**
 * Color: 'MediumOrchid' HEX: '0xBA55D3'
 */
Color.MediumOrchid = Color.fromHex(0xBA55D3);
/**
 * Color: 'MediumPurple' HEX: '0x9370DB'
 */
Color.MediumPurple = Color.fromHex(0x9370DB);
/**
 * Color: 'MediumSeaGreen' HEX: '0x3CB371'
 */
Color.MediumSeaGreen = Color.fromHex(0x3CB371);
/**
 * Color: 'MediumSlateBlue' HEX: '0x7B68EE'
 */
Color.MediumSlateBlue = Color.fromHex(0x7B68EE);
/**
 * Color: 'MediumSpringGreen' HEX: '0x00FA9A'
 */
Color.MediumSpringGreen = Color.fromHex(0x00FA9A);
/**
 * Color: 'MediumTurquoise' HEX: '0x48D1CC'
 */
Color.MediumTurquoise = Color.fromHex(0x48D1CC);
/**
 * Color: 'MediumVioletRed' HEX: '0xC71585'
 */
Color.MediumVioletRed = Color.fromHex(0xC71585);
/**
 * Color: 'MidnightBlue' HEX: '0x191970'
 */
Color.MidnightBlue = Color.fromHex(0x191970);
/**
 * Color: 'MintCream' HEX: '0xF5FFFA'
 */
Color.MintCream = Color.fromHex(0xF5FFFA);
/**
 * Color: 'MistyRose' HEX: '0xFFE4E1'
 */
Color.MistyRose = Color.fromHex(0xFFE4E1);
/**
 * Color: 'Moccasin' HEX: '0xFFE4B5'
 */
Color.Moccasin = Color.fromHex(0xFFE4B5);
/**
 * Color: 'NavajoWhite' HEX: '0xFFDEAD'
 */
Color.NavajoWhite = Color.fromHex(0xFFDEAD);
/**
 * Color: 'Navy' HEX: '0x000080'
 */
Color.Navy = Color.fromHex(0x000080);
/**
 * Color: 'OldLace' HEX: '0xFDF5E6'
 */
Color.OldLace = Color.fromHex(0xFDF5E6);
/**
 * Color: 'Olive' HEX: '0x808000'
 */
Color.Olive = Color.fromHex(0x808000);
/**
 * Color: 'OliveDrab' HEX: '0x6B8E23'
 */
Color.OliveDrab = Color.fromHex(0x6B8E23);
/**
 * Color: 'Orange' HEX: '0xFFA500'
 */
Color.Orange = Color.fromHex(0xFFA500);
/**
 * Color: 'OrangeRed' HEX: '0xFF4500'
 */
Color.OrangeRed = Color.fromHex(0xFF4500);
/**
 * Color: 'Orchid' HEX: '0xDA70D6'
 */
Color.Orchid = Color.fromHex(0xDA70D6);
/**
 * Color: 'PaleGoldenRod' HEX: '0xEEE8AA'
 */
Color.PaleGoldenRod = Color.fromHex(0xEEE8AA);
/**
 * Color: 'PaleGreen' HEX: '0x98FB98'
 */
Color.PaleGreen = Color.fromHex(0x98FB98);
/**
 * Color: 'PaleTurquoise' HEX: '0xAFEEEE'
 */
Color.PaleTurquoise = Color.fromHex(0xAFEEEE);
/**
 * Color: 'PaleVioletRed' HEX: '0xDB7093'
 */
Color.PaleVioletRed = Color.fromHex(0xDB7093);
/**
 * Color: 'PapayaWhip' HEX: '0xFFDAB9'
 */
Color.PapayaWhip = Color.fromHex(0xFFDAB9);
/**
 * Color: 'PeachPuff' HEX: '0xFFEFD5'
 */
Color.PeachPuff = Color.fromHex(0xFFEFD5);
/**
 * Color: 'Peru' HEX: '0xCD853F'
 */
Color.Peru = Color.fromHex(0xCD853F);
/**
 * Color: 'Pink' HEX: '0xFFC0CB'
 */
Color.Pink = Color.fromHex(0xFFC0CB);
/**
 * Color: 'Plum' HEX: '0xDDA0DD'
 */
Color.Plum = Color.fromHex(0xDDA0DD);
/**
 * Color: 'PowderBlue' HEX: '0xB0E0E6'
 */
Color.PowderBlue = Color.fromHex(0xB0E0E6);
/**
 * Color: 'Purple' HEX: '0x800080'
 */
Color.Purple = Color.fromHex(0x800080);
/**
 * Color: 'RebeccaPurple' HEX: '0x663399'
 */
Color.RebeccaPurple = Color.fromHex(0x663399);
/**
 * Color: 'Red' HEX: '0xFF0000'
 */
Color.Red = Color.fromHex(0xFF0000);
/**
 * Color: 'RosyBrown' HEX: '0xBC8F8F'
 */
Color.RosyBrown = Color.fromHex(0xBC8F8F);
/**
 * Color: 'RoyalBlue' HEX: '0x4169E1'
 */
Color.RoyalBlue = Color.fromHex(0x4169E1);
/**
 * Color: 'SaddleBrown' HEX: '0x8B4513'
 */
Color.SaddleBrown = Color.fromHex(0x8B4513);
/**
 * Color: 'Salmon' HEX: '0xFA8072'
 */
Color.Salmon = Color.fromHex(0xFA8072);
/**
 * Color: 'SandyBrown' HEX: '0xF4A460'
 */
Color.SandyBrown = Color.fromHex(0xF4A460);
/**
 * Color: 'SeaGreen' HEX: '0x2E8B57'
 */
Color.SeaGreen = Color.fromHex(0x2E8B57);
/**
 * Color: 'SeaShell' HEX: '0xFFF5EE'
 */
Color.SeaShell = Color.fromHex(0xFFF5EE);
/**
 * Color: 'Sienna' HEX: '0xA0522D'
 */
Color.Sienna = Color.fromHex(0xA0522D);
/**
 * Color: 'Silver' HEX: '0xC0C0C0'
 */
Color.Silver = Color.fromHex(0xC0C0C0);
/**
 * Color: 'SkyBlue' HEX: '0x87CEEB'
 */
Color.SkyBlue = Color.fromHex(0x87CEEB);
/**
 * Color: 'SlateBlue' HEX: '0x6A5ACD'
 */
Color.SlateBlue = Color.fromHex(0x6A5ACD);
/**
 * Color: 'SlateGray' HEX: '0x708090'
 */
Color.SlateGray = Color.fromHex(0x708090);
/**
 * Color: 'SlateGrey' HEX: '0x708090'
 */
Color.SlateGrey = Color.fromHex(0x708090);
/**
 * Color: 'Snow' HEX: '0xFFFAFA'
 */
Color.Snow = Color.fromHex(0xFFFAFA);
/**
 * Color: 'SpringGreen' HEX: '0x00FF7F'
 */
Color.SpringGreen = Color.fromHex(0x00FF7F);
/**
 * Color: 'SteelBlue' HEX: '0x4682B4'
 */
Color.SteelBlue = Color.fromHex(0x4682B4);
/**
 * Color: 'Tan' HEX: '0xD2B48C'
 */
Color.Tan = Color.fromHex(0xD2B48C);
/**
 * Color: 'Teal' HEX: '0x008080'
 */
Color.Teal = Color.fromHex(0x008080);
/**
 * Color: 'Thistle' HEX: '0xD8BFD8'
 */
Color.Thistle = Color.fromHex(0xD8BFD8);
/**
 * Color: 'Tomato' HEX: '0xFF6347'
 */
Color.Tomato = Color.fromHex(0xFF6347);
/**
 * Color: 'Turquoise' HEX: '0x40E0D0'
 */
Color.Turquoise = Color.fromHex(0x40E0D0);
/**
 * Color: 'Violet' HEX: '0xEE82EE'
 */
Color.Violet = Color.fromHex(0xEE82EE);
/**
 * Color: 'Wheat' HEX: '0xF5DEB3'
 */
Color.Wheat = Color.fromHex(0xF5DEB3);
/**
 * Color: 'White' HEX: '0xFFFFFF'
 */
Color.White = Color.fromHex(0xFFFFFF);
/**
 * Color: 'WhiteSmoke' HEX: '0xF5F5F5'
 */
Color.WhiteSmoke = Color.fromHex(0xF5F5F5);
/**
 * Color: 'Yellow' HEX: '0xFFFF00'
 */
Color.Yellow = Color.fromHex(0xFFFF00);
/**
 * Color: 'YellowGreen' HEX: '0x9ACD32'
 */
Color.YellowGreen = Color.fromHex(0x9ACD32);
exports.default = Color;
