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

import * as utils from "../../../utils/utils";
import * as math from "../../../math/math";
import * as conversions from "../../../utils/text/conversions";

/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the base types
 */
export class Color {

	/**
	 * Color: 'AliceBlue' HEX: #F0F8FF'
	 */
	static get AliceBlue(): Color { 
		
		return Color.fromHex(0xF0F8FF);

	}

	/**
	 * Color: 'AntiqueWhite' HEX: #FAEBD7'
	 */
	static get AntiqueWhite(): Color { 
		
		return Color.fromHex(0xFAEBD7);

	}

	/**
	 * Color: 'Aqua' HEX: #00FFFF'
	 */
	static get Aqua(): Color { 
		
		return Color.fromHex(0x00FFFF);

	}

	/**
	 * Color: 'AquaMarine' HEX: #7FFFD4'
	 */
	static get AquaMarine(): Color { 
		
		return Color.fromHex(0x7FFFD4);

	}

	/**
	 * Color: 'Azure' HEX: #007FFF'
	 */
	static get Azure(): Color { 
		
		return Color.fromHex(0x007FFF);

	}

	/**
	 * Color: 'Beige' HEX: #F5F5DC'
	 */
	static get Beige(): Color { 
		
		return Color.fromHex(0xF5F5DC);

	}

	/**
	 * Color: 'Bisque' HEX: #FFE4C4'
	 */
	static get Bisque(): Color { 
		
		return Color.fromHex(0xFFE4C4);

	}

	/**
	 * Color: 'Black' HEX: #000000'
	 */
	static get Black(): Color { 
		
		return Color.fromHex(0x000000);

	}

	/**
	 * Color: 'BlanchedAlmond' HEX: #FFEBCD'
	 */
	static get BlanchedAlmond(): Color { 
		
		return Color.fromHex(0xFFEBCD);

	}

	/**
	 * Color: 'Blue' HEX: #0000FF'
	 */
	static get Blue(): Color { 
		
		return Color.fromHex(0x0000FF);

	}

	/**
	 * Color: 'blueViolet' HEX: #8A2BE2'
	 */
	static get BlueViolet(): Color { 
		
		return Color.fromHex(0x8A2BE2);

	}

	/**
	 * Color: 'Brown' HEX: #654321'
	 */
	static get Brown(): Color { 
		
		return Color.fromHex(0x654321);

	}

	/**
	 * Color: 'Burlywood' HEX: #DEB887'
	 */
	static get Burlywood(): Color { 
		
		return Color.fromHex(0xDEB887);

	}

	/**
	 * Color: 'CadetBlue' HEX: #5F9EA0'
	 */
	static get CadetBlue(): Color { 
		
		return Color.fromHex(0x5F9EA0);

	}

	/**
	 * Color: 'Chartreuse' HEX: #7FFF00'
	 */
	static get Chartreuse(): Color { 
		
		return Color.fromHex(0x7FFF00);

	}

	/**
	 * Color: 'Chocolate' HEX: #D2691E'
	 */
	static get Chocolate(): Color { 
		
		return Color.fromHex(0xD2691E);

	}

	/**
	 * Color: 'Coral' HEX: #FF7F50'
	 */
	static get Coral(): Color { 
		
		return Color.fromHex(0xFF7F50);

	}

	/**
	 * Color: 'CornFlowerBlue' HEX: #6495ED'
	 */
	static get CornFlowerBlue(): Color { 
		
		return Color.fromHex(0x6495ED);

	}

	/**
	 * Color: 'Cornsilk' HEX: #FFF8DC'
	 */
	static get Cornsilk(): Color { 
		
		return Color.fromHex(0xFFF8DC);

	}

	/**
	 * Color: 'Crimson' HEX: #DC143C'
	 */
	static get Crimson(): Color { 
		
		return Color.fromHex(0xDC143C);

	}

	/**
	 * Color: 'Cyan' HEX: #00FFFF'
	 */
	static get Cyan(): Color { 
		
		return Color.fromHex(0x00FFFF);

	}

	/**
	 * Color: 'DarkBlue' HEX: #00008B'
	 */
	static get DarkBlue(): Color { 
		
		return Color.fromHex(0x00008B);

	}

	/**
	 * Color: 'DarkCyan' HEX: #008B8B'
	 */
	static get DarkCyan(): Color { 
		
		return Color.fromHex(0x008B8B);

	}

