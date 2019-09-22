/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the base types
 */
declare class Color {
    /**
     * Color: 'AliceBlue' HEX: '0xF0F8FF'
     */
    static readonly AliceBlue: Color;
    /**
     * Color: 'AntiqueWhite' HEX: '0xFAEBD7'
     */
    static readonly AntiqueWhite: Color;
    /**
     * Color: 'Aqua' HEX: '0x00FFFF'
     */
    static readonly Aqua: Color;
    /**
     * Color: 'AquaMarine' HEX: '0x7FFFD4'
     */
    static readonly AquaMarine: Color;
    /**
     * Color: 'Azure' HEX: '0xF0FFFF'
     */
    static readonly Azure: Color;
    /**
     * Color: 'Beige' HEX: '0xF5F5DC'
     */
    static readonly Beige: Color;
    /**
     * Color: 'Bisque' HEX: '0xFFE4C4'
     */
    static readonly Bisque: Color;
    /**
     * Color: 'Black' HEX: '0x000000'
     */
    static readonly Black: Color;
    /**
     * Color: 'BlanchedAlmond' HEX: '0xFFEBCD'
     */
    static readonly BlanchedAlmond: Color;
    /**
     * Color: 'Blue' HEX: '0x0000FF'
     */
    static readonly Blue: Color;
    /**
     * Color: 'blueViolet' HEX: '0x8A2BE2'
     */
    static readonly blueViolet: Color;
    /**
     * Color: 'Brown' HEX: '0xA52A2A'
     */
    static readonly Brown: Color;
    /**
     * Color: 'Burlywood' HEX: '0xDEB887'
     */
    static readonly Burlywood: Color;
    /**
     * Color: 'CadetBlue' HEX: '0x5F9EA0'
     */
    static readonly CadetBlue: Color;
    /**
     * Color: 'Chartreuse' HEX: '0x7FFF00'
     */
    static readonly Chartreuse: Color;
    /**
     * Color: 'Chocolate' HEX: '0xD2691E'
     */
    static readonly Chocolate: Color;
    /**
     * Color: 'Coral' HEX: '0xFF7F50'
     */
    static readonly Coral: Color;
    /**
     * Color: 'CornFlowerBlue' HEX: '0x6495ED'
     */
    static readonly CornFlowerBlue: Color;
    /**
     * Color: 'Cornsilk' HEX: '0xFFF8DC'
     */
    static readonly Cornsilk: Color;
    /**
     * Color: 'Crimson' HEX: '0xDC143C'
     */
    static readonly Crimson: Color;
    /**
     * Color: 'Cyan' HEX: '0x00FFFF'
     */
    static readonly Cyan: Color;
    /**
     * Color: 'DarkBlue' HEX: '0x00008B'
     */
    static readonly DarkBlue: Color;
    /**
     * Color: 'DarkCyan' HEX: '0x008B8B'
     */
    static readonly DarkCyan: Color;
    /**
     * Color: 'DarkGoldenRod' HEX: '0xB8860B'
     */
    static readonly DarkGoldenRod: Color;
    /**
     * Color: 'DarkGray' HEX: '0xA9A9A9'
     */
    static readonly DarkGray: Color;
    /**
     * Color: 'DarkGreen' HEX: '0x006400'
     */
    static readonly DarkGreen: Color;
    /**
     * Color: 'DarkKhaki' HEX: '0xBDB76B'
     */
    static readonly DarkKhaki: Color;
    /**
     * Color: 'darkGrey' HEX: '0xA9A9A9'
     */
    static readonly darkGrey: Color;
    /**
     * Color: 'Darkgray' HEX: '0xA9A9A9'
     */
    static readonly Darkgray: Color;
    /**
     * Color: 'DarkMagenta' HEX: '0x8B008B'
     */
    static readonly DarkMagenta: Color;
    /**
     * Color: 'DarkOliveGreen' HEX: '0x556B2F'
     */
    static readonly DarkOliveGreen: Color;
    /**
     * Color: 'DarkOrange' HEX: '0xFF8C00'
     */
    static readonly DarkOrange: Color;
    /**
     * Color: 'DarkOrchid' HEX: '0x9932CC'
     */
    static readonly DarkOrchid: Color;
    /**
     * Color: 'DarkRed' HEX: '0x8B0000'
     */
    static readonly DarkRed: Color;
    /**
     * Color: 'DarkSalmon' HEX: '0xE9967A'
     */
    static readonly DarkSalmon: Color;
    /**
     * Color: 'DarkSeaGreen' HEX: '0x8FBC8F'
     */
    static readonly DarkSeaGreen: Color;
    /**
     * Color: 'DarkSlateBlue' HEX: '0x483D8B'
     */
    static readonly DarkSlateBlue: Color;
    /**
     * Color: 'DarkSlateGray' HEX: '0x2F4F4F'
     */
    static readonly DarkSlateGray: Color;
    /**
     * Color: 'DarkSlateGrey' HEX: '0x2F4F4F'
     */
    static readonly DarkSlateGrey: Color;
    /**
     * Color: 'DarkTurquoise' HEX: '0x00CED1'
     */
    static readonly DarkTurquoise: Color;
    /**
     * Color: 'DarkViolet' HEX: '0x9400D3'
     */
    static readonly DarkViolet: Color;
    /**
     * Color: 'DeepPink' HEX: '0xFF1493'
     */
    static readonly DeepPink: Color;
    /**
     * Color: 'DeepSkyBlue' HEX: '0x00BFFF'
     */
    static readonly DeepSkyBlue: Color;
    /**
     * Color: 'DimGray' HEX: '0x696969'
     */
    static readonly DimGray: Color;
    /**
     * Color: 'DimGrey' HEX: '0x696969'
     */
    static readonly DimGrey: Color;
    /**
     * Color: 'DodgerBlue' HEX: '0x1E90FF'
     */
    static readonly DodgerBlue: Color;
    /**
     * Color: 'FireBrick' HEX: '0xB22222'
     */
    static readonly FireBrick: Color;
    /**
     * Color: 'FloralWhite' HEX: '0xFFFAF0'
     */
    static readonly FloralWhite: Color;
    /**
     * Color: 'ForestGreen' HEX: '0x228B22'
     */
    static readonly ForestGreen: Color;
    /**
     * Color: 'Fuchsia' HEX: '0xFF00FF'
     */
    static readonly Fuchsia: Color;
    /**
     * Color: 'Gainsboro' HEX: '0xDCDCDC'
     */
    static readonly Gainsboro: Color;
    /**
     * Color: 'GhostWhite' HEX: '0xF8F8FF'
     */
    static readonly GhostWhite: Color;
    /**
     * Color: 'Gold' HEX: '0xFFD700'
     */
    static readonly Gold: Color;
    /**
     * Color: 'GoldenRod' HEX: '0xDAA520'
     */
    static readonly GoldenRod: Color;
    /**
     * Color: 'Gray' HEX: '0x808080'
     */
    static readonly Gray: Color;
    /**
     * Color: 'Green' HEX: '0x008000'
     */
    static readonly Green: Color;
    /**
     * Color: 'GreenYellow' HEX: '0xADFF2F'
     */
    static readonly GreenYellow: Color;
    /**
     * Color: 'Grey' HEX: '0x808080'
     */
    static readonly Grey: Color;
    /**
     * Color: 'HoneyDew' HEX: '0xF0FFF0'
     */
    static readonly HoneyDew: Color;
    /**
     * Color: 'HotPink' HEX: '0xFF69B4'
     */
    static readonly HotPink: Color;
    /**
     * Color: 'IndianRed' HEX: '0xCD5C5C'
     */
    static readonly IndianRed: Color;
    /**
     * Color: 'Indigo' HEX: '0x4B0082'
     */
    static readonly Indigo: Color;
    /**
     * Color: 'Ivory' HEX: '0xFFFFF0'
     */
    static readonly Ivory: Color;
    /**
     * Color: 'Khaki' HEX: '0xF0E68C'
     */
    static readonly Khaki: Color;
    /**
     * Color: 'Lavender' HEX: '0xE6E6FA'
     */
    static readonly Lavender: Color;
    /**
     * Color: 'LavenderBlush' HEX: '0xFFF0F5'
     */
    static readonly LavenderBlush: Color;
    /**
     * Color: 'LawnGreen' HEX: '0x7CFC00'
     */
    static readonly LawnGreen: Color;
    /**
     * Color: 'LightBlue' HEX: '0xADD8E6'
     */
    static readonly LightBlue: Color;
    /**
     * Color: 'LightCoral' HEX: '0xF08080'
     */
    static readonly LightCoral: Color;
    /**
     * Color: 'LightCyan' HEX: '0xE0FFFF'
     */
    static readonly LightCyan: Color;
    /**
     * Color: 'LightGray' HEX: '0xD3D3D3'
     */
    static readonly LightGray: Color;
    /**
     * Color: 'LightGreen' HEX: '0x90EE90'
     */
    static readonly LightGreen: Color;
    /**
     * Color: 'LightGrey' HEX: '0xD3D3D3'
     */
    static readonly LightGrey: Color;
    /**
     * Color: 'LightPink' HEX: '0xFFB6C1'
     */
    static readonly LightPink: Color;
    /**
     * Color: 'LightSalmon' HEX: '0xFFA07A'
     */
    static readonly LightSalmon: Color;
    /**
     * Color: 'LightSeaGreen' HEX: '0x20B2AA'
     */
    static readonly LightSeaGreen: Color;
    /**
     * Color: 'LightSkyBlue' HEX: '0x87CEFA'
     */
    static readonly LightSkyBlue: Color;
    /**
     * Color: 'LightSlateGray' HEX: '0x778899'
     */
    static readonly LightSlateGray: Color;
    /**
     * Color: 'LightSlateGrey' HEX: '0x778899'
     */
    static readonly LightSlateGrey: Color;
    /**
     * Color: 'LightSteelBlue' HEX: '0xB0C4DE'
     */
    static readonly LightSteelBlue: Color;
    /**
     * Color: 'LightYellow' HEX: '0xFFFFE0'
     */
    static readonly LightYellow: Color;
    /**
     * Color: 'Lime' HEX: '0x00FF00'
     */
    static readonly Lime: Color;
    /**
     * Color: 'LimeGreen' HEX: '0x32CD32'
     */
    static readonly LimeGreen: Color;
    /**
     * Color: 'Linen' HEX: '0xFAF0E6'
     */
    static readonly Linen: Color;
    /**
     * Color: 'Magenta' HEX: '0xFF00FF'
     */
    static readonly Magenta: Color;
    /**
     * Color: 'Maroon' HEX: '0x800000'
     */
    static readonly Maroon: Color;
    /**
     * Color: 'MediumAquaMarine' HEX: '0x66CDAA'
     */
    static readonly MediumAquaMarine: Color;
    /**
     * Color: 'MediumBlue' HEX: '0x0000CD'
     */
    static readonly MediumBlue: Color;
    /**
     * Color: 'MediumOrchid' HEX: '0xBA55D3'
     */
    static readonly MediumOrchid: Color;
    /**
     * Color: 'MediumPurple' HEX: '0x9370DB'
     */
    static readonly MediumPurple: Color;
    /**
     * Color: 'MediumSeaGreen' HEX: '0x3CB371'
     */
    static readonly MediumSeaGreen: Color;
    /**
     * Color: 'MediumSlateBlue' HEX: '0x7B68EE'
     */
    static readonly MediumSlateBlue: Color;
    /**
     * Color: 'MediumSpringGreen' HEX: '0x00FA9A'
     */
    static readonly MediumSpringGreen: Color;
    /**
     * Color: 'MediumTurquoise' HEX: '0x48D1CC'
     */
    static readonly MediumTurquoise: Color;
    /**
     * Color: 'MediumVioletRed' HEX: '0xC71585'
     */
    static readonly MediumVioletRed: Color;
    /**
     * Color: 'MidnightBlue' HEX: '0x191970'
     */
    static readonly MidnightBlue: Color;
    /**
     * Color: 'MintCream' HEX: '0xF5FFFA'
     */
    static readonly MintCream: Color;
    /**
     * Color: 'MistyRose' HEX: '0xFFE4E1'
     */
    static readonly MistyRose: Color;
    /**
     * Color: 'Moccasin' HEX: '0xFFE4B5'
     */
    static readonly Moccasin: Color;
    /**
     * Color: 'NavajoWhite' HEX: '0xFFDEAD'
     */
    static readonly NavajoWhite: Color;
    /**
     * Color: 'Navy' HEX: '0x000080'
     */
    static readonly Navy: Color;
    /**
     * Color: 'OldLace' HEX: '0xFDF5E6'
     */
    static readonly OldLace: Color;
    /**
     * Color: 'Olive' HEX: '0x808000'
     */
    static readonly Olive: Color;
    /**
     * Color: 'OliveDrab' HEX: '0x6B8E23'
     */
    static readonly OliveDrab: Color;
    /**
     * Color: 'Orange' HEX: '0xFFA500'
     */
    static readonly Orange: Color;
    /**
     * Color: 'OrangeRed' HEX: '0xFF4500'
     */
    static readonly OrangeRed: Color;
    /**
     * Color: 'Orchid' HEX: '0xDA70D6'
     */
    static readonly Orchid: Color;
    /**
     * Color: 'PaleGoldenRod' HEX: '0xEEE8AA'
     */
    static readonly PaleGoldenRod: Color;
    /**
     * Color: 'PaleGreen' HEX: '0x98FB98'
     */
    static readonly PaleGreen: Color;
    /**
     * Color: 'PaleTurquoise' HEX: '0xAFEEEE'
     */
    static readonly PaleTurquoise: Color;
    /**
     * Color: 'PaleVioletRed' HEX: '0xDB7093'
     */
    static readonly PaleVioletRed: Color;
    /**
     * Color: 'PapayaWhip' HEX: '0xFFDAB9'
     */
    static readonly PapayaWhip: Color;
    /**
     * Color: 'PeachPuff' HEX: '0xFFEFD5'
     */
    static readonly PeachPuff: Color;
    /**
     * Color: 'Peru' HEX: '0xCD853F'
     */
    static readonly Peru: Color;
    /**
     * Color: 'Pink' HEX: '0xFFC0CB'
     */
    static readonly Pink: Color;
    /**
     * Color: 'Plum' HEX: '0xDDA0DD'
     */
    static readonly Plum: Color;
    /**
     * Color: 'PowderBlue' HEX: '0xB0E0E6'
     */
    static readonly PowderBlue: Color;
    /**
     * Color: 'Purple' HEX: '0x800080'
     */
    static readonly Purple: Color;
    /**
     * Color: 'RebeccaPurple' HEX: '0x663399'
     */
    static readonly RebeccaPurple: Color;
    /**
     * Color: 'Red' HEX: '0xFF0000'
     */
    static readonly Red: Color;
    /**
     * Color: 'RosyBrown' HEX: '0xBC8F8F'
     */
    static readonly RosyBrown: Color;
    /**
     * Color: 'RoyalBlue' HEX: '0x4169E1'
     */
    static readonly RoyalBlue: Color;
    /**
     * Color: 'SaddleBrown' HEX: '0x8B4513'
     */
    static readonly SaddleBrown: Color;
    /**
     * Color: 'Salmon' HEX: '0xFA8072'
     */
    static readonly Salmon: Color;
    /**
     * Color: 'SandyBrown' HEX: '0xF4A460'
     */
    static readonly SandyBrown: Color;
    /**
     * Color: 'SeaGreen' HEX: '0x2E8B57'
     */
    static readonly SeaGreen: Color;
    /**
     * Color: 'SeaShell' HEX: '0xFFF5EE'
     */
    static readonly SeaShell: Color;
    /**
     * Color: 'Sienna' HEX: '0xA0522D'
     */
    static readonly Sienna: Color;
    /**
     * Color: 'Silver' HEX: '0xC0C0C0'
     */
    static readonly Silver: Color;
    /**
     * Color: 'SkyBlue' HEX: '0x87CEEB'
     */
    static readonly SkyBlue: Color;
    /**
     * Color: 'SlateBlue' HEX: '0x6A5ACD'
     */
    static readonly SlateBlue: Color;
    /**
     * Color: 'SlateGray' HEX: '0x708090'
     */
    static readonly SlateGray: Color;
    /**
     * Color: 'SlateGrey' HEX: '0x708090'
     */
    static readonly SlateGrey: Color;
    /**
     * Color: 'Snow' HEX: '0xFFFAFA'
     */
    static readonly Snow: Color;
    /**
     * Color: 'SpringGreen' HEX: '0x00FF7F'
     */
    static readonly SpringGreen: Color;
    /**
     * Color: 'SteelBlue' HEX: '0x4682B4'
     */
    static readonly SteelBlue: Color;
    /**
     * Color: 'Tan' HEX: '0xD2B48C'
     */
    static readonly Tan: Color;
    /**
     * Color: 'Teal' HEX: '0x008080'
     */
    static readonly Teal: Color;
    /**
     * Color: 'Thistle' HEX: '0xD8BFD8'
     */
    static readonly Thistle: Color;
    /**
     * Color: 'Tomato' HEX: '0xFF6347'
     */
    static readonly Tomato: Color;
    /**
     * Color: 'Turquoise' HEX: '0x40E0D0'
     */
    static readonly Turquoise: Color;
    /**
     * Color: 'Violet' HEX: '0xEE82EE'
     */
    static readonly Violet: Color;
    /**
     * Color: 'Wheat' HEX: '0xF5DEB3'
     */
    static readonly Wheat: Color;
    /**
     * Color: 'White' HEX: '0xFFFFFF'
     */
    static readonly White: Color;
    /**
     * Color: 'WhiteSmoke' HEX: '0xF5F5F5'
     */
    static readonly WhiteSmoke: Color;
    /**
     * Color: 'Yellow' HEX: '0xFFFF00'
     */
    static readonly Yellow: Color;
    /**
     * Color: 'YellowGreen' HEX: '0x9ACD32'
     */
    static readonly YellowGreen: Color;
    /**
     * Regular expression for the hexidecimal match sequence
     */
    private static _hexRegex;
    /**
     * Shorthand regular expression for the hexidecimal match sequence
     */
    private static _shortHexRegex;
    /**
     * Constructs a color object with the provided hexidecimal value
     *
     * @param {number} hex A 24 bit hexidecimal value. e.g: 0xFFFFFF
     * @returns {Color}
     */
    static fromHex(hex: number): Color;
    /**
     * Constructs a color object with the provided RGB values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @returns {Color}
     */
    static fromRGB(red: number, green: number, blue: number): Color;
    /**
     * Constructs a color object with the provided RGBA values
     *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @returns {Color}
     */
    static fromRGBA(red: number, green: number, blue: number, alpha: number): Color;
    /**
      * Builds the current color instance into a hexidecimal format
      *
     * @param {number} red The red channel value
     * @param {number} green The green channel value
     * @param {number} blue The blue channel value
     * @param {number} alpha The alpha / transparency channel value
      * @returns {Color}
      */
    static toHexString(red: number, green: number, blue: number, alpha?: number): string;
    /**
     * Linear interpolates a hexidecimal color value, this allows for a fade effect transition between each steps of colors
     *
     * @param from The initial starting color
     * @param to The final resting color
     * @param increment Resolution of steps to take before making a rest to the defined end color
     * @returns {Color}
     */
    static lerp(from: Color, to: Color, increment: number): Color;
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
     * The hexidecimal representation for this color instance
     *
     * @private
     */
    private _hex;
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
     * Gets the hexidecimal value for the current color instance
     */
    readonly hex: number;
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
     * Linear interpolates to a new color by a defined amount of steps
     *
     * @param {Color} to The final resting color
     * @param {Number} increment Resolution of steps to take before making a rest to the defined end color
     * @returns {Color}
     */
    lerp(to: Color, increment: number): Color;
    /**
     * Builds a string representation for the current color instance
     *
     * @param {Boolean} hexidecimal The option to output the current color into hexidecimal format, rather than RGBA
     */
    toString(hexidecimal?: boolean): string;
    private _updateHex;
    /**
     * Js removes any beginning zeros once converted to hexidecimal, therefore check to see if it must be added back
     *
     * @private
     * @param {String} value
     */
    private static addZeroPadding;
}
export default Color;
