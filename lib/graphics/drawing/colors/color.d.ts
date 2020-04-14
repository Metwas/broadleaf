/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the base types
 */
export declare class Color {
    /**
     * Color: 'AliceBlue' HEX: #F0F8FF'
     */
    static readonly AliceBlue: Color;
    /**
     * Color: 'AntiqueWhite' HEX: #FAEBD7'
     */
    static readonly AntiqueWhite: Color;
    /**
     * Color: 'Aqua' HEX: #00FFFF'
     */
    static readonly Aqua: Color;
    /**
     * Color: 'AquaMarine' HEX: #7FFFD4'
     */
    static readonly AquaMarine: Color;
    /**
     * Color: 'Azure' HEX: #007FFF'
     */
    static readonly Azure: Color;
    /**
     * Color: 'Beige' HEX: #F5F5DC'
     */
    static readonly Beige: Color;
    /**
     * Color: 'Bisque' HEX: #FFE4C4'
     */
    static readonly Bisque: Color;
    /**
     * Color: 'Black' HEX: #000000'
     */
    static readonly Black: Color;
    /**
     * Color: 'BlanchedAlmond' HEX: #FFEBCD'
     */
    static readonly BlanchedAlmond: Color;
    /**
     * Color: 'Blue' HEX: #0000FF'
     */
    static readonly Blue: Color;
    /**
     * Color: 'blueViolet' HEX: #8A2BE2'
     */
    static readonly BlueViolet: Color;
    /**
     * Color: 'Brown' HEX: #654321'
     */
    static readonly Brown: Color;
    /**
     * Color: 'Burlywood' HEX: #DEB887'
     */
    static readonly Burlywood: Color;
    /**
     * Color: 'CadetBlue' HEX: #5F9EA0'
     */
    static readonly CadetBlue: Color;
    /**
     * Color: 'Chartreuse' HEX: #7FFF00'
     */
    static readonly Chartreuse: Color;
    /**
     * Color: 'Chocolate' HEX: #D2691E'
     */
    static readonly Chocolate: Color;
    /**
     * Color: 'Coral' HEX: #FF7F50'
     */
    static readonly Coral: Color;
    /**
     * Color: 'CornFlowerBlue' HEX: #6495ED'
     */
    static readonly CornFlowerBlue: Color;
    /**
     * Color: 'Cornsilk' HEX: #FFF8DC'
     */
    static readonly Cornsilk: Color;
    /**
     * Color: 'Crimson' HEX: #DC143C'
     */
    static readonly Crimson: Color;
    /**
     * Color: 'Cyan' HEX: #00FFFF'
     */
    static readonly Cyan: Color;
    /**
     * Color: 'DarkBlue' HEX: #00008B'
     */
    static readonly DarkBlue: Color;
    /**
     * Color: 'DarkCyan' HEX: #008B8B'
     */
    static readonly DarkCyan: Color;
    /**
     * Color: 'DarkGoldenRod' HEX: #B8860B'
     */
    static readonly DarkGoldenRod: Color;
    /**
     * Color: 'DarkGray' HEX: #A9A9A9'
     */
    static readonly DarkGray: Color;
    /**
     * Color: 'DarkGreen' HEX: #006400'
     */
    static readonly DarkGreen: Color;
    /**
     * Color: 'DarkKhaki' HEX: #BDB76B'
     */
    static readonly DarkKhaki: Color;
    /**
     * Color: 'darkGrey' HEX: #A9A9A9'
     */
    static readonly DarkGrey: Color;
    /**
     * Color: 'Darkgray' HEX: #A9A9A9'
     */
    static readonly Darkgray: Color;
    /**
     * Color: 'DarkMagenta' HEX: #8B008B'
     */
    static readonly DarkMagenta: Color;
    /**
     * Color: 'DarkOliveGreen' HEX: #556B2F'
     */
    static readonly DarkOliveGreen: Color;
    /**
     * Color: 'DarkOrange' HEX: #FF8C00'
     */
    static readonly DarkOrange: Color;
    /**
     * Color: 'DarkOrchid' HEX: #9932CC'
     */
    static readonly DarkOrchid: Color;
    /**
     * Color: 'DarkRed' HEX: #8B0000'
     */
    static readonly DarkRed: Color;
    /**
     * Color: 'DarkSalmon' HEX: #E9967A'
     */
    static readonly DarkSalmon: Color;
    /**
     * Color: 'DarkSeaGreen' HEX: #8FBC8F'
     */
    static readonly DarkSeaGreen: Color;
    /**
     * Color: 'DarkSlateBlue' HEX: #483D8B'
     */
    static readonly DarkSlateBlue: Color;
    /**
     * Color: 'DarkSlateGray' HEX: #2F4F4F'
     */
    static readonly DarkSlateGray: Color;
    /**
     * Color: 'DarkSlateGrey' HEX: #2F4F4F'
     */
    static readonly DarkSlateGrey: Color;
    /**
     * Color: 'DarkTurquoise' HEX: #00CED1'
     */
    static readonly DarkTurquoise: Color;
    /**
     * Color: 'DarkViolet' HEX: #9400D3'
     */
    static readonly DarkViolet: Color;
    /**
     * Color: 'DeepPink' HEX: #FF1493'
     */
    static readonly DeepPink: Color;
    /**
     * Color: 'DeepSkyBlue' HEX: #00BFFF'
     */
    static readonly DeepSkyBlue: Color;
    /**
     * Color: 'DimGray' HEX: #696969'
     */
    static readonly DimGray: Color;
    /**
     * Color: 'DimGrey' HEX: #696969'
     */
    static readonly DimGrey: Color;
    /**
     * Color: 'DodgerBlue' HEX: #1E90FF'
     */
    static readonly DodgerBlue: Color;
    /**
     * Color: 'FireBrick' HEX: #B22222'
     */
    static readonly FireBrick: Color;
    /**
     * Color: 'FloralWhite' HEX: #FFFAF0'
     */
    static readonly FloralWhite: Color;
    /**
     * Color: 'ForestGreen' HEX: #228B22'
     */
    static readonly ForestGreen: Color;
    /**
     * Color: 'Fuchsia' HEX: #FF00FF'
     */
    static readonly Fuchsia: Color;
    /**
     * Color: 'Gainsboro' HEX: #DCDCDC'
     */
    static readonly Gainsboro: Color;
    /**
     * Color: 'GhostWhite' HEX: #F8F8FF'
     */
    static readonly GhostWhite: Color;
    /**
     * Color: 'Gold' HEX: #FFD700'
     */
    static readonly Gold: Color;
    /**
     * Color: 'GoldenRod' HEX: #DAA520'
     */
    static readonly GoldenRod: Color;
    /**
     * Color: 'Gray' HEX: #808080'
     */
    static readonly Gray: Color;
    /**
     * Color: 'Green' HEX: #008000'
     */
    static readonly Green: Color;
    /**
     * Color: 'GreenYellow' HEX: #ADFF2F'
     */
    static readonly GreenYellow: Color;
    /**
     * Color: 'Grey' HEX: #808080'
     */
    static readonly Grey: Color;
    /**
     * Color: 'HoneyDew' HEX: #F0FFF0'
     */
    static readonly HoneyDew: Color;
    /**
     * Color: 'HotPink' HEX: #FF69B4'
     */
    static readonly HotPink: Color;
    /**
     * Color: 'IndianRed' HEX: #CD5C5C'
     */
    static readonly IndianRed: Color;
    /**
     * Color: 'Indigo' HEX: #4B0082'
     */
    static readonly Indigo: Color;
    /**
     * Color: 'Ivory' HEX: #FFFFF0'
     */
    static readonly Ivory: Color;
    /**
     * Color: 'Khaki' HEX: #F0E68C'
     */
    static readonly Khaki: Color;
    /**
     * Color: 'Lavender' HEX: #E6E6FA'
     */
    static readonly Lavender: Color;
    /**
     * Color: 'LavenderBlush' HEX: #FFF0F5'
     */
    static readonly LavenderBlush: Color;
    /**
     * Color: 'LawnGreen' HEX: #7CFC00'
     */
    static readonly LawnGreen: Color;
    /**
     * Color: 'LightBlue' HEX: #ADD8E6'
     */
    static readonly LightBlue: Color;
    /**
     * Color: 'LightCoral' HEX: #F08080'
     */
    static readonly LightCoral: Color;
    /**
     * Color: 'LightCyan' HEX: #E0FFFF'
     */
    static readonly LightCyan: Color;
    /**
     * Color: 'LightGray' HEX: #D3D3D3'
     */
    static readonly LightGray: Color;
    /**
     * Color: 'LightGreen' HEX: #90EE90'
     */
    static readonly LightGreen: Color;
    /**
     * Color: 'LightGrey' HEX: #D3D3D3'
     */
    static readonly LightGrey: Color;
    /**
     * Color: 'LightPink' HEX: #FFB6C1'
     */
    static readonly LightPink: Color;
    /**
     * Color: 'LightSalmon' HEX: #FFA07A'
     */
    static readonly LightSalmon: Color;
    /**
     * Color: 'LightSeaGreen' HEX: #20B2AA'
     */
    static readonly LightSeaGreen: Color;
    /**
     * Color: 'LightSkyBlue' HEX: #87CEFA'
     */
    static readonly LightSkyBlue: Color;
    /**
     * Color: 'LightSlateGray' HEX: #778899'
     */
    static readonly LightSlateGray: Color;
    /**
     * Color: 'LightSlateGrey' HEX: #778899'
     */
    static readonly LightSlateGrey: Color;
    /**
     * Color: 'LightSteelBlue' HEX: #B0C4DE'
     */
    static readonly LightSteelBlue: Color;
    /**
     * Color: 'LightYellow' HEX: #FFFFE0'
     */
    static readonly LightYellow: Color;
    /**
     * Color: 'Lime' HEX: #00FF00'
     */
    static readonly Lime: Color;
    /**
     * Color: 'LimeGreen' HEX: #32CD32'
     */
    static readonly LimeGreen: Color;
    /**
     * Color: 'Linen' HEX: #FAF0E6'
     */
    static readonly Linen: Color;
    /**
     * Color: 'Magenta' HEX: #FF00FF'
     */
    static readonly Magenta: Color;
    /**
     * Color: 'Maroon' HEX: #800000'
     */
    static readonly Maroon: Color;
    /**
     * Color: 'MediumAquaMarine' HEX: #66CDAA'
     */
    static readonly MediumAquaMarine: Color;
    /**
     * Color: 'MediumBlue' HEX: #0000CD'
     */
    static readonly MediumBlue: Color;
    /**
     * Color: 'MediumOrchid' HEX: #BA55D3'
     */
    static readonly MediumOrchid: Color;
    /**
     * Color: 'MediumPurple' HEX: #9370DB'
     */
    static readonly MediumPurple: Color;
    /**
     * Color: 'MediumSeaGreen' HEX: #3CB371'
     */
    static readonly MediumSeaGreen: Color;
    /**
     * Color: 'MediumSlateBlue' HEX: #7B68EE'
     */
    static readonly MediumSlateBlue: Color;
    /**
     * Color: 'MediumSpringGreen' HEX: #00FA9A'
     */
    static readonly MediumSpringGreen: Color;
    /**
     * Color: 'MediumTurquoise' HEX: #48D1CC'
     */
    static readonly MediumTurquoise: Color;
    /**
     * Color: 'MediumVioletRed' HEX: #C71585'
     */
    static readonly MediumVioletRed: Color;
    /**
     * Color: 'MidnightBlue' HEX: #191970'
     */
    static readonly MidnightBlue: Color;
    /**
     * Color: 'MintCream' HEX: #F5FFFA'
     */
    static readonly MintCream: Color;
    /**
     * Color: 'MistyRose' HEX: #FFE4E1'
     */
    static readonly MistyRose: Color;
    /**
     * Color: 'Moccasin' HEX: #FFE4B5'
     */
    static readonly Moccasin: Color;
    /**
     * Color: 'NavajoWhite' HEX: #FFDEAD'
     */
    static readonly NavajoWhite: Color;
    /**
     * Color: 'Navy' HEX: #000080'
     */
    static readonly Navy: Color;
    /**
     * Color: 'OldLace' HEX: #FDF5E6'
     */
    static readonly OldLace: Color;
    /**
     * Color: 'Olive' HEX: #808000'
     */
    static readonly Olive: Color;
    /**
     * Color: 'OliveDrab' HEX: #6B8E23'
     */
    static readonly OliveDrab: Color;
    /**
     * Color: 'Orange' HEX: #FFA500'
     */
    static readonly Orange: Color;
    /**
     * Color: 'OrangeRed' HEX: #FF4500'
     */
    static readonly OrangeRed: Color;
    /**
     * Color: 'Orchid' HEX: #DA70D6'
     */
    static readonly Orchid: Color;
    /**
     * Color: 'PaleGoldenRod' HEX: #EEE8AA'
     */
    static readonly PaleGoldenRod: Color;
    /**
     * Color: 'PaleGreen' HEX: #98FB98'
     */
    static readonly PaleGreen: Color;
    /**
     * Color: 'PaleTurquoise' HEX: #AFEEEE'
     */
    static readonly PaleTurquoise: Color;
    /**
     * Color: 'PaleVioletRed' HEX: #DB7093'
     */
    static readonly PaleVioletRed: Color;
    /**
     * Color: 'PapayaWhip' HEX: #FFDAB9'
     */
    static readonly PapayaWhip: Color;
    /**
     * Color: 'PeachPuff' HEX: #FFEFD5'
     */
    static readonly PeachPuff: Color;
    /**
     * Color: 'Peru' HEX: #CD853F'
     */
    static readonly Peru: Color;
    /**
     * Color: 'Pink' HEX: #FFC0CB'
     */
    static readonly Pink: Color;
    /**
     * Color: 'Plum' HEX: #DDA0DD'
     */
    static readonly Plum: Color;
    /**
     * Color: 'PowderBlue' HEX: #B0E0E6'
     */
    static readonly PowderBlue: Color;
    /**
     * Color: 'Purple' HEX: #800080'
     */
    static readonly Purple: Color;
    /**
     * Color: 'RebeccaPurple' HEX: #663399'
     */
    static readonly RebeccaPurple: Color;
    /**
     * Color: 'Red' HEX: #FF0000'
     */
    static readonly Red: Color;
    /**
     * Color: 'RosyBrown' HEX: #BC8F8F'
     */
    static readonly RosyBrown: Color;
    /**
     * Color: 'RoyalBlue' HEX: #4169E1'
     */
    static readonly RoyalBlue: Color;
    /**
     * Color: 'SaddleBrown' HEX: #8B4513'
     */
    static readonly SaddleBrown: Color;
    /**
     * Color: 'Salmon' HEX: #FA8072'
     */
    static readonly Salmon: Color;
    /**
     * Color: 'SandyBrown' HEX: #F4A460'
     */
    static readonly SandyBrown: Color;
    /**
     * Color: 'SeaGreen' HEX: #2E8B57'
     */
    static readonly SeaGreen: Color;
    /**
     * Color: 'SeaShell' HEX: #FFF5EE'
     */
    static readonly SeaShell: Color;
    /**
     * Color: 'Sienna' HEX: #A0522D'
     */
    static readonly Sienna: Color;
    /**
     * Color: 'Silver' HEX: #C0C0C0'
     */
    static readonly Silver: Color;
    /**
     * Color: 'SkyBlue' HEX: #87CEEB'
     */
    static readonly SkyBlue: Color;
    /**
     * Color: 'SlateBlue' HEX: #6A5ACD'
     */
    static readonly SlateBlue: Color;
    /**
     * Color: 'SlateGray' HEX: #708090'
     */
    static readonly SlateGray: Color;
    /**
     * Color: 'SlateGrey' HEX: #708090'
     */
    static readonly SlateGrey: Color;
    /**
     * Color: 'Snow' HEX: #FFFAFA'
     */
    static readonly Snow: Color;
    /**
     * Color: 'SpringGreen' HEX: #00FF7F'
     */
    static readonly SpringGreen: Color;
    /**
     * Color: 'SteelBlue' HEX: #4682B4'
     */
    static readonly SteelBlue: Color;
    /**
     * Color: 'Tan' HEX: #D2B48C'
     */
    static readonly Tan: Color;
    /**
     * Color: 'Teal' HEX: #008080'
     */
    static readonly Teal: Color;
    /**
     * Color: 'Thistle' HEX: #D8BFD8'
     */
    static readonly Thistle: Color;
    /**
     * Color: 'Tomato' HEX: #FF6347'
     */
    static readonly Tomato: Color;
    /**
     * Color: 'Turquoise' HEX: #40E0D0'
     */
    static readonly Turquoise: Color;
    /**
     * Color: 'Violet' HEX: #EE82EE'
     */
    static readonly Violet: Color;
    /**
     * Color: 'Wheat' HEX: #F5DEB3'
     */
    static readonly Wheat: Color;
    /**
     * Color: 'White' HEX: #FFFFFF'
     */
    static readonly White: Color;
    /**
     * Color: 'WhiteSmoke' HEX: #F5F5F5'
     */
    static readonly WhiteSmoke: Color;
    /**
     * Color: 'Yellow' HEX: #FFFF00'
     */
    static readonly Yellow: Color;
    /**
     * Color: 'YellowGreen' HEX: #9ACD32'
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
     * Creates a @see Color instance from the HSLA color format components
     *
     * @param {Number} Hue A value in a range of 0 - 360 degrees, representing a color wheel
     * @param {Number} saturation Percentage of color saturation
     * @param {Number} lightness Percentage of color lightness white - black scale
     * @param {Number} alpha Optional alpha value, defaults to 1
     * @returns {Color}
     */
    static fromHSLA: (hue: number, saturation: number, lightness: number, alpha: number) => Color;
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
     * Converts the current @see Color instance to a HSLA string
     *
     * @returns {String} 'hsla(hue, saturation, lightness)'
     */
    toHSLA(): string;
    /**
     * Sets the current @see Color instance from the HSLA color format components
     *
     * @param {Number} Hue A value in a range of 0 - 360 degrees, representing a color wheel
     * @param {Number} saturation Percentage of color saturation
     * @param {Number} lightness Percentage of color lightness white - black scale
     * @returns {Color}
     */
    setHSLA(hue: number, saturation: number, lightness: number, alpha: number): Color;
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