	/**
	 * Color: 'DarkGoldenRod' HEX: #B8860B'
	 */
	static get DarkGoldenRod(): Color { 
		
		return Color.fromHex(0xB8860B);

	}

	/**
	 * Color: 'DarkGray' HEX: #A9A9A9'
	 */
	static get DarkGray(): Color { 
		
		return Color.fromHex(0xA9A9A9);

	}

	/**
	 * Color: 'DarkGreen' HEX: #006400'
	 */
	static get DarkGreen(): Color { 
		
		return Color.fromHex(0x006400);

	}

	/**
	 * Color: 'DarkKhaki' HEX: #BDB76B'
	 */
	static get DarkKhaki(): Color { 
		
		return Color.fromHex(0xBDB76B);

	}

	/**
	 * Color: 'darkGrey' HEX: #A9A9A9'
	 */
	static get DarkGrey(): Color { 
		
		return Color.fromHex(0xA9A9A9);

	}

	/**
	 * Color: 'Darkgray' HEX: #A9A9A9'
	 */
	static get Darkgray(): Color { 
		
		return Color.fromHex(0xA9A9A9);

	}

	/**
	 * Color: 'DarkMagenta' HEX: #8B008B'
	 */
	static get DarkMagenta(): Color { 
		
		return Color.fromHex(0x8B008B);

	}

	/**
	 * Color: 'DarkOliveGreen' HEX: #556B2F'
	 */
	static get DarkOliveGreen(): Color { 
		
		return Color.fromHex(0x556B2F);

	}

	/**
	 * Color: 'DarkOrange' HEX: #FF8C00'
	 */
	static get DarkOrange(): Color { 
		
		return Color.fromHex(0xFF8C00);

	}

	/**
	 * Color: 'DarkOrchid' HEX: #9932CC'
	 */
	static get DarkOrchid(): Color { 
		
		return Color.fromHex(0x9932CC);

	}

	/**
	 * Color: 'DarkRed' HEX: #8B0000'
	 */
	static get DarkRed(): Color { 
		
		return Color.fromHex(0x8B0000);

	}

	/**
	 * Color: 'DarkSalmon' HEX: #E9967A'
	 */
	static get DarkSalmon(): Color { 
		
		return Color.fromHex(0xE9967A);

	}

	/**
	 * Color: 'DarkSeaGreen' HEX: #8FBC8F'
	 */
	static get DarkSeaGreen(): Color { 
		
		return Color.fromHex(0x8FBC8F);

	}

	/**
	 * Color: 'DarkSlateBlue' HEX: #483D8B'
	 */
	static get DarkSlateBlue(): Color { 
		
		return Color.fromHex(0x483D8B);

	}

	/**
	 * Color: 'DarkSlateGray' HEX: #2F4F4F'
	 */
	static get DarkSlateGray(): Color { 
		
		return Color.fromHex(0x2F4F4F);

	}

	/**
	 * Color: 'DarkSlateGrey' HEX: #2F4F4F'
	 */
	static get DarkSlateGrey(): Color { 
		
		return Color.fromHex(0x2F4F4F);

	}

	/**
	 * Color: 'DarkTurquoise' HEX: #00CED1'
	 */
	static get DarkTurquoise(): Color { 
		
		return Color.fromHex(0x00CED1);

	}

	/**
	 * Color: 'DarkViolet' HEX: #9400D3'
	 */
	static get DarkViolet(): Color { 
		
		return Color.fromHex(0x9400D3);

	}

	/**
	 * Color: 'DeepPink' HEX: #FF1493'
	 */
	static get DeepPink(): Color { 
		
		return Color.fromHex(0xFF1493);

	}

	/**
	 * Color: 'DeepSkyBlue' HEX: #00BFFF'
	 */
	static get DeepSkyBlue(): Color { 
		
		return Color.fromHex(0x00BFFF);

	}

	/**
	 * Color: 'DimGray' HEX: #696969'
	 */
	static get DimGray(): Color { 
		
		return Color.fromHex(0x696969);

	}

	/**
	 * Color: 'DimGrey' HEX: #696969'
	 */
	static get DimGrey(): Color { 
		
		return Color.fromHex(0x696969);

	}

