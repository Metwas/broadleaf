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

import utils from "../../../utils/utils";

/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the base types
 */
class Color {

	/**
	 * Color: 'AliceBlue' HEX: '0xF0F8FF'
	 */
	static AliceBlue: Color = Color.fromHex(0xF0F8FF);

	/**
	 * Color: 'AntiqueWhite' HEX: '0xFAEBD7'
	 */
	static AntiqueWhite: Color = Color.fromHex(0xFAEBD7);

	/**
	 * Color: 'Aqua' HEX: '0x00FFFF'
	 */
	static Aqua: Color = Color.fromHex(0x00FFFF);

	/**
	 * Color: 'AquaMarine' HEX: '0x7FFFD4'
	 */
	static AquaMarine: Color = Color.fromHex(0x7FFFD4);

	/**
	 * Color: 'Azure' HEX: '0xF0FFFF'
	 */
	static Azure: Color = Color.fromHex(0xF0FFFF);

	/**
	 * Color: 'Beige' HEX: '0xF5F5DC'
	 */
	static Beige: Color = Color.fromHex(0xF5F5DC);

	/**
	 * Color: 'Bisque' HEX: '0xFFE4C4'
	 */
	static Bisque: Color = Color.fromHex(0xFFE4C4);

	/**
	 * Color: 'Black' HEX: '0x000000'
	 */
	static Black: Color = Color.fromHex(0x000000);

	/**
	 * Color: 'BlanchedAlmond' HEX: '0xFFEBCD'
	 */
	static BlanchedAlmond: Color = Color.fromHex(0xFFEBCD);

	/**
	 * Color: 'Blue' HEX: '0x0000FF'
	 */
	static Blue: Color = Color.fromHex(0x0000FF);

	/**
	 * Color: 'blueViolet' HEX: '0x8A2BE2'
	 */
	static BlueViolet: Color = Color.fromHex(0x8A2BE2);

	/**
	 * Color: 'Brown' HEX: '0xA52A2A'
	 */
	static Brown: Color = Color.fromHex(0xA52A2A);

	/**
	 * Color: 'Burlywood' HEX: '0xDEB887'
	 */
	static Burlywood: Color = Color.fromHex(0xDEB887);

	/**
	 * Color: 'CadetBlue' HEX: '0x5F9EA0'
	 */
	static CadetBlue: Color = Color.fromHex(0x5F9EA0);

	/**
	 * Color: 'Chartreuse' HEX: '0x7FFF00'
	 */
	static Chartreuse: Color = Color.fromHex(0x7FFF00);

	/**
	 * Color: 'Chocolate' HEX: '0xD2691E'
	 */
	static Chocolate: Color = Color.fromHex(0xD2691E);

	/**
	 * Color: 'Coral' HEX: '0xFF7F50'
	 */
	static Coral: Color = Color.fromHex(0xFF7F50);

	/**
	 * Color: 'CornFlowerBlue' HEX: '0x6495ED'
	 */
	static CornFlowerBlue: Color = Color.fromHex(0x6495ED);

	/**
	 * Color: 'Cornsilk' HEX: '0xFFF8DC'
	 */
	static Cornsilk: Color = Color.fromHex(0xFFF8DC);

	/**
	 * Color: 'Crimson' HEX: '0xDC143C'
	 */
	static Crimson: Color = Color.fromHex(0xDC143C);

	/**
	 * Color: 'Cyan' HEX: '0x00FFFF'
	 */
	static Cyan: Color = Color.fromHex(0x00FFFF);

	/**
	 * Color: 'DarkBlue' HEX: '0x00008B'
	 */
	static DarkBlue: Color = Color.fromHex(0x00008B);

	/**
	 * Color: 'DarkCyan' HEX: '0x008B8B'
	 */
	static DarkCyan: Color = Color.fromHex(0x008B8B);

	/**
	 * Color: 'DarkGoldenRod' HEX: '0xB8860B'
	 */
	static DarkGoldenRod: Color = Color.fromHex(0xB8860B);

	/**
	 * Color: 'DarkGray' HEX: '0xA9A9A9'
	 */
	static DarkGray: Color = Color.fromHex(0xA9A9A9);

