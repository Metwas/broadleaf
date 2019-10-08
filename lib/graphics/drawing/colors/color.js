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
const utils = require("../../../utils/utils");
const math = require("../../../math/math");
const conversions = require("../../../utils/text/conversions");
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
    /**
     * Color: 'AliceBlue' HEX: '0xF0F8FF'
     */
    static get AliceBlue() {
        return Color.fromHex(0xF0F8FF);
    }
    /**
     * Color: 'AntiqueWhite' HEX: '0xFAEBD7'
     */
    static get AntiqueWhite() {
        return Color.fromHex(0xFAEBD7);
    }
    /**
     * Color: 'Aqua' HEX: '0x00FFFF'
     */
    static get Aqua() {
        return Color.fromHex(0x00FFFF);
    }
    /**
     * Color: 'AquaMarine' HEX: '0x7FFFD4'
     */
    static get AquaMarine() {
        return Color.fromHex(0x7FFFD4);
    }
    /**
     * Color: 'Azure' HEX: '0xF0FFFF'
     */
    static get Azure() {
        return Color.fromHex(0xF0FFFF);
    }
    /**
     * Color: 'Beige' HEX: '0xF5F5DC'
     */
    static get Beige() {
        return Color.fromHex(0xF5F5DC);
    }
    /**
     * Color: 'Bisque' HEX: '0xFFE4C4'
     */
    static get Bisque() {
        return Color.fromHex(0xFFE4C4);
    }
    /**
     * Color: 'Black' HEX: '0x000000'
     */
    static get Black() {
        return Color.fromHex(0x000000);
    }
    /**
     * Color: 'BlanchedAlmond' HEX: '0xFFEBCD'
     */
    static get BlanchedAlmond() {
        return Color.fromHex(0xFFEBCD);
    }
    /**
     * Color: 'Blue' HEX: '0x0000FF'
     */
    static get Blue() {
        return Color.fromHex(0x0000FF);
    }
    /**
     * Color: 'blueViolet' HEX: '0x8A2BE2'
     */
    static get blueViolet() {
        return Color.fromHex(0x8A2BE2);
    }
    /**
     * Color: 'Brown' HEX: '0xA52A2A'
     */
    static get Brown() {
        return Color.fromHex(0xA52A2A);
    }
    /**
     * Color: 'Burlywood' HEX: '0xDEB887'
     */
    static get Burlywood() {
        return Color.fromHex(0xDEB887);
    }
    /**
     * Color: 'CadetBlue' HEX: '0x5F9EA0'
     */
    static get CadetBlue() {
        return Color.fromHex(0x5F9EA0);
    }
    /**
     * Color: 'Chartreuse' HEX: '0x7FFF00'
     */
    static get Chartreuse() {
        return Color.fromHex(0x7FFF00);
    }
    /**
     * Color: 'Chocolate' HEX: '0xD2691E'
     */
    static get Chocolate() {
        return Color.fromHex(0xD2691E);
    }
    /**
     * Color: 'Coral' HEX: '0xFF7F50'
     */
    static get Coral() {
        return Color.fromHex(0xFF7F50);
    }
    /**
     * Color: 'CornFlowerBlue' HEX: '0x6495ED'
     */
    static get CornFlowerBlue() {
        return Color.fromHex(0x6495ED);
    }
    /**
     * Color: 'Cornsilk' HEX: '0xFFF8DC'
     */
    static get Cornsilk() {
        return Color.fromHex(0xFFF8DC);
    }
    /**
     * Color: 'Crimson' HEX: '0xDC143C'
     */
    static get Crimson() {
        return Color.fromHex(0xDC143C);
    }
    /**
     * Color: 'Cyan' HEX: '0x00FFFF'
     */
    static get Cyan() {
        return Color.fromHex(0x00FFFF);
    }
    /**
     * Color: 'DarkBlue' HEX: '0x00008B'
     */
    static get DarkBlue() {
        return Color.fromHex(0x00008B);
    }
    /**
     * Color: 'DarkCyan' HEX: '0x008B8B'
     */
    static get DarkCyan() {
        return Color.fromHex(0x008B8B);
    }
    /**
     * Color: 'DarkGoldenRod' HEX: '0xB8860B'
     */
    static get DarkGoldenRod() {
        return Color.fromHex(0xB8860B);
    }
    /**
     * Color: 'DarkGray' HEX: '0xA9A9A9'
     */
    static get DarkGray() {
        return Color.fromHex(0xA9A9A9);
    }
    /**
     * Color: 'DarkGreen' HEX: '0x006400'
     */
    static get DarkGreen() {
        return Color.fromHex(0x006400);
    }
    /**
     * Color: 'DarkKhaki' HEX: '0xBDB76B'
     */
    static get DarkKhaki() {
        return Color.fromHex(0xBDB76B);
    }
    /**
     * Color: 'darkGrey' HEX: '0xA9A9A9'
     */
    static get darkGrey() {
        return Color.fromHex(0xA9A9A9);
    }
    /**
     * Color: 'Darkgray' HEX: '0xA9A9A9'
     */
    static get Darkgray() {
        return Color.fromHex(0xA9A9A9);
    }
    /**
     * Color: 'DarkMagenta' HEX: '0x8B008B'
     */
    static get DarkMagenta() {
        return Color.fromHex(0x8B008B);
    }
    /**
     * Color: 'DarkOliveGreen' HEX: '0x556B2F'
     */
    static get DarkOliveGreen() {
        return Color.fromHex(0x556B2F);
    }
    /**
     * Color: 'DarkOrange' HEX: '0xFF8C00'
     */
    static get DarkOrange() {
        return Color.fromHex(0xFF8C00);
    }
    /**
     * Color: 'DarkOrchid' HEX: '0x9932CC'
     */
    static get DarkOrchid() {
        return Color.fromHex(0x9932CC);
    }
    /**
     * Color: 'DarkRed' HEX: '0x8B0000'
     */
    static get DarkRed() {
        return Color.fromHex(0x8B0000);
    }
    /**
     * Color: 'DarkSalmon' HEX: '0xE9967A'
     */
    static get DarkSalmon() {
        return Color.fromHex(0xE9967A);
    }
    /**
     * Color: 'DarkSeaGreen' HEX: '0x8FBC8F'
     */
    static get DarkSeaGreen() {
        return Color.fromHex(0x8FBC8F);
    }
    /**
     * Color: 'DarkSlateBlue' HEX: '0x483D8B'
     */
    static get DarkSlateBlue() {
        return Color.fromHex(0x483D8B);
    }
    /**
     * Color: 'DarkSlateGray' HEX: '0x2F4F4F'
     */
    static get DarkSlateGray() {
        return Color.fromHex(0x2F4F4F);
    }
    /**
     * Color: 'DarkSlateGrey' HEX: '0x2F4F4F'
     */
    static get DarkSlateGrey() {
        return Color.fromHex(0x2F4F4F);
    }
    /**
     * Color: 'DarkTurquoise' HEX: '0x00CED1'
     */
    static get DarkTurquoise() {
        return Color.fromHex(0x00CED1);
    }
    /**
     * Color: 'DarkViolet' HEX: '0x9400D3'
     */
    static get DarkViolet() {
        return Color.fromHex(0x9400D3);
    }
    /**
     * Color: 'DeepPink' HEX: '0xFF1493'
     */
    static get DeepPink() {
        return Color.fromHex(0xFF1493);
    }
    /**
     * Color: 'DeepSkyBlue' HEX: '0x00BFFF'
     */
    static get DeepSkyBlue() {
        return Color.fromHex(0x00BFFF);
    }
    /**
     * Color: 'DimGray' HEX: '0x696969'
     */
    static get DimGray() {
        return Color.fromHex(0x696969);
    }
    /**
     * Color: 'DimGrey' HEX: '0x696969'
     */
    static get DimGrey() {
        return Color.fromHex(0x696969);
    }
    /**
     * Color: 'DodgerBlue' HEX: '0x1E90FF'
     */
    static get DodgerBlue() {
        return Color.fromHex(0x1E90FF);
    }
    /**
     * Color: 'FireBrick' HEX: '0xB22222'
     */
    static get FireBrick() {
        return Color.fromHex(0xB22222);
    }
    /**
     * Color: 'FloralWhite' HEX: '0xFFFAF0'
     */
    static get FloralWhite() {
        return Color.fromHex(0xFFFAF0);
    }
    /**
     * Color: 'ForestGreen' HEX: '0x228B22'
     */
    static get ForestGreen() {
        return Color.fromHex(0x228B22);
    }
    /**
     * Color: 'Fuchsia' HEX: '0xFF00FF'
     */
    static get Fuchsia() {
        return Color.fromHex(0xFF00FF);
    }
    /**
     * Color: 'Gainsboro' HEX: '0xDCDCDC'
     */
    static get Gainsboro() {
        return Color.fromHex(0xDCDCDC);
    }
    /**
     * Color: 'GhostWhite' HEX: '0xF8F8FF'
     */
    static get GhostWhite() {
        return Color.fromHex(0xF8F8FF);
    }
    /**
     * Color: 'Gold' HEX: '0xFFD700'
     */
    static get Gold() {
        return Color.fromHex(0xFFD700);
    }
    /**
     * Color: 'GoldenRod' HEX: '0xDAA520'
     */
    static get GoldenRod() {
        return Color.fromHex(0xDAA520);
    }
    /**
     * Color: 'Gray' HEX: '0x808080'
     */
    static get Gray() {
        return Color.fromHex(0x808080);
    }
    /**
     * Color: 'Green' HEX: '0x008000'
     */
    static get Green() {
        return Color.fromHex(0x008000);
    }
    /**
     * Color: 'GreenYellow' HEX: '0xADFF2F'
     */
    static get GreenYellow() {
        return Color.fromHex(0xADFF2F);
    }
    /**
     * Color: 'Grey' HEX: '0x808080'
     */
    static get Grey() {
        return Color.fromHex(0x808080);
    }
    /**
     * Color: 'HoneyDew' HEX: '0xF0FFF0'
     */
    static get HoneyDew() {
        return Color.fromHex(0xF0FFF0);
    }
    /**
     * Color: 'HotPink' HEX: '0xFF69B4'
     */
    static get HotPink() {
        return Color.fromHex(0xFF69B4);
    }
    /**
     * Color: 'IndianRed' HEX: '0xCD5C5C'
     */
    static get IndianRed() {
        return Color.fromHex(0xCD5C5C);
    }
    /**
     * Color: 'Indigo' HEX: '0x4B0082'
     */
    static get Indigo() {
        return Color.fromHex(0x4B0082);
    }
    /**
     * Color: 'Ivory' HEX: '0xFFFFF0'
     */
    static get Ivory() {
        return Color.fromHex(0xFFFFF0);
    }
    /**
     * Color: 'Khaki' HEX: '0xF0E68C'
     */
    static get Khaki() {
        return Color.fromHex(0xF0E68C);
    }
    /**
     * Color: 'Lavender' HEX: '0xE6E6FA'
     */
    static get Lavender() {
        return Color.fromHex(0xE6E6FA);
    }
    /**
     * Color: 'LavenderBlush' HEX: '0xFFF0F5'
     */
    static get LavenderBlush() {
        return Color.fromHex(0xFFF0F5);
    }
    /**
     * Color: 'LawnGreen' HEX: '0x7CFC00'
     */
    static get LawnGreen() {
        return Color.fromHex(0x7CFC00);
    }
    /**
     * Color: 'LightBlue' HEX: '0xADD8E6'
     */
    static get LightBlue() {
        return Color.fromHex(0xADD8E6);
    }
    /**
     * Color: 'LightCoral' HEX: '0xF08080'
     */
    static get LightCoral() {
        return Color.fromHex(0xF08080);
    }
    /**
     * Color: 'LightCyan' HEX: '0xE0FFFF'
     */
    static get LightCyan() {
        return Color.fromHex(0xE0FFFF);
    }
    /**
     * Color: 'LightGray' HEX: '0xD3D3D3'
     */
    static get LightGray() {
        return Color.fromHex(0xD3D3D3);
    }
    /**
     * Color: 'LightGreen' HEX: '0x90EE90'
     */
    static get LightGreen() {
        return Color.fromHex(0x90EE90);
    }
    /**
     * Color: 'LightGrey' HEX: '0xD3D3D3'
     */
    static get LightGrey() {
        return Color.fromHex(0xD3D3D3);
    }
    /**
     * Color: 'LightPink' HEX: '0xFFB6C1'
     */
    static get LightPink() {
        return Color.fromHex(0xFFB6C1);
    }
    /**
     * Color: 'LightSalmon' HEX: '0xFFA07A'
     */
    static get LightSalmon() {
        return Color.fromHex(0xFFA07A);
    }
    /**
     * Color: 'LightSeaGreen' HEX: '0x20B2AA'
     */
    static get LightSeaGreen() {
        return Color.fromHex(0x20B2AA);
    }
    /**
     * Color: 'LightSkyBlue' HEX: '0x87CEFA'
     */
    static get LightSkyBlue() {
        return Color.fromHex(0x87CEFA);
    }
    /**
     * Color: 'LightSlateGray' HEX: '0x778899'
     */
    static get LightSlateGray() {
        return Color.fromHex(0x778899);
    }
    /**
     * Color: 'LightSlateGrey' HEX: '0x778899'
     */
    static get LightSlateGrey() {
        return Color.fromHex(0x778899);
    }
    /**
     * Color: 'LightSteelBlue' HEX: '0xB0C4DE'
     */
    static get LightSteelBlue() {
        return Color.fromHex(0xB0C4DE);
    }
    /**
     * Color: 'LightYellow' HEX: '0xFFFFE0'
     */
    static get LightYellow() {
        return Color.fromHex(0xFFFFE0);
    }
    /**
     * Color: 'Lime' HEX: '0x00FF00'
     */
    static get Lime() {
        return Color.fromHex(0x00FF00);
    }
    /**
     * Color: 'LimeGreen' HEX: '0x32CD32'
     */
    static get LimeGreen() {
        return Color.fromHex(0x32CD32);
    }
    /**
     * Color: 'Linen' HEX: '0xFAF0E6'
     */
    static get Linen() {
        return Color.fromHex(0xFAF0E6);
    }
    /**
     * Color: 'Magenta' HEX: '0xFF00FF'
     */
    static get Magenta() {
        return Color.fromHex(0xFF00FF);
    }
    /**
     * Color: 'Maroon' HEX: '0x800000'
     */
    static get Maroon() {
        return Color.fromHex(0x800000);
    }
    /**
     * Color: 'MediumAquaMarine' HEX: '0x66CDAA'
     */
    static get MediumAquaMarine() {
        return Color.fromHex(0x66CDAA);
    }
    /**
     * Color: 'MediumBlue' HEX: '0x0000CD'
     */
    static get MediumBlue() {
        return Color.fromHex(0x0000CD);
    }
    /**
     * Color: 'MediumOrchid' HEX: '0xBA55D3'
     */
    static get MediumOrchid() {
        return Color.fromHex(0xBA55D3);
    }
    /**
     * Color: 'MediumPurple' HEX: '0x9370DB'
     */
    static get MediumPurple() {
        return Color.fromHex(0x9370DB);
    }
    /**
     * Color: 'MediumSeaGreen' HEX: '0x3CB371'
     */
    static get MediumSeaGreen() {
        return Color.fromHex(0x3CB371);
    }
    /**
     * Color: 'MediumSlateBlue' HEX: '0x7B68EE'
     */
    static get MediumSlateBlue() {
        return Color.fromHex(0x7B68EE);
    }
    /**
     * Color: 'MediumSpringGreen' HEX: '0x00FA9A'
     */
    static get MediumSpringGreen() {
        return Color.fromHex(0x00FA9A);
    }
    /**
     * Color: 'MediumTurquoise' HEX: '0x48D1CC'
     */
    static get MediumTurquoise() {
        return Color.fromHex(0x48D1CC);
    }
    /**
     * Color: 'MediumVioletRed' HEX: '0xC71585'
     */
    static get MediumVioletRed() {
        return Color.fromHex(0xC71585);
    }
    /**
     * Color: 'MidnightBlue' HEX: '0x191970'
     */
    static get MidnightBlue() {
        return Color.fromHex(0x191970);
    }
    /**
     * Color: 'MintCream' HEX: '0xF5FFFA'
     */
    static get MintCream() {
        return Color.fromHex(0xF5FFFA);
    }
    /**
     * Color: 'MistyRose' HEX: '0xFFE4E1'
     */
    static get MistyRose() {
        return Color.fromHex(0xFFE4E1);
    }
    /**
     * Color: 'Moccasin' HEX: '0xFFE4B5'
     */
    static get Moccasin() {
        return Color.fromHex(0xFFE4B5);
    }
    /**
     * Color: 'NavajoWhite' HEX: '0xFFDEAD'
     */
    static get NavajoWhite() {
        return Color.fromHex(0xFFDEAD);
    }
    /**
     * Color: 'Navy' HEX: '0x000080'
     */
    static get Navy() {
        return Color.fromHex(0x000080);
    }
    /**
     * Color: 'OldLace' HEX: '0xFDF5E6'
     */
    static get OldLace() {
        return Color.fromHex(0xFDF5E6);
    }
    /**
     * Color: 'Olive' HEX: '0x808000'
     */
    static get Olive() {
        return Color.fromHex(0x808000);
    }
    /**
     * Color: 'OliveDrab' HEX: '0x6B8E23'
     */
    static get OliveDrab() {
        return Color.fromHex(0x6B8E23);
    }
    /**
     * Color: 'Orange' HEX: '0xFFA500'
     */
    static get Orange() {
        return Color.fromHex(0xFFA500);
    }
    /**
     * Color: 'OrangeRed' HEX: '0xFF4500'
     */
    static get OrangeRed() {
        return Color.fromHex(0xFF4500);
    }
    /**
     * Color: 'Orchid' HEX: '0xDA70D6'
     */
    static get Orchid() {
        return Color.fromHex(0xDA70D6);
    }
    /**
     * Color: 'PaleGoldenRod' HEX: '0xEEE8AA'
     */
    static get PaleGoldenRod() {
        return Color.fromHex(0xEEE8AA);
    }
    /**
     * Color: 'PaleGreen' HEX: '0x98FB98'
     */
    static get PaleGreen() {
        return Color.fromHex(0x98FB98);
    }
    /**
     * Color: 'PaleTurquoise' HEX: '0xAFEEEE'
     */
    static get PaleTurquoise() {
        return Color.fromHex(0xAFEEEE);
    }
    /**
     * Color: 'PaleVioletRed' HEX: '0xDB7093'
     */
    static get PaleVioletRed() {
        return Color.fromHex(0xDB7093);
    }
    /**
     * Color: 'PapayaWhip' HEX: '0xFFDAB9'
     */
    static get PapayaWhip() {
        return Color.fromHex(0xFFDAB9);
    }
    /**
     * Color: 'PeachPuff' HEX: '0xFFEFD5'
     */
    static get PeachPuff() {
        return Color.fromHex(0xFFEFD5);
    }
    /**
     * Color: 'Peru' HEX: '0xCD853F'
     */
    static get Peru() {
        return Color.fromHex(0xCD853F);
    }
    /**
     * Color: 'Pink' HEX: '0xFFC0CB'
     */
    static get Pink() {
        return Color.fromHex(0xFFC0CB);
    }
    /**
     * Color: 'Plum' HEX: '0xDDA0DD'
     */
    static get Plum() {
        return Color.fromHex(0xDDA0DD);
    }
    /**
     * Color: 'PowderBlue' HEX: '0xB0E0E6'
     */
    static get PowderBlue() {
        return Color.fromHex(0xB0E0E6);
    }
    /**
     * Color: 'Purple' HEX: '0x800080'
     */
    static get Purple() {
        return Color.fromHex(0x800080);
    }
    /**
     * Color: 'RebeccaPurple' HEX: '0x663399'
     */
    static get RebeccaPurple() {
        return Color.fromHex(0x663399);
    }
    /**
     * Color: 'Red' HEX: '0xFF0000'
     */
    static get Red() {
        return Color.fromHex(0xFF0000);
    }
    /**
     * Color: 'RosyBrown' HEX: '0xBC8F8F'
     */
    static get RosyBrown() {
        return Color.fromHex(0xBC8F8F);
    }
    /**
     * Color: 'RoyalBlue' HEX: '0x4169E1'
     */
    static get RoyalBlue() {
        return Color.fromHex(0x4169E1);
    }
    /**
     * Color: 'SaddleBrown' HEX: '0x8B4513'
     */
    static get SaddleBrown() {
        return Color.fromHex(0x8B4513);
    }
    /**
     * Color: 'Salmon' HEX: '0xFA8072'
     */
    static get Salmon() {
        return Color.fromHex(0xFA8072);
    }
    /**
     * Color: 'SandyBrown' HEX: '0xF4A460'
     */
    static get SandyBrown() {
        return Color.fromHex(0xF4A460);
    }
    /**
     * Color: 'SeaGreen' HEX: '0x2E8B57'
     */
    static get SeaGreen() {
        return Color.fromHex(0x2E8B57);
    }
    /**
     * Color: 'SeaShell' HEX: '0xFFF5EE'
     */
    static get SeaShell() {
        return Color.fromHex(0xFFF5EE);
    }
    /**
     * Color: 'Sienna' HEX: '0xA0522D'
     */
    static get Sienna() {
        return Color.fromHex(0xA0522D);
    }
    /**
     * Color: 'Silver' HEX: '0xC0C0C0'
     */
    static get Silver() {
        return Color.fromHex(0xC0C0C0);
    }
    /**
     * Color: 'SkyBlue' HEX: '0x87CEEB'
     */
    static get SkyBlue() {
        return Color.fromHex(0x87CEEB);
    }
    /**
     * Color: 'SlateBlue' HEX: '0x6A5ACD'
     */
    static get SlateBlue() {
        return Color.fromHex(0x6A5ACD);
    }
    /**
     * Color: 'SlateGray' HEX: '0x708090'
     */
    static get SlateGray() {
        return Color.fromHex(0x708090);
    }
    /**
     * Color: 'SlateGrey' HEX: '0x708090'
     */
    static get SlateGrey() {
        return Color.fromHex(0x708090);
    }
    /**
     * Color: 'Snow' HEX: '0xFFFAFA'
     */
    static get Snow() {
        return Color.fromHex(0xFFFAFA);
    }
    /**
     * Color: 'SpringGreen' HEX: '0x00FF7F'
     */
    static get SpringGreen() {
        return Color.fromHex(0x00FF7F);
    }
    /**
     * Color: 'SteelBlue' HEX: '0x4682B4'
     */
    static get SteelBlue() {
        return Color.fromHex(0x4682B4);
    }
    /**
     * Color: 'Tan' HEX: '0xD2B48C'
     */
    static get Tan() {
        return Color.fromHex(0xD2B48C);
    }
    /**
     * Color: 'Teal' HEX: '0x008080'
     */
    static get Teal() {
        return Color.fromHex(0x008080);
    }
    /**
     * Color: 'Thistle' HEX: '0xD8BFD8'
     */
    static get Thistle() {
        return Color.fromHex(0xD8BFD8);
    }
    /**
     * Color: 'Tomato' HEX: '0xFF6347'
     */
    static get Tomato() {
        return Color.fromHex(0xFF6347);
    }
    /**
     * Color: 'Turquoise' HEX: '0x40E0D0'
     */
    static get Turquoise() {
        return Color.fromHex(0x40E0D0);
    }
    /**
     * Color: 'Violet' HEX: '0xEE82EE'
     */
    static get Violet() {
        return Color.fromHex(0xEE82EE);
    }
    /**
     * Color: 'Wheat' HEX: '0xF5DEB3'
     */
    static get Wheat() {
        return Color.fromHex(0xF5DEB3);
    }
    /**
     * Color: 'White' HEX: '0xFFFFFF'
     */
    static get White() {
        return Color.fromHex(0xFFFFFF);
    }
    /**
     * Color: 'WhiteSmoke' HEX: '0xF5F5F5'
     */
    static get WhiteSmoke() {
        return Color.fromHex(0xF5F5F5);
    }
    /**
     * Color: 'Yellow' HEX: '0xFFFF00'
     */
    static get Yellow() {
        return Color.fromHex(0xFFFF00);
    }
    /**
     * Color: 'YellowGreen' HEX: '0x9ACD32'
     */
    static get YellowGreen() {
        return Color.fromHex(0x9ACD32);
    }
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number} hex A 24 bit hexidecimal value. e.g: 0xFFFFFF
     * @returns {Color}
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
     * @returns {Color}
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
     * @returns {Color}
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
      * @returns {Color}
      */
    static toHexString(red, green, blue, alpha) {
        let hex = "";
        if (alpha === void 0) {
            const value = ((red << 16) + (green << 8) + blue).toString(16);
            hex = "#" + conversions.padLeft(value, "0", 6);
        }
        else {
            const value = ((red << 24 >>> 0) + (green << 16) + (blue << 8) + alpha).toString(16);
            hex = "#" + conversions.padLeft(value, "0", 8);
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
        let colorHex = utils.isNumber(hex) ? hex.toString(16) : (utils.isString(hex) ? hex : "#000").replace("0x", "");
        const size = colorHex.length === 8 ? 8 : 6;
        colorHex = conversions.padLeft(colorHex, "0", size);
        colorHex = colorHex.replace("0x", "#");
        const index = colorHex.indexOf("#");
        if (!(index === 0)) {
            // prepend the hash delimiter
            colorHex = "#" + colorHex;
        }
        // match any shorthand hexidecimal values, such as: #fff => #ffffff
        colorHex = colorHex.replace(Color._shortHexRegex, function (m, r, g, b) {
            return "#" + r + r + g + g + b + b;
        });
        // should return either a group of 3 or 4 byte sequences
        const results = colorHex.match(Color._hexRegex);
        if (typeof results === "undefined" || results === null) {
            // dont change the current color instance
            return this;
        }
        let group = [];
        let length = 3;
        if (results.length >= 4) {
            length = 4;
        }
        // iterate through the results, skipping the first indexed position
        let i = 0;
        for (; i < length; i++) {
            let hex = 0;
            const result = results[i];
            if (!utils.isNullOrUndefined(result)) {
                // convert to decimal
                const value = parseInt(result, 16);
                if (utils.isNumber(hex)) {
                    hex = value;
                }
            }
            group.push(hex);
        }
        this.setRGBA(group[0], group[1], group[2], group.length === 4 ? group[3] : this.alpha);
        return this;
    }
    /**
     * Linear interpolates to a new color by a defined amount of steps
     *
     * @param {Color} to The final resting color
     * @param {Number} increment Resolution of steps to take before making a rest to the defined end color
     * @returns {Color}
     */
    lerp(to, increment) {
        if (to instanceof Color) {
            const currentHexValue = this.hex;
            const toHexValue = to.hex;
            const cRed = this.red;
            const cGreen = this.green;
            const cBlue = this.blue;
            const cAlpha = this.alpha;
            const tRed = to.red;
            const tGreen = to.green;
            const tBlue = to.blue;
            const tAlpha = to.alpha;
            const nRed = Math.round(math.clamp(math.lerp(cRed, tRed, increment), 0, 255));
            const nGreen = Math.round(math.clamp(math.lerp(cGreen, tGreen, increment), 0, 255));
            const nBlue = Math.round(math.clamp(math.lerp(cBlue, tBlue, increment), 0, 255));
            const nAlpha = Math.round(math.clamp(math.lerp(cAlpha, tAlpha, increment), 0, 255));
            this.setRGBA(nRed, nGreen, nBlue, nAlpha);
        }
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
exports.Color = Color;
/**
 * Regular expression for the hexidecimal match sequence
 */
Color._hexRegex = /([a-fA-F\d]{2})/g;
/**
 * Shorthand regular expression for the hexidecimal match sequence
 */
Color._shortHexRegex = /^#([a-fA-F\d])([a-fA-F\d])([a-fA-F\d])$/g;