	/**
	 * Color: 'DodgerBlue' HEX: #1E90FF'
	 */
	static get DodgerBlue(): Color { 
		
		return Color.fromHex(0x1E90FF);

	}

	/**
	 * Color: 'FireBrick' HEX: #B22222'
	 */
	static get FireBrick(): Color { 
		
		return Color.fromHex(0xB22222);

	}

	/**
	 * Color: 'FloralWhite' HEX: #FFFAF0'
	 */
	static get FloralWhite(): Color { 
		
		return Color.fromHex(0xFFFAF0);

	}

	/**
	 * Color: 'ForestGreen' HEX: #228B22'
	 */
	static get ForestGreen(): Color { 
		
		return Color.fromHex(0x228B22);

	}

	/**
	 * Color: 'Fuchsia' HEX: #FF00FF'
	 */
	static get Fuchsia(): Color { 
		
		return Color.fromHex(0xFF00FF);

	}

	/**
	 * Color: 'Gainsboro' HEX: #DCDCDC'
	 */
	static get Gainsboro(): Color { 
		
		return Color.fromHex(0xDCDCDC);

	}

	/**
	 * Color: 'GhostWhite' HEX: #F8F8FF'
	 */
	static get GhostWhite(): Color { 
		
		return Color.fromHex(0xF8F8FF);

	}

	/**
	 * Color: 'Gold' HEX: #FFD700'
	 */
	static get Gold(): Color { 
		
		return Color.fromHex(0xFFD700);

	}

	/**
	 * Color: 'GoldenRod' HEX: #DAA520'
	 */
	static get GoldenRod(): Color { 
		
		return Color.fromHex(0xDAA520);

	}

	/**
	 * Color: 'Gray' HEX: #808080'
	 */
	static get Gray(): Color { 
		
		return Color.fromHex(0x808080);

	}

	/**
	 * Color: 'Green' HEX: #008000'
	 */
	static get Green(): Color { 
		
		return Color.fromHex(0x008000);

	}

	/**
	 * Color: 'GreenYellow' HEX: #ADFF2F'
	 */
	static get GreenYellow(): Color { 
		
		return Color.fromHex(0xADFF2F);

	}

	/**
	 * Color: 'Grey' HEX: #808080'
	 */
	static get Grey(): Color { 
		
		return Color.fromHex(0x808080);

	}

	/**
	 * Color: 'HoneyDew' HEX: #F0FFF0'
	 */
	static get HoneyDew(): Color { 
		
		return Color.fromHex(0xF0FFF0);

	}

	/**
	 * Color: 'HotPink' HEX: #FF69B4'
	 */
	static get HotPink(): Color { 
		
		return Color.fromHex(0xFF69B4);

	}

	/**
	 * Color: 'IndianRed' HEX: #CD5C5C'
	 */
	static get IndianRed(): Color { 
		
		return Color.fromHex(0xCD5C5C);

	}

	/**
	 * Color: 'Indigo' HEX: #4B0082'
	 */
	static get Indigo(): Color { 
		
		return Color.fromHex(0x4B0082);

	}

	/**
	 * Color: 'Ivory' HEX: #FFFFF0'
	 */
	static get Ivory(): Color { 
		
		return Color.fromHex(0xFFFFF0);

	}

	/**
	 * Color: 'Khaki' HEX: #F0E68C'
	 */
	static get Khaki(): Color { 
		
		return Color.fromHex(0xF0E68C);

	}

	/**
	 * Color: 'Lavender' HEX: #E6E6FA'
	 */
	static get Lavender(): Color { 
		
		return Color.fromHex(0xE6E6FA);

	}

	/**
	 * Color: 'LavenderBlush' HEX: #FFF0F5'
	 */
	static get LavenderBlush(): Color { 
		
		return Color.fromHex(0xFFF0F5);

	}

	/**
	 * Color: 'LawnGreen' HEX: #7CFC00'
	 */
	static get LawnGreen(): Color { 
		
		return Color.fromHex(0x7CFC00);

	}

	/**
	 * Color: 'LightBlue' HEX: #ADD8E6'
	 */
	static get LightBlue(): Color { 
		
		return Color.fromHex(0xADD8E6);

	}

	/**
	 * Color: 'LightCoral' HEX: #F08080'
	 */
	static get LightCoral(): Color { 
		
		return Color.fromHex(0xF08080);

	}