	/**
	 * Color: 'DarkGreen' HEX: '0x006400'
	 */
	static DarkGreen: Color = Color.fromHex(0x006400);

	/**
	 * Color: 'DarkKhaki' HEX: '0xBDB76B'
	 */
	static DarkKhaki: Color = Color.fromHex(0xBDB76B);

	/**
	 * Color: 'darkGrey' HEX: '0xA9A9A9'
	 */
	static darkGrey: Color = Color.fromHex(0xA9A9A9);

	/**
	 * Color: 'Darkgray' HEX: '0x000000'
	 */
	static Darkgray: Color = Color.fromHex(0x000000);

	/**
	 * Color: 'DarkMagenta' HEX: '0x8B008B'
	 */
	static DarkMagenta: Color = Color.fromHex(0x8B008B);

	/**
	 * Color: 'DarkOliveGreen' HEX: '0x556B2F'
	 */
	static DarkOliveGreen: Color = Color.fromHex(0x556B2F);

	/**
	 * Color: 'DarkOrange' HEX: '0xFF8C00'
	 */
	static DarkOrange: Color = Color.fromHex(0xFF8C00);

	/**
	 * Color: 'DarkOrchid' HEX: '0x9932CC'
	 */
	static DarkOrchid: Color = Color.fromHex(0x9932CC);

	/**
	 * Color: 'DarkRed' HEX: '0x8B0000'
	 */
	static DarkRed: Color = Color.fromHex(0x8B0000);

	/**
	 * Color: 'DarkSalmon' HEX: '0xE9967A'
	 */
	static DarkSalmon: Color = Color.fromHex(0xE9967A);

	/**
	 * Color: 'DarkSeaGreen' HEX: '0x8FBC8F'
	 */
	static DarkSeaGreen: Color = Color.fromHex(0x8FBC8F);

	/**
	 * Color: 'DarkSlateBlue' HEX: '0x483D8B'
	 */
	static DarkSlateBlue: Color = Color.fromHex(0x483D8B);

	/**
	 * Color: 'DarkSlateGray' HEX: '0x2F4F4F'
	 */
	static DarkSlateGray: Color = Color.fromHex(0x2F4F4F);

	/**
	 * Color: 'DarkSlateGrey' HEX: '0x2F4F4F'
	 */
	static DarkSlateGrey: Color = Color.fromHex(0x2F4F4F);

	/**
	 * Color: 'DarkTurquoise' HEX: '0x00CED1'
	 */
	static DarkTurquoise: Color = Color.fromHex(0x00CED1);

	/**
	 * Color: 'DarkViolet' HEX: '0x9400D3'
	 */
	static DarkViolet: Color = Color.fromHex(0x9400D3);

	/**
	 * Color: 'DeepPink' HEX: '0xFF1493'
	 */
	static DeepPink: Color = Color.fromHex(0xFF1493);

	/**
	 * Color: 'DeepSkyBlue' HEX: '0x00BFFF'
	 */
	static DeepSkyBlue: Color = Color.fromHex(0x00BFFF);

	/**
	 * Color: 'DimGray' HEX: '0x696969'
	 */
	static DimGray: Color = Color.fromHex(0x696969);

	/**
	 * Color: 'DimGrey' HEX: '0x696969'
	 */
	static DimGrey: Color = Color.fromHex(0x696969);

	/**
	 * Color: 'DodgerBlue' HEX: '0x1E90FF'
	 */
	static DodgerBlue: Color = Color.fromHex(0x1E90FF);

	/**
	 * Color: 'FireBrick' HEX: '0xB22222'
	 */
	static FireBrick: Color = Color.fromHex(0xB22222);

	/**
	 * Color: 'FloralWhite' HEX: '0xFFFAF0'
	 */
	static FloralWhite: Color = Color.fromHex(0xFFFAF0);

	/**
	 * Color: 'ForestGreen' HEX: '0x228B22'
	 */
	static ForestGreen: Color = Color.fromHex(0x228B22);

	/**
	 * Color: 'Fuchsia' HEX: '0xFF00FF'
	 */
	static Fuchsia: Color = Color.fromHex(0xFF00FF);

