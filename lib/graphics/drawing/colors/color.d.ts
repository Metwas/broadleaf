/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the data types
 */
declare class Color {
    /**
     * Color: 'AliceBlue' HEX: '0xF0F8FF'
     */
    static AliceBlue: Color;
    /**
     * Color: 'AntiqueWhite' HEX: '0xFAEBD7'
     */
    static AntiqueWhite: Color;
    /**
     * Color: 'Aqua' HEX: '0x00FFFF'
     */
    static Aqua: Color;
    /**
     * Color: 'AquaMarine' HEX: '0x7FFFD4'
     */
    static AquaMarine: Color;
    /**
     * Color: 'Azure' HEX: '0xF0FFFF'
     */
    static Azure: Color;
    /**
     * Color: 'Beige' HEX: '0xF5F5DC'
     */
    static Beige: Color;
    /**
     * Color: 'Bisque' HEX: '0xFFE4C4'
     */
    static Bisque: Color;
    /**
     * Color: 'Black' HEX: '0x000000'
     */
    static Black: Color;
    /**
     * Color: 'BlanchedAlmond' HEX: '0xFFEBCD'
     */
    static BlanchedAlmond: Color;
    /**
     * Color: 'Blue' HEX: '0x0000FF'
     */
    static Blue: Color;
    /**
     * Color: 'blueViolet' HEX: '0x8A2BE2'
     */
    static BlueViolet: Color;
    /**
     * Color: 'Brown' HEX: '0xA52A2A'
     */
    static Brown: Color;
    /**
     * Color: 'Burlywood' HEX: '0xDEB887'
     */
    static Burlywood: Color;
    /**
     * Color: 'CadetBlue' HEX: '0x5F9EA0'
     */
    static CadetBlue: Color;
    /**
     * Color: 'Chartreuse' HEX: '0x7FFF00'
     */
    static Chartreuse: Color;
    /**
     * Color: 'Chocolate' HEX: '0xD2691E'
     */
    static Chocolate: Color;
    /**
     * Color: 'Coral' HEX: '0xFF7F50'
     */
    static Coral: Color;
    /**
     * Color: 'CornFlowerBlue' HEX: '0x6495ED'
     */
    static CornFlowerBlue: Color;
    /**
     * Color: 'Cornsilk' HEX: '0xFFF8DC'
     */
    static Cornsilk: Color;
    /**
     * Color: 'Crimson' HEX: '0xDC143C'
     */
    static Crimson: Color;
    /**
     * Color: 'Cyan' HEX: '0x00FFFF'
     */
    static Cyan: Color;
    /**
     * Color: 'DarkBlue' HEX: '0x00008B'
     */
    static DarkBlue: Color;
    /**
     * Color: 'DarkCyan' HEX: '0x008B8B'
     */
    static DarkCyan: Color;
    /**
     * Color: 'DarkGoldenRod' HEX: '0xB8860B'
     */
    static DarkGoldenRod: Color;
    /**
     * Color: 'DarkGray' HEX: '0xA9A9A9'
     */
    static DarkGray: Color;
    /**
     * Color: 'DarkGreen' HEX: '0x006400'
     */
    static DarkGreen: Color;
    /**
     * Color: 'DarkKhaki' HEX: '0xBDB76B'
     */
    static DarkKhaki: Color;
    /**
     * Color: 'darkGrey' HEX: '0xA9A9A9'
     */
    static darkGrey: Color;
    /**
     * Color: 'Darkgray' HEX: '0x000000'
     */
    static Darkgray: Color;
    /**
     * Color: 'DarkMagenta' HEX: '0x8B008B'
     */
    static DarkMagenta: Color;
    /**
     * Color: 'DarkOliveGreen' HEX: '0x556B2F'
     */
    static DarkOliveGreen: Color;
    /**
     * Color: 'DarkOrange' HEX: '0xFF8C00'
     */
    static DarkOrange: Color;
    /**
     * Color: 'DarkOrchid' HEX: '0x9932CC'
     */
    static DarkOrchid: Color;
    /**
     * Color: 'DarkRed' HEX: '0x8B0000'
     */
    static DarkRed: Color;
    /**
     * Color: 'DarkSalmon' HEX: '0xE9967A'
     */
    static DarkSalmon: Color;
    /**
     * Color: 'DarkSeaGreen' HEX: '0x8FBC8F'
     */
    static DarkSeaGreen: Color;
    /**
     * Color: 'DarkSlateBlue' HEX: '0x483D8B'
     */
    static DarkSlateBlue: Color;
    /**
     * Color: 'DarkSlateGray' HEX: '0x2F4F4F'
     */
    static DarkSlateGray: Color;
    /**
     * Color: 'DarkSlateGrey' HEX: '0x2F4F4F'
     */
    static DarkSlateGrey: Color;
    /**
     * Color: 'DarkTurquoise' HEX: '0x00CED1'
     */
    static DarkTurquoise: Color;
    /**
     * Color: 'DarkViolet' HEX: '0x9400D3'
     */
    static DarkViolet: Color;
    /**
     * Color: 'DeepPink' HEX: '0xFF1493'
     */
    static DeepPink: Color;
    /**
     * Color: 'DeepSkyBlue' HEX: '0x00BFFF'
     */
    static DeepSkyBlue: Color;
    /**
     * Color: 'DimGray' HEX: '0x696969'
     */
    static DimGray: Color;
    /**
     * Color: 'DimGrey' HEX: '0x696969'
     */
    static DimGrey: Color;
    /**
     * Color: 'DodgerBlue' HEX: '0x1E90FF'
     */
    static DodgerBlue: Color;
    /**
     * Color: 'FireBrick' HEX: '0xB22222'
     */
    static FireBrick: Color;
    /**
     * Color: 'FloralWhite' HEX: '0xFFFAF0'
     */
    static FloralWhite: Color;
    /**
     * Color: 'ForestGreen' HEX: '0x228B22'
     */
    static ForestGreen: Color;
    /**
     * Color: 'Fuchsia' HEX: '0xFF00FF'
     */
    static Fuchsia: Color;
    /**
     * Color: 'Gainsboro' HEX: '0xDCDCDC'
     */
    static Gainsboro: Color;
    /**
     * Color: 'GhostWhite' HEX: '0xF8F8FF'
     */
    static GhostWhite: Color;
    /**
     * Color: 'Gold' HEX: '0xFFD700'
     */
    static Gold: Color;
    /**
     * Color: 'GoldenRod' HEX: '0xDAA520'
     */
    static GoldenRod: Color;
    /**
     * Color: 'Gray' HEX: '0x808080'
     */
    static Gray: Color;
    /**
     * Color: 'Green' HEX: '0x008000'
     */
    static Green: Color;
    /**
     * Color: 'GreenYellow' HEX: '0xADFF2F'
     */
    static GreenYellow: Color;
    /**
     * Color: 'Grey' HEX: '0x808080'
     */
    static Grey: Color;
    /**
     * Color: 'HoneyDew' HEX: '0xF0FFF0'
     */
    static HoneyDew: Color;
    /**
     * Color: 'HotPink' HEX: '0xFF69B4'
     */
    static HotPink: Color;
    /**
     * Color: 'IndianRed' HEX: '0xCD5C5C'
     */
    static IndianRed: Color;
    /**
     * Color: 'Indigo' HEX: '0x4B0082'
     */
    static Indigo: Color;
    /**
     * Color: 'Ivory' HEX: '0xFFFFF0'
     */
    static Ivory: Color;
    /**
     * Color: 'Khaki' HEX: '0xF0E68C'
     */
    static Khaki: Color;
    /**
     * Color: 'Lavender' HEX: '0xE6E6FA'
     */
    static Lavender: Color;
    /**
     * Color: 'LavenderBlush' HEX: '0xFFF0F5'
     */
    static LavenderBlush: Color;
    /**
     * Color: 'LawnGreen' HEX: '0x7CFC00'
     */
    static LawnGreen: Color;
    /**
     * Color: 'LightBlue' HEX: '0xADD8E6'
     */
    static LightBlue: Color;
    /**
     * Color: 'LightCoral' HEX: '0xF08080'
     */
    static LightCoral: Color;
    /**
     * Color: 'LightCyan' HEX: '0xE0FFFF'
     */
    static LightCyan: Color;
    /**
     * Color: 'LightGray' HEX: '0xD3D3D3'
     */
    static LightGray: Color;
    /**
     * Color: 'LightGreen' HEX: '0x90EE90'
     */
    static LightGreen: Color;
    /**
     * Color: 'LightGrey' HEX: '0xD3D3D3'
     */
    static LightGrey: Color;
    /**
     * Color: 'LightPink' HEX: '0xFFB6C1'
     */
    static LightPink: Color;
    /**
     * Color: 'LightSalmon' HEX: '0xFFA07A'
     */
    static LightSalmon: Color;
    /**
     * Color: 'LightSeaGreen' HEX: '0x20B2AA'
     */
    static LightSeaGreen: Color;
    /**
     * Color: 'LightSkyBlue' HEX: '0x87CEFA'
     */
    static LightSkyBlue: Color;
    /**
     * Color: 'LightSlateGray' HEX: '0x778899'
     */
    static LightSlateGray: Color;
    /**
     * Color: 'LightSlateGrey' HEX: '0x778899'
     */
    static LightSlateGrey: Color;
    /**
     * Color: 'LightSteelBlue' HEX: '0xB0C4DE'
     */
    static LightSteelBlue: Color;
    /**
     * Color: 'LightYellow' HEX: '0xFFFFE0'
     */
    static LightYellow: Color;
    /**
     * Color: 'Lime' HEX: '0x00FF00'
     */
    static Lime: Color;
    /**
     * Color: 'LimeGreen' HEX: '0x32CD32'
     */
    static LimeGreen: Color;
    /**
     * Color: 'Linen' HEX: '0xFAF0E6'
     */
    static Linen: Color;
    /**
     * Color: 'Magenta' HEX: '0xFF00FF'
     */
    static Magenta: Color;
    /**
     * Color: 'Maroon' HEX: '0x800000'
     */
    static Maroon: Color;
    /**
     * Color: 'MediumAquaMarine' HEX: '0x66CDAA'
     */
    static MediumAquaMarine: Color;
    /**
     * Color: 'MediumBlue' HEX: '0x0000CD'
     */
    static MediumBlue: Color;
    /**
     * Color: 'MediumOrchid' HEX: '0xBA55D3'
     */
    static MediumOrchid: Color;
    /**
     * Color: 'MediumPurple' HEX: '0x9370DB'
     */
    static MediumPurple: Color;
    /**
     * Color: 'MediumSeaGreen' HEX: '0x3CB371'
     */
    static MediumSeaGreen: Color;
    /**
     * Color: 'MediumSlateBlue' HEX: '0x7B68EE'
     */
    static MediumSlateBlue: Color;
    /**
     * Color: 'MediumSpringGreen' HEX: '0x00FA9A'
     */
    static MediumSpringGreen: Color;
    /**
     * Color: 'MediumTurquoise' HEX: '0x48D1CC'
     */
    static MediumTurquoise: Color;
    /**
     * Color: 'MediumVioletRed' HEX: '0xC71585'
     */
    static MediumVioletRed: Color;
    /**
     * Color: 'MidnightBlue' HEX: '0x191970'
     */
    static MidnightBlue: Color;
    /**
     * Color: 'MintCream' HEX: '0xF5FFFA'
     */
    static MintCream: Color;
    /**
     * Color: 'MistyRose' HEX: '0xFFE4E1'
     */
    static MistyRose: Color;
    /**
     * Color: 'Moccasin' HEX: '0xFFE4B5'
     */
    static Moccasin: Color;
    /**
     * Color: 'NavajoWhite' HEX: '0xFFDEAD'
     */
    static NavajoWhite: Color;
    /**
     * Color: 'Navy' HEX: '0x000080'
     */
    static Navy: Color;
    /**
     * Color: 'OldLace' HEX: '0xFDF5E6'
     */
    static OldLace: Color;
    /**
     * Color: 'Olive' HEX: '0x808000'
     */
    static Olive: Color;
    /**
     * Color: 'OliveDrab' HEX: '0x6B8E23'
     */
    static OliveDrab: Color;
    /**
     * Color: 'Orange' HEX: '0xFFA500'
     */
    static Orange: Color;
    /**
     * Color: 'OrangeRed' HEX: '0xFF4500'
     */
    static OrangeRed: Color;
    /**
     * Color: 'Orchid' HEX: '0xDA70D6'
     */
    static Orchid: Color;
    /**
     * Color: 'PaleGoldenRod' HEX: '0xEEE8AA'
     */
    static PaleGoldenRod: Color;
    /**
     * Color: 'PaleGreen' HEX: '0x98FB98'
     */
    static PaleGreen: Color;
    /**
     * Color: 'PaleTurquoise' HEX: '0xAFEEEE'
     */
    static PaleTurquoise: Color;
    /**
     * Color: 'PaleVioletRed' HEX: '0xDB7093'
     */
    static PaleVioletRed: Color;
    /**
     * Color: 'PapayaWhip' HEX: '0xFFDAB9'
     */
    static PapayaWhip: Color;
    /**
     * Color: 'PeachPuff' HEX: '0xFFEFD5'
     */
    static PeachPuff: Color;
    /**
     * Color: 'Peru' HEX: '0xCD853F'
     */
    static Peru: Color;
    /**
     * Color: 'Pink' HEX: '0xFFC0CB'
     */
    static Pink: Color;
    /**
     * Color: 'Plum' HEX: '0xDDA0DD'
     */
    static Plum: Color;
    /**
     * Color: 'PowderBlue' HEX: '0xB0E0E6'
     */
    static PowderBlue: Color;
    /**
     * Color: 'Purple' HEX: '0x800080'
     */
    static Purple: Color;
    /**
     * Color: 'RebeccaPurple' HEX: '0x663399'
     */
    static RebeccaPurple: Color;
    /**
     * Color: 'Red' HEX: '0xFF0000'
     */
    static Red: Color;
    /**
     * Color: 'RosyBrown' HEX: '0xBC8F8F'
     */
    static RosyBrown: Color;
    /**
     * Color: 'RoyalBlue' HEX: '0x4169E1'
     */
    static RoyalBlue: Color;
    /**
     * Color: 'SaddleBrown' HEX: '0x8B4513'
     */
    static SaddleBrown: Color;
    /**
     * Color: 'Salmon' HEX: '0xFA8072'
     */
    static Salmon: Color;
    /**
     * Color: 'SandyBrown' HEX: '0xF4A460'
     */
    static SandyBrown: Color;
    /**
     * Color: 'SeaGreen' HEX: '0x2E8B57'
     */
    static SeaGreen: Color;
    /**
     * Color: 'SeaShell' HEX: '0xFFF5EE'
     */
    static SeaShell: Color;
    /**
     * Color: 'Sienna' HEX: '0xA0522D'
     */
    static Sienna: Color;
    /**
     * Color: 'Silver' HEX: '0xC0C0C0'
     */
    static Silver: Color;
    /**
     * Color: 'SkyBlue' HEX: '0x87CEEB'
     */
    static SkyBlue: Color;
    /**
     * Color: 'SlateBlue' HEX: '0x6A5ACD'
     */
    static SlateBlue: Color;
    /**
     * Color: 'SlateGray' HEX: '0x708090'
     */
    static SlateGray: Color;
    /**
     * Color: 'SlateGrey' HEX: '0x708090'
     */
    static SlateGrey: Color;
    /**
     * Color: 'Snow' HEX: '0xFFFAFA'
     */
    static Snow: Color;
    /**
     * Color: 'SpringGreen' HEX: '0x00FF7F'
     */
    static SpringGreen: Color;
    /**
     * Color: 'SteelBlue' HEX: '0x4682B4'
     */
    static SteelBlue: Color;
    /**
     * Color: 'Tan' HEX: '0xD2B48C'
     */
    static Tan: Color;
    /**
     * Color: 'Teal' HEX: '0x008080'
     */
    static Teal: Color;
    /**
     * Color: 'Thistle' HEX: '0xD8BFD8'
     */
    static Thistle: Color;
    /**
     * Color: 'Tomato' HEX: '0xFF6347'
     */
    static Tomato: Color;
    /**
     * Color: 'Turquoise' HEX: '0x40E0D0'
     */
    static Turquoise: Color;
    /**
     * Color: 'Violet' HEX: '0xEE82EE'
     */
    static Violet: Color;
    /**
     * Color: 'Wheat' HEX: '0xF5DEB3'
     */
    static Wheat: Color;
    /**
     * Color: 'White' HEX: '0xFFFFFF'
     */
    static White: Color;
    /**
     * Color: 'WhiteSmoke' HEX: '0xF5F5F5'
     */
    static WhiteSmoke: Color;
    /**
     * Color: 'Yellow' HEX: '0xFFFF00'
     */
    static Yellow: Color;
    /**
     * Color: 'YellowGreen' HEX: '0x9ACD32'
     */
    static YellowGreen: Color;
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number} hex A 24 bit hexidecimal value. e.g: 0xFFFFFF
     */
    static fromHex(hex: number): Color;
    /**
     * Constructs a color object with the provided RGB values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     */
    static fromRGB(red: number, green: number, blue: number): Color;
    /**
     * Constructs a color object with the provided RGBA values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     */
    static fromRGBA(red: number, green: number, blue: number, alpha: number): Color;
    /**
     * An arbitary name for this color instance
     */
    name: string;
    /**
     * The red channel
     */
    red: number;
    /**
     * The green channel
     */
    green: number;
    /**
     * The blue channel
     */
    blue: number;
    /**
     * The alpha / transparency channel
     */
    alpha: number;
    /**
     * Constructs a color object with the provided rgb values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
     * @returns {Color} Color
     */
    constructor(red: number | string, green?: number, blue?: number, alpha?: number);
    /**
     * Constructs a color object with the provided RGB values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @returns {Color} Color
     */
    setRGB(red: number, green: number, blue: number): Color;
    /**
     * Constructs a color object with the provided RGBA values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
     * @returns {Color} Color
     */
    setRGBA(red: number, green: number, blue: number, alpha: number): Color;
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number | string} hex A 24 bit hexidecimal value or a string representation. e.g: Number: 0xFFFFFF, string: #FFFFFF
     * @returns {Color} Color
     */
    setHex(hex: number | string): Color;
    /**
      *
      *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
      * @returns {Color} Color
      */
    RGBToHex(red: number, green: number, blue: number, alpha?: number): string;
}
export default Color;