	/**
	 * Color: 'LightCyan' HEX: #E0FFFF'
	 */
	static get LightCyan(): Color { 
		
		return Color.fromHex(0xE0FFFF);

	}

	/**
	 * Color: 'LightGray' HEX: #D3D3D3'
	 */
	static get LightGray(): Color { 
		
		return Color.fromHex(0xD3D3D3);

	}

	/**
	 * Color: 'LightGreen' HEX: #90EE90'
	 */
	static get LightGreen(): Color { 
		
		return Color.fromHex(0x90EE90);

	}

	/**
	 * Color: 'LightGrey' HEX: #D3D3D3'
	 */
	static get LightGrey(): Color { 
		
		return Color.fromHex(0xD3D3D3);

	}

	/**
	 * Color: 'LightPink' HEX: #FFB6C1'
	 */
	static get LightPink(): Color { 
		
		return Color.fromHex(0xFFB6C1);

	}

	/**
	 * Color: 'LightSalmon' HEX: #FFA07A'
	 */
	static get LightSalmon(): Color { 
		
		return Color.fromHex(0xFFA07A);

	}

	/**
	 * Color: 'LightSeaGreen' HEX: #20B2AA'
	 */
	static get LightSeaGreen(): Color { 
		
		return Color.fromHex(0x20B2AA);

	}

	/**
	 * Color: 'LightSkyBlue' HEX: #87CEFA'
	 */
	static get LightSkyBlue(): Color { 
		
		return Color.fromHex(0x87CEFA);

	}

	/**
	 * Color: 'LightSlateGray' HEX: #778899'
	 */
	static get LightSlateGray(): Color { 
		
		return Color.fromHex(0x778899);

	}

	/**
	 * Color: 'LightSlateGrey' HEX: #778899'
	 */
	static get LightSlateGrey(): Color { 
		
		return Color.fromHex(0x778899);

	}

	/**
	 * Color: 'LightSteelBlue' HEX: #B0C4DE'
	 */
	static get LightSteelBlue(): Color { 
		
		return Color.fromHex(0xB0C4DE);

	}

	/**
	 * Color: 'LightYellow' HEX: #FFFFE0'
	 */
	static get LightYellow(): Color { 
		
		return Color.fromHex(0xFFFFE0);

	}

	/**
	 * Color: 'Lime' HEX: #00FF00'
	 */
	static get Lime(): Color { 
		
		return Color.fromHex(0x00FF00);

	}

	/**
	 * Color: 'LimeGreen' HEX: #32CD32'
	 */
	static get LimeGreen(): Color { 
		
		return Color.fromHex(0x32CD32);

	}

	/**
	 * Color: 'Linen' HEX: #FAF0E6'
	 */
	static get Linen(): Color { 
		
		return Color.fromHex(0xFAF0E6);

	}

	/**
	 * Color: 'Magenta' HEX: #FF00FF'
	 */
	static get Magenta(): Color { 
		
		return Color.fromHex(0xFF00FF);

	}

	/**
	 * Color: 'Maroon' HEX: #800000'
	 */
	static get Maroon(): Color { 
		
		return Color.fromHex(0x800000);

	}

	/**
	 * Color: 'MediumAquaMarine' HEX: #66CDAA'
	 */
	static get MediumAquaMarine(): Color { 
		
		return Color.fromHex(0x66CDAA);

	}

	/**
	 * Color: 'MediumBlue' HEX: #0000CD'
	 */
	static get MediumBlue(): Color { 
		
		return Color.fromHex(0x0000CD);

	}

	/**
	 * Color: 'MediumOrchid' HEX: #BA55D3'
	 */
	static get MediumOrchid(): Color { 
		
		return Color.fromHex(0xBA55D3);

	}

	/**
	 * Color: 'MediumPurple' HEX: #9370DB'
	 */
	static get MediumPurple(): Color { 
		
		return Color.fromHex(0x9370DB);

	}

	/**
	 * Color: 'MediumSeaGreen' HEX: #3CB371'
	 */
	static get MediumSeaGreen(): Color { 
		
		return Color.fromHex(0x3CB371);

	}

	/**
	 * Color: 'MediumSlateBlue' HEX: #7B68EE'
	 */
	static get MediumSlateBlue(): Color { 
		
		return Color.fromHex(0x7B68EE);

	}