	/**
	 * Color: 'Gainsboro' HEX: '0xDCDCDC'
	 */
	static Gainsboro: Color = Color.fromHex(0xDCDCDC);

	/**
	 * Color: 'GhostWhite' HEX: '0xF8F8FF'
	 */
	static GhostWhite: Color = Color.fromHex(0xF8F8FF);

	/**
	 * Color: 'Gold' HEX: '0xFFD700'
	 */
	static Gold: Color = Color.fromHex(0xFFD700);

	/**
	 * Color: 'GoldenRod' HEX: '0xDAA520'
	 */
	static GoldenRod: Color = Color.fromHex(0xDAA520);

	/**
	 * Color: 'Gray' HEX: '0x808080'
	 */
	static Gray: Color = Color.fromHex(0x808080);

	/**
	 * Color: 'Green' HEX: '0x008000'
	 */
	static Green: Color = Color.fromHex(0x008000);

	/**
	 * Color: 'GreenYellow' HEX: '0xADFF2F'
	 */
	static GreenYellow: Color = Color.fromHex(0xADFF2F);

	/**
	 * Color: 'Grey' HEX: '0x808080'
	 */
	static Grey: Color = Color.fromHex(0x808080);

	/**
	 * Color: 'HoneyDew' HEX: '0xF0FFF0'
	 */
	static HoneyDew: Color = Color.fromHex(0xF0FFF0);

	/**
	 * Color: 'HotPink' HEX: '0xFF69B4'
	 */
	static HotPink: Color = Color.fromHex(0xFF69B4);

	/**
	 * Color: 'IndianRed' HEX: '0xCD5C5C'
	 */
	static IndianRed: Color = Color.fromHex(0xCD5C5C);

	/**
	 * Color: 'Indigo' HEX: '0x4B0082'
	 */
	static Indigo: Color = Color.fromHex(0x4B0082);

	/**
	 * Color: 'Ivory' HEX: '0xFFFFF0'
	 */
	static Ivory: Color = Color.fromHex(0xFFFFF0);

	/**
	 * Color: 'Khaki' HEX: '0xF0E68C'
	 */
	static Khaki: Color = Color.fromHex(0xF0E68C);

	/**
	 * Color: 'Lavender' HEX: '0xE6E6FA'
	 */
	static Lavender: Color = Color.fromHex(0xE6E6FA);

	/**
	 * Color: 'LavenderBlush' HEX: '0xFFF0F5'
	 */
	static LavenderBlush: Color = Color.fromHex(0xFFF0F5);

	/**
	 * Color: 'LawnGreen' HEX: '0x7CFC00'
	 */
	static LawnGreen: Color = Color.fromHex(0x7CFC00);

	/**
	 * Color: 'LightBlue' HEX: '0xADD8E6'
	 */
	static LightBlue: Color = Color.fromHex(0xADD8E6);

	/**
	 * Color: 'LightCoral' HEX: '0xF08080'
	 */
	static LightCoral: Color = Color.fromHex(0xF08080);

	/**
	 * Color: 'LightCyan' HEX: '0xE0FFFF'
	 */
	static LightCyan: Color = Color.fromHex(0xE0FFFF);

	/**
	 * Color: 'LightGray' HEX: '0xD3D3D3'
	 */
	static LightGray: Color = Color.fromHex(0xD3D3D3);

	/**
	 * Color: 'LightGreen' HEX: '0x90EE90'
	 */
	static LightGreen: Color = Color.fromHex(0x90EE90);

	/**
	 * Color: 'LightGrey' HEX: '0xD3D3D3'
	 */
	static LightGrey: Color = Color.fromHex(0xD3D3D3);

	/**
	 * Color: 'LightPink' HEX: '0xFFB6C1'
	 */
	static LightPink: Color = Color.fromHex(0xFFB6C1);

	/**
	 * Color: 'LightSalmon' HEX: '0xFFA07A'
	 */
	static LightSalmon: Color = Color.fromHex(0xFFA07A);

	/**
	 * Color: 'LightSeaGreen' HEX: '0x20B2AA'
	 */
	static LightSeaGreen: Color = Color.fromHex(0x20B2AA);

	/**
	 * Color: 'LightSkyBlue' HEX: '0x87CEFA'
	 */
	static LightSkyBlue: Color = Color.fromHex(0x87CEFA);

	/**
	 * Color: 'LightSlateGray' HEX: '0x778899'
	 */
	static LightSlateGray: Color = Color.fromHex(0x778899);

	/**
	 * Color: 'LightSlateGrey' HEX: '0x778899'
	 */
	static LightSlateGrey: Color = Color.fromHex(0x778899);

	/**
	 * Color: 'LightSteelBlue' HEX: '0xB0C4DE'
	 */
	static LightSteelBlue: Color = Color.fromHex(0xB0C4DE);

	/**
	 * Color: 'LightYellow' HEX: '0xFFFFE0'
	 */
	static LightYellow: Color = Color.fromHex(0xFFFFE0);

	/**
	 * Color: 'Lime' HEX: '0x00FF00'
	 */
	static Lime: Color = Color.fromHex(0x00FF00);

	/**
	 * Color: 'LimeGreen' HEX: '0x32CD32'
	 */
	static LimeGreen: Color = Color.fromHex(0x32CD32);

	/**
	 * Color: 'Linen' HEX: '0xFAF0E6'
	 */
	static Linen: Color = Color.fromHex(0xFAF0E6);

	/**
	 * Color: 'Magenta' HEX: '0xFF00FF'
	 */
	static Magenta: Color = Color.fromHex(0xFF00FF);

	/**
	 * Color: 'Maroon' HEX: '0x800000'
	 */
	static Maroon: Color = Color.fromHex(0x800000);

	/**
	 * Color: 'MediumAquaMarine' HEX: '0x66CDAA'
	 */
	static MediumAquaMarine: Color = Color.fromHex(0x66CDAA);

	/**
	 * Color: 'MediumBlue' HEX: '0x0000CD'
	 */
	static MediumBlue: Color = Color.fromHex(0x0000CD);

	/**
	 * Color: 'MediumOrchid' HEX: '0xBA55D3'
	 */
	static MediumOrchid: Color = Color.fromHex(0xBA55D3);

	/**
	 * Color: 'MediumPurple' HEX: '0x9370DB'
	 */
	static MediumPurple: Color = Color.fromHex(0x9370DB);


	/**
	 * Color: 'MediumSeaGreen' HEX: '0x3CB371'
	 */
	static MediumSeaGreen: Color = Color.fromHex(0x3CB371);

	/**
	 * Color: 'MediumSlateBlue' HEX: '0x7B68EE'
	 */
	static MediumSlateBlue: Color = Color.fromHex(0x7B68EE);

	/**
	 * Color: 'MediumSpringGreen' HEX: '0x00FA9A'
	 */
	static MediumSpringGreen: Color = Color.fromHex(0x00FA9A);

	/**
	 * Color: 'MediumTurquoise' HEX: '0x48D1CC'
	 */
	static MediumTurquoise: Color = Color.fromHex(0x48D1CC);

	/**
	 * Color: 'MediumVioletRed' HEX: '0xC71585'
	 */
	static MediumVioletRed: Color = Color.fromHex(0xC71585);

	/**
	 * Color: 'MidnightBlue' HEX: '0x191970'
	 */
	static MidnightBlue: Color = Color.fromHex(0x191970);

	/**
	 * Color: 'MintCream' HEX: '0xF5FFFA'
	 */
	static MintCream: Color = Color.fromHex(0xF5FFFA);

	/**
	 * Color: 'MistyRose' HEX: '0xFFE4E1'
	 */
	static MistyRose: Color = Color.fromHex(0xFFE4E1);

	/**
	 * Color: 'Moccasin' HEX: '0xFFE4B5'
	 */
	static Moccasin: Color = Color.fromHex(0xFFE4B5);

	/**
	 * Color: 'NavajoWhite' HEX: '0xFFDEAD'
	 */
	static NavajoWhite: Color = Color.fromHex(0xFFDEAD);

	/**
	 * Color: 'Navy' HEX: '0x000080'
	 */
	static Navy: Color = Color.fromHex(0x000080);