	/**
	 * Color: 'MediumSpringGreen' HEX: #00FA9A'
	 */
	static get MediumSpringGreen(): Color { 
		
		return Color.fromHex(0x00FA9A);

	}

	/**
	 * Color: 'MediumTurquoise' HEX: #48D1CC'
	 */
	static get MediumTurquoise(): Color { 
		
		return Color.fromHex(0x48D1CC);

	}

	/**
	 * Color: 'MediumVioletRed' HEX: #C71585'
	 */
	static get MediumVioletRed(): Color { 
		
		return Color.fromHex(0xC71585);

	}

	/**
	 * Color: 'MidnightBlue' HEX: #191970'
	 */
	static get MidnightBlue(): Color { 
		
		return Color.fromHex(0x191970);

	}

	/**
	 * Color: 'MintCream' HEX: #F5FFFA'
	 */
	static get MintCream(): Color { 
		
		return Color.fromHex(0xF5FFFA);

	}

	/**
	 * Color: 'MistyRose' HEX: #FFE4E1'
	 */
	static get MistyRose(): Color { 
		
		return Color.fromHex(0xFFE4E1);

	}

	/**
	 * Color: 'Moccasin' HEX: #FFE4B5'
	 */
	static get Moccasin(): Color { 
		
		return Color.fromHex(0xFFE4B5);

	}

	/**
	 * Color: 'NavajoWhite' HEX: #FFDEAD'
	 */
	static get NavajoWhite(): Color { 
		
		return Color.fromHex(0xFFDEAD);

	}

	/**
	 * Color: 'Navy' HEX: #000080'
	 */
	static get Navy(): Color { 
		
		return Color.fromHex(0x000080);

	}

	/**
	 * Color: 'OldLace' HEX: #FDF5E6'
	 */
	static get OldLace(): Color { 
		
		return Color.fromHex(0xFDF5E6);

	}

	/**
	 * Color: 'Olive' HEX: #808000'
	 */
	static get Olive(): Color { 
		
		return Color.fromHex(0x808000);

	}

	/**
	 * Color: 'OliveDrab' HEX: #6B8E23'
	 */
	static get OliveDrab(): Color { 
		
		return Color.fromHex(0x6B8E23);

	}

	/**
	 * Color: 'Orange' HEX: #FFA500'
	 */
	static get Orange(): Color { 
		
		return Color.fromHex(0xFFA500);

	}

	/**
	 * Color: 'OrangeRed' HEX: #FF4500'
	 */
	static get OrangeRed(): Color { 
		
		return Color.fromHex(0xFF4500);

	}

	/**
	 * Color: 'Orchid' HEX: #DA70D6'
	 */
	static get Orchid(): Color { 
		
		return Color.fromHex(0xDA70D6);

	}

	/**
	 * Color: 'PaleGoldenRod' HEX: #EEE8AA'
	 */
	static get PaleGoldenRod(): Color { 
		
		return Color.fromHex(0xEEE8AA);

	}

	/**
	 * Color: 'PaleGreen' HEX: #98FB98'
	 */
	static get PaleGreen(): Color { 
		
		return Color.fromHex(0x98FB98);

	}

	/**
	 * Color: 'PaleTurquoise' HEX: #AFEEEE'
	 */
	static get PaleTurquoise(): Color { 
		
		return Color.fromHex(0xAFEEEE);

	}

	/**
	 * Color: 'PaleVioletRed' HEX: #DB7093'
	 */
	static get PaleVioletRed(): Color { 
		
		return Color.fromHex(0xDB7093);

	}

	/**
	 * Color: 'PapayaWhip' HEX: #FFDAB9'
	 */
	static get PapayaWhip(): Color { 
		
		return Color.fromHex(0xFFDAB9);

	}

	/**
	 * Color: 'PeachPuff' HEX: #FFEFD5'
	 */
	static get PeachPuff(): Color { 
		
		return Color.fromHex(0xFFEFD5);

	}

	/**
	 * Color: 'Peru' HEX: #CD853F'
	 */
	static get Peru(): Color { 
		
		return Color.fromHex(0xCD853F);

	}

	/**
	 * Color: 'Pink' HEX: #FFC0CB'
	 */
	static get Pink(): Color { 
		
		return Color.fromHex(0xFFC0CB);

	}

	/**
	 * Color: 'Plum' HEX: #DDA0DD'
	 */
	static get Plum(): Color { 
		
		return Color.fromHex(0xDDA0DD);

	}