	/**
	 * Color: 'OldLace' HEX: '0xFDF5E6'
	 */
	static OldLace: Color = Color.fromHex(0xFDF5E6);

	/**
	 * Color: 'Olive' HEX: '0x808000'
	 */
	static Olive: Color = Color.fromHex(0x808000);

	/**
	 * Color: 'OliveDrab' HEX: '0x6B8E23'
	 */
	static OliveDrab: Color = Color.fromHex(0x6B8E23);

	/**
	 * Color: 'Orange' HEX: '0xFFA500'
	 */
	static Orange: Color = Color.fromHex(0xFFA500);

	/**
	 * Color: 'OrangeRed' HEX: '0xFF4500'
	 */
	static OrangeRed: Color = Color.fromHex(0xFF4500);

	/**
	 * Color: 'Orchid' HEX: '0xDA70D6'
	 */
	static Orchid: Color = Color.fromHex(0xDA70D6);

	/**
	 * Color: 'PaleGoldenRod' HEX: '0xEEE8AA'
	 */
	static PaleGoldenRod: Color = Color.fromHex(0xEEE8AA);

	/**
	 * Color: 'PaleGreen' HEX: '0x98FB98'
	 */
	static PaleGreen: Color = Color.fromHex(0x98FB98);

	/**
	 * Color: 'PaleTurquoise' HEX: '0xAFEEEE'
	 */
	static PaleTurquoise: Color = Color.fromHex(0xAFEEEE);

	/**
	 * Color: 'PaleVioletRed' HEX: '0xDB7093'
	 */
	static PaleVioletRed: Color = Color.fromHex(0xDB7093);

	/**
	 * Color: 'PapayaWhip' HEX: '0xFFDAB9'
	 */
	static PapayaWhip: Color = Color.fromHex(0xFFDAB9);

	/**
	 * Color: 'PeachPuff' HEX: '0xFFEFD5'
	 */
	static PeachPuff: Color = Color.fromHex(0xFFEFD5);

	/**
	 * Color: 'Peru' HEX: '0xCD853F'
	 */
	static Peru: Color = Color.fromHex(0xCD853F);

	/**
	 * Color: 'Pink' HEX: '0xFFC0CB'
	 */
	static Pink: Color = Color.fromHex(0xFFC0CB);

	/**
	 * Color: 'Plum' HEX: '0xDDA0DD'
	 */
	static Plum: Color = Color.fromHex(0xDDA0DD);

	/**
	 * Color: 'PowderBlue' HEX: '0xB0E0E6'
	 */
	static PowderBlue: Color = Color.fromHex(0xB0E0E6);

	/**
	 * Color: 'Purple' HEX: '0x800080'
	 */
	static Purple: Color = Color.fromHex(0x800080);

	/**
	 * Color: 'RebeccaPurple' HEX: '0x663399'
	 */
	static RebeccaPurple: Color = Color.fromHex(0x663399);

	/**
	 * Color: 'Red' HEX: '0xFF0000'
	 */
	static Red: Color = Color.fromHex(0xFF0000);

	/**
	 * Color: 'RosyBrown' HEX: '0xBC8F8F'
	 */
	static RosyBrown: Color = Color.fromHex(0xBC8F8F);

	/**
	 * Color: 'RoyalBlue' HEX: '0x4169E1'
	 */
	static RoyalBlue: Color = Color.fromHex(0x4169E1);

	/**
	 * Color: 'SaddleBrown' HEX: '0x8B4513'
	 */
	static SaddleBrown: Color = Color.fromHex(0x8B4513);

	/**
	 * Color: 'Salmon' HEX: '0xFA8072'
	 */
	static Salmon: Color = Color.fromHex(0xFA8072);

	/**
	 * Color: 'SandyBrown' HEX: '0xF4A460'
	 */
	static SandyBrown: Color = Color.fromHex(0xF4A460);

	/**
	 * Color: 'SeaGreen' HEX: '0x2E8B57'
	 */
	static SeaGreen: Color = Color.fromHex(0x2E8B57);

	/**
	 * Color: 'SeaShell' HEX: '0xFFF5EE'
	 */
	static SeaShell: Color = Color.fromHex(0xFFF5EE);