	/**
	 * Color: 'PowderBlue' HEX: #B0E0E6'
	 */
	static get PowderBlue(): Color { 
		
		return Color.fromHex(0xB0E0E6);

	}

	/**
	 * Color: 'Purple' HEX: #800080'
	 */
	static get Purple(): Color { 
		
		return Color.fromHex(0x800080);

	}

	/**
	 * Color: 'RebeccaPurple' HEX: #663399'
	 */
	static get RebeccaPurple(): Color { 
		
		return Color.fromHex(0x663399);

	}

	/**
	 * Color: 'Red' HEX: #FF0000'
	 */
	static get Red(): Color { 
		
		return Color.fromHex(0xFF0000);

	}

	/**
	 * Color: 'RosyBrown' HEX: #BC8F8F'
	 */
	static get RosyBrown(): Color { 
		
		return Color.fromHex(0xBC8F8F);

	}

	/**
	 * Color: 'RoyalBlue' HEX: #4169E1'
	 */
	static get RoyalBlue(): Color { 
		
		return Color.fromHex(0x4169E1);

	}

	/**
	 * Color: 'SaddleBrown' HEX: #8B4513'
	 */
	static get SaddleBrown(): Color { 
		
		return Color.fromHex(0x8B4513);

	}

	/**
	 * Color: 'Salmon' HEX: #FA8072'
	 */
	static get Salmon(): Color { 
		
		return Color.fromHex(0xFA8072);

	}

	/**
	 * Color: 'SandyBrown' HEX: #F4A460'
	 */
	static get SandyBrown(): Color { 
		
		return Color.fromHex(0xF4A460);

	}

	/**
	 * Color: 'SeaGreen' HEX: #2E8B57'
	 */
	static get SeaGreen(): Color { 
		
		return Color.fromHex(0x2E8B57);

	}

	/**
	 * Color: 'SeaShell' HEX: #FFF5EE'
	 */
	static get SeaShell(): Color { 
		
		return Color.fromHex(0xFFF5EE);

	}

	/**
	 * Color: 'Sienna' HEX: #A0522D'
	 */
	static get Sienna(): Color { 
		
		return Color.fromHex(0xA0522D);

	}

	/**
	 * Color: 'Silver' HEX: #C0C0C0'
	 */
	static get Silver(): Color { 
		
		return Color.fromHex(0xC0C0C0);

	}

	/**
	 * Color: 'SkyBlue' HEX: #87CEEB'
	 */
	static get SkyBlue(): Color { 
		
		return Color.fromHex(0x87CEEB);

	}

	/**
	 * Color: 'SlateBlue' HEX: #6A5ACD'
	 */
	static get SlateBlue(): Color { 
		
		return Color.fromHex(0x6A5ACD);

	}

	/**
	 * Color: 'SlateGray' HEX: #708090'
	 */
	static get SlateGray(): Color { 
		
		return Color.fromHex(0x708090);

	}

	/**
	 * Color: 'SlateGrey' HEX: #708090'
	 */
	static get SlateGrey(): Color { 
		
		return Color.fromHex(0x708090);

	}

	/**
	 * Color: 'Snow' HEX: #FFFAFA'
	 */
	static get Snow(): Color { 
		
		return Color.fromHex(0xFFFAFA);

	}

	/**
	 * Color: 'SpringGreen' HEX: #00FF7F'
	 */
	static get SpringGreen(): Color { 
		
		return Color.fromHex(0x00FF7F);

	}

	/**
	 * Color: 'SteelBlue' HEX: #4682B4'
	 */
	static get SteelBlue(): Color { 
		
		return Color.fromHex(0x4682B4);

	}

	/**
	 * Color: 'Tan' HEX: #D2B48C'
	 */
	static get Tan(): Color { 
		
		return Color.fromHex(0xD2B48C);

	}

	/**
	 * Color: 'Teal' HEX: #008080'
	 */
	static get Teal(): Color {
		
		return Color.fromHex(0x008080);

	}

	/**
	 * Color: 'Thistle' HEX: #D8BFD8'
	 */
	static get Thistle(): Color {
		
		return Color.fromHex(0xD8BFD8);

	}

	/**
	 * Color: 'Tomato' HEX: #FF6347'
	 */
	static get Tomato(): Color {

		return Color.fromHex(0xFF6347);

	}