	/**
	 * Color: 'Sienna' HEX: '0xA0522D'
	 */
	static Sienna: Color = Color.fromHex(0xA0522D);

	/**
	 * Color: 'Silver' HEX: '0xC0C0C0'
	 */
	static Silver: Color = Color.fromHex(0xC0C0C0);

	/**
	 * Color: 'SkyBlue' HEX: '0x87CEEB'
	 */
	static SkyBlue: Color = Color.fromHex(0x87CEEB);

	/**
	 * Color: 'SlateBlue' HEX: '0x6A5ACD'
	 */
	static SlateBlue: Color = Color.fromHex(0x6A5ACD);

	/**
	 * Color: 'SlateGray' HEX: '0x708090'
	 */
	static SlateGray: Color = Color.fromHex(0x708090);

	/**
	 * Color: 'SlateGrey' HEX: '0x708090'
	 */
	static SlateGrey: Color = Color.fromHex(0x708090);

	/**
	 * Color: 'Snow' HEX: '0xFFFAFA'
	 */
	static Snow: Color = Color.fromHex(0xFFFAFA);

	/**
	 * Color: 'SpringGreen' HEX: '0x00FF7F'
	 */
	static SpringGreen: Color = Color.fromHex(0x00FF7F);

	/**
	 * Color: 'SteelBlue' HEX: '0x4682B4'
	 */
	static SteelBlue: Color = Color.fromHex(0x4682B4);

	/**
	 * Color: 'Tan' HEX: '0xD2B48C'
	 */
	static Tan: Color = Color.fromHex(0xD2B48C);

	/**
	 * Color: 'Teal' HEX: '0x008080'
	 */
	static Teal: Color = Color.fromHex(0x008080);

	/**
	 * Color: 'Thistle' HEX: '0xD8BFD8'
	 */
	static Thistle: Color = Color.fromHex(0xD8BFD8);

	/**
	 * Color: 'Tomato' HEX: '0xFF6347'
	 */
	static Tomato: Color = Color.fromHex(0xFF6347);

	/**
	 * Color: 'Turquoise' HEX: '0x40E0D0'
	 */
	static Turquoise: Color = Color.fromHex(0x40E0D0);

	/**
	 * Color: 'Violet' HEX: '0xEE82EE'
	 */
	static Violet: Color = Color.fromHex(0xEE82EE);

	/**
	 * Color: 'Wheat' HEX: '0xF5DEB3'
	 */
	static Wheat: Color = Color.fromHex(0xF5DEB3);

	/**
	 * Color: 'White' HEX: '0xFFFFFF'
	 */
	static White: Color = Color.fromHex(0xFFFFFF);

	/**
	 * Color: 'WhiteSmoke' HEX: '0xF5F5F5'
	 */
	static WhiteSmoke: Color = Color.fromHex(0xF5F5F5);

	/**
	 * Color: 'Yellow' HEX: '0xFFFF00'
	 */
	static Yellow: Color = Color.fromHex(0xFFFF00);

	/**
	 * Color: 'YellowGreen' HEX: '0x9ACD32'
	 */
	static YellowGreen: Color = Color.fromHex(0x9ACD32);

	/**
	 * Constructs a color object with the provided hexidecimal value
	 * 
	 * @param {number} hex A 24 bit hexidecimal value. e.g: 0xFFFFFF
	 */
	static fromHex(hex: number): Color {

		return new Color(hex);

	}

	/**
	 * Constructs a color object with the provided RGB values
	 * 
	 * @param {number} red The red channel value
	 * @param {number} green The green channel value
	 * @param {number} blue The blue channel value
	 */
	static fromRGB(red: number, green: number, blue: number): Color {

		return new Color(red, green, blue);

	}

	/**
	 * Constructs a color object with the provided RGBA values
	 * 
	 * @param {number} red The red channel value
	 * @param {number} green The green channel value
	 * @param {number} blue The blue channel value
	 */
	static fromRGBA(red: number, green: number, blue: number, alpha: number): Color {

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
	static toHexString(red: number, green: number, blue: number, alpha?: number) {

		let _hexString = "";

		if (alpha === undefined) {

			_hexString = "#" + ((red << 16) + (green << 8) + blue).toString(16);

		} else {

			_hexString = "#" + ((red << 24) + (green << 16) + (blue << 8) + alpha).toString(16);

		}

		return _hexString;

	}

	/**
	 * Linear interpolates a hexidecimal color value, this allows for a fade effect transition between each steps of colors
	 * 
	 * @param from The initial starting color
	 * @param to The final resting color
	 * @param increment Resolution of steps to take before making a rest to the defined end color
	 * @returns {Color}
	 */
	static lerp(from: Color, to: Color, increment: number): Color {

		if (utils.isNullOrUndefined(from)) {

			throw new Error("The initial start color was not provided");

		}

		if (utils.isNullOrUndefined(to)) {

			throw new Error("The finally transition color was not provided!");

		}

		return from.lerp(to, increment);

	}

	/**
	 * An arbitary name for this color instance
	 */
	public name: string;

	/**
	 * The red channel
	 */
	public red: number;

	/**
	 * The green channel
	 */
	public green: number;

	/**
	 * The blue channel
	 */
	public blue: number;

	/**
	 * The alpha / transparency channel
	 */
	public alpha: number;

	/**
	 * The hexidecimal representation for this color instance
	 */
	private _hex: number;

	/**
	 * Constructs a color object with the provided rgb values
	 * 
	 * @param {number} red The red channel value
	 * @param {number} green The green channel value
	 * @param {number} blue The blue channel value
	 * @param {number} alpha The alpha / transparency channel value
	 * @returns {Color} Color
	 */
	constructor(red: number | string, green?: number, blue?: number, alpha: number = 255) {

		this.name = "";
		this.red = 0;
		this.green = 0;
		this.blue = 0;
		this.alpha = 255;
		this._hex = 0x00;

		if (green === undefined && blue === undefined) {

			this.setHex(red);

		}

		return this.setRGB(Number(red), Number(green), Number(blue));

	}

	/**
	 * Gets the hexidecimal value for the current color instance
	 */
	get hex(): number {

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
	setRGB(red: number, green: number, blue: number): Color {

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
	setRGBA(red: number, green: number, blue: number, alpha: number): Color {

		this.red = red;
		this.green = red;
		this.blue = red;
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
	setHex(hex: number | string): Color {

		let _color = null;

		// hex is a number, convert it to a string
		if (typeof hex === "number") {

			hex = String(hex);

		}

		if (typeof (hex) === "string") {

			// attempt to parse the hexidecimal color object
			let _hex = String(hex);

			// ensure hex is a hex string
			_hex = _hex.replace("0x", "#");
			_hex = _hex.indexOf("#") > -1 ? hex : "#" + hex;

			// shorthand initialization #fff -> #ffffff
			var _shorthandHex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

			_hex = _hex.replace(_shorthandHex, function (m, r, g, b) {

				return "#" + r + r + g + g + b + b;

			});

			var hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_hex);

			let nRed = 0;
			let nGreen = 0;
			let nBlue = 0;

			if (hexMatch) {

				nRed = parseInt(hexMatch[1], 16);
				nGreen = parseInt(hexMatch[2], 16);
				nBlue = parseInt(hexMatch[3], 16);

				this.setRGB(nRed, nGreen, nBlue);

			}

			this.setRGB(nRed, nGreen, nBlue);

		}

		return this;

	}

	/**
	 * Linear interpolates to a new color by a defined amount of steps
	 * 
	 * @param to The final resting color
	 * @param increment Resolution of steps to take before making a rest to the defined end color
	 * @returns {Color}
	 */
	lerp(to: Color, increment: number): Color {

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
	toString(hexidecimal?: boolean): string {

		const { red, green, blue, alpha } = this;

		if (!!hexidecimal) {

			return Color.toHexString(red, green, blue, alpha);

		}

		return `rgba(${red},${green},${blue},${alpha})`;

	}

	private _updateHex(): void {

		const { red, green, blue, alpha } = this;
		this._hex = (red << 24) + (green << 16) + (blue << 8) + (alpha | 0);

	}

}

export default Color;