	/**
	 * Color: 'Turquoise' HEX: #40E0D0'
	 */
	static get Turquoise(): Color {
		
		return Color.fromHex(0x40E0D0);

	}

	/**
	 * Color: 'Violet' HEX: #EE82EE'
	 */
	static get Violet(): Color {

		return Color.fromHex(0xEE82EE);

	}

	/**
	 * Color: 'Wheat' HEX: #F5DEB3'
	 */
	static get Wheat(): Color  {
		
		return Color.fromHex(0xF5DEB3);

	}

	/**
	 * Color: 'White' HEX: #FFFFFF'
	 */
	static get White(): Color {

		return Color.fromHex(0xFFFFFF);

	}

	/**
	 * Color: 'WhiteSmoke' HEX: #F5F5F5'
	 */
	static get WhiteSmoke(): Color { 

		return Color.fromHex(0xF5F5F5);

	}

	/**
	 * Color: 'Yellow' HEX: #FFFF00'
	 */
	static get Yellow(): Color {
		
		return Color.fromHex(0xFFFF00);

	}

	/**
	 * Color: 'YellowGreen' HEX: #9ACD32'
	 */
	static get YellowGreen(): Color {
		
		return Color.fromHex(0x9ACD32);

	}

	/**
	 * Regular expression for the hexidecimal match sequence
	 */
	private static _hexRegex: RegExp = /([a-fA-F\d]{2})/g;

	/**
	 * Shorthand regular expression for the hexidecimal match sequence
	 */
	private static _shortHexRegex: RegExp = /^#([a-fA-F\d])([a-fA-F\d])([a-fA-F\d])$/g;

	/**
	 * Constructs a color object with the provided hexidecimal value
	 * 
	 * @param {number} hex A 24 bit hexidecimal value. e.g: 0xFFFFFF
	 * @returns {Color}
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
	 * @returns {Color}
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
	 * @returns {Color}
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
      * @returns {Color}
      */
	static toHexString(red: number, green: number, blue: number, alpha?: number): string {

		let hex = "";

		if (alpha === void 0) {

			const value = ((red << 16) + (green << 8) + blue).toString(16);
			hex = "#" + conversions.padLeft(value, "0", 6);

		} else {

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
	static lerp(from: Color, to: Color, increment: number): Color {

		if (utils.isNullOrUndefined(from)) {

			throw new Error("The initial start color was not provided");

		}

		if (utils.isNullOrUndefined(to)) {

			throw new Error("The finally transition color was not provided!");

		}

		if(!utils.isNumber(increment)){

			increment = 1;

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
	 * 
	 * @private
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
		this.alpha = alpha;
		this._hex = 0;

		if (utils.isUndefined(green) && utils.isUndefined(blue)) {

			// only default to the first parameter
			this.setHex(red);

		} else {

			this.setRGB(Number(red), Number(green), Number(blue));

		}
		
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
	setHex(hex: number | string): Color {

		let color = null;
		let colorHex = utils.isNumber(hex) ? hex.toString(16) : (utils.isString(hex) ? hex as string : "#000").replace("0x", "");

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

		let group: Array<any> = [];
		let length: number = 3;

		if (results.length >= 4) {

			length = 4;

		}

		// iterate through the results, skipping the first indexed position
		let i = 0;
		for (; i < length; i++) {

			let hex: number = 0;
			const result: any = results[i];
			if (!utils.isNullOrUndefined(result)) {

				// convert to decimal
				const value: number = parseInt(result, 16);
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
	lerp(to: Color, increment: number): Color {

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
	toString(hexidecimal?: boolean): string {

		const { red, green, blue, alpha } = this;

		if (hexidecimal === true) {

			return Color.toHexString(red, green, blue, alpha);

		}

		return `rgba(${red},${green},${blue},${alpha})`;

	}

	private _updateHex(): void {

		const { red, green, blue, alpha } = this;
		this._hex = (red << 24) + (green << 16) + (blue << 8) + (alpha);

	}

	/**
	 * Js removes any beginning zeros once converted to hexidecimal, therefore check to see if it must be added back
	 * 
	 * @private
	 * @param {String} value 
	 */
	private static addZeroPadding(value: string): string {

		return (value.length === 2 || value.length === 5 || value.length === 7) ? ("0" + value) : value;

	}

}
