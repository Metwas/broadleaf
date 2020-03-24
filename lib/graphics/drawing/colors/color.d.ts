/**
 * Represents a color object with information such as RGB, HEX and does allow full conversion between the base types
 */
export declare class Color {
    /**
     * Color: 'AliceBlue' HEX: #F0F8FF'
     */
    static get AliceBlue(): Color;
    /**
     * Color: 'AntiqueWhite' HEX: #FAEBD7'
     */
    static get AntiqueWhite(): Color;
    /**
     * Color: 'Aqua' HEX: #00FFFF'
     */
    static get Aqua(): Color;
    /**
     * Color: 'AquaMarine' HEX: #7FFFD4'
     */
    static get AquaMarine(): Color;
    /**
     * Color: 'Azure' HEX: #007FFF'
     */
    static get Azure(): Color;
    /**
     * Color: 'Beige' HEX: #F5F5DC'
     */
    static get Beige(): Color;
    /**
     * Color: 'Bisque' HEX: #FFE4C4'
     */
    static get Bisque(): Color;
    /**
     * Color: 'Black' HEX: #000000'
     */
    static get Black(): Color;
    /**
     * Color: 'BlanchedAlmond' HEX: #FFEBCD'
     */
    static get BlanchedAlmond(): Color;
    /**
     * Color: 'Blue' HEX: #0000FF'
     */
    static get Blue(): Color;
    /**
     * Color: 'blueViolet' HEX: #8A2BE2'
     */
    static get BlueViolet(): Color;
    /**
     * Color: 'Brown' HEX: #654321'
     */
    static get Brown(): Color;
    /**
     * Color: 'Burlywood' HEX: #DEB887'
     */
    static get Burlywood(): Color;
    /**
     * Color: 'CadetBlue' HEX: #5F9EA0'
     */
    static get CadetBlue(): Color;
    /**
     * Color: 'Chartreuse' HEX: #7FFF00'
     */
    static get Chartreuse(): Color;
    /**
     * Color: 'Chocolate' HEX: #D2691E'
     */
    static get Chocolate(): Color;
    /**
     * Color: 'Coral' HEX: #FF7F50'
     */
    static get Coral(): Color;
    /**
     * Color: 'CornFlowerBlue' HEX: #6495ED'
     */
    static get CornFlowerBlue(): Color;
    /**
     * Color: 'Cornsilk' HEX: #FFF8DC'
     */
    static get Cornsilk(): Color;
    /**
     * Color: 'Crimson' HEX: #DC143C'
     */
    static get Crimson(): Color;
    /**
     * Color: 'Cyan' HEX: #00FFFF'
     */
    static get Cyan(): Color;
    /**
     * Color: 'DarkBlue' HEX: #00008B'
     */
    static get DarkBlue(): Color;
    /**
     * Color: 'DarkCyan' HEX: #008B8B'
     */
    static get DarkCyan(): Color;
    /**
     * Color: 'DarkGoldenRod' HEX: #B8860B'
     */
    static get DarkGoldenRod(): Color;
    /**
     * Color: 'DarkGray' HEX: #A9A9A9'
     */
    static get DarkGray(): Color;
    /**
     * Color: 'DarkGreen' HEX: #006400'
     */
    static get DarkGreen(): Color;
    /**
     * Color: 'DarkKhaki' HEX: #BDB76B'
     */
    static get DarkKhaki(): Color;
    /**
     * Color: 'darkGrey' HEX: #A9A9A9'
     */
    static get DarkGrey(): Color;
    /**
     * Color: 'Darkgray' HEX: #A9A9A9'
     */
    static get Darkgray(): Color;
    /**
     * Color: 'DarkMagenta' HEX: #8B008B'
     */
    static get DarkMagenta(): Color;
    /**
     * Color: 'DarkOliveGreen' HEX: #556B2F'
     */
    static get DarkOliveGreen(): Color;
    /**
     * Color: 'DarkOrange' HEX: #FF8C00'
     */
    static get DarkOrange(): Color;
    /**
     * Color: 'DarkOrchid' HEX: #9932CC'
     */
    static get DarkOrchid(): Color;
    /**
     * Color: 'DarkRed' HEX: #8B0000'
     */
    static get DarkRed(): Color;
    /**
     * Color: 'DarkSalmon' HEX: #E9967A'
     */
    static get DarkSalmon(): Color;
    /**
     * Color: 'DarkSeaGreen' HEX: #8FBC8F'
     */
    static get DarkSeaGreen(): Color;
    /**
     * Color: 'DarkSlateBlue' HEX: #483D8B'
     */
    static get DarkSlateBlue(): Color;
    /**
     * Color: 'DarkSlateGray' HEX: #2F4F4F'
     */
    static get DarkSlateGray(): Color;
    /**
     * Color: 'DarkSlateGrey' HEX: #2F4F4F'
     */
    static get DarkSlateGrey(): Color;
    /**
     * Color: 'DarkTurquoise' HEX: #00CED1'
     */
    static get DarkTurquoise(): Color;
    /**
     * Color: 'DarkViolet' HEX: #9400D3'
     */
    static get DarkViolet(): Color;
    /**
     * Color: 'DeepPink' HEX: #FF1493'
     */
    static get DeepPink(): Color;
    /**
     * Color: 'DeepSkyBlue' HEX: #00BFFF'
     */
    static get DeepSkyBlue(): Color;
    /**
     * Color: 'DimGray' HEX: #696969'
     */
    static get DimGray(): Color;
    /**
     * Color: 'DimGrey' HEX: #696969'
     */
    static get DimGrey(): Color;
    /**
     * Color: 'DodgerBlue' HEX: #1E90FF'
     */
    static get DodgerBlue(): Color;
    /**
     * Color: 'FireBrick' HEX: #B22222'
     */
    static get FireBrick(): Color;
    /**
     * Color: 'FloralWhite' HEX: #FFFAF0'
     */
    static get FloralWhite(): Color;
    /**
     * Color: 'ForestGreen' HEX: #228B22'
     */
    static get ForestGreen(): Color;
    /**
     * Color: 'Fuchsia' HEX: #FF00FF'
     */
    static get Fuchsia(): Color;
    /**
     * Color: 'Gainsboro' HEX: #DCDCDC'
     */
    static get Gainsboro(): Color;
    /**
     * Color: 'GhostWhite' HEX: #F8F8FF'
     */
    static get GhostWhite(): Color;
    /**
     * Color: 'Gold' HEX: #FFD700'
     */
    static get Gold(): Color;
    /**
     * Color: 'GoldenRod' HEX: #DAA520'
     */
    static get GoldenRod(): Color;
    /**
     * Color: 'Gray' HEX: #808080'
     */
    static get Gray(): Color;
    /**
     * Color: 'Green' HEX: #008000'
     */
    static get Green(): Color;
    /**
     * Color: 'GreenYellow' HEX: #ADFF2F'
     */
    static get GreenYellow(): Color;
    /**
     * Color: 'Grey' HEX: #808080'
     */
    static get Grey(): Color;
    /**
     * Color: 'HoneyDew' HEX: #F0FFF0'
     */
    static get HoneyDew(): Color;
    /**
     * Color: 'HotPink' HEX: #FF69B4'
     */
    static get HotPink(): Color;
    /**
     * Color: 'IndianRed' HEX: #CD5C5C'
     */
    static get IndianRed(): Color;
    /**
     * Color: 'Indigo' HEX: #4B0082'
     */
    static get Indigo(): Color;
    /**
     * Color: 'Ivory' HEX: #FFFFF0'
     */
    static get Ivory(): Color;
    /**
     * Color: 'Khaki' HEX: #F0E68C'
     */
    static get Khaki(): Color;
    /**
     * Color: 'Lavender' HEX: #E6E6FA'
     */
    static get Lavender(): Color;
    /**
     * Color: 'LavenderBlush' HEX: #FFF0F5'
     */
    static get LavenderBlush(): Color;
    /**
     * Color: 'LawnGreen' HEX: #7CFC00'
     */
    static get LawnGreen(): Color;
    /**
     * Color: 'LightBlue' HEX: #ADD8E6'
     */
    static get LightBlue(): Color;
    /**
     * Color: 'LightCoral' HEX: #F08080'
     */
    static get LightCoral(): Color;
    /**
     * Color: 'LightCyan' HEX: #E0FFFF'
     */
    static get LightCyan(): Color;
    /**
     * Color: 'LightGray' HEX: #D3D3D3'
     */
    static get LightGray(): Color;
    /**
     * Color: 'LightGreen' HEX: #90EE90'
     */
    static get LightGreen(): Color;
    /**
     * Color: 'LightGrey' HEX: #D3D3D3'
     */
    static get LightGrey(): Color;
    /**
     * Color: 'LightPink' HEX: #FFB6C1'
     */
    static get LightPink(): Color;
    /**
     * Color: 'LightSalmon' HEX: #FFA07A'
     */
    static get LightSalmon(): Color;
    /**
     * Color: 'LightSeaGreen' HEX: #20B2AA'
     */
    static get LightSeaGreen(): Color;
    /**
     * Color: 'LightSkyBlue' HEX: #87CEFA'
     */
    static get LightSkyBlue(): Color;
    /**
     * Color: 'LightSlateGray' HEX: #778899'
     */
    static get LightSlateGray(): Color;
    /**
     * Color: 'LightSlateGrey' HEX: #778899'
     */
    static get LightSlateGrey(): Color;
    /**
     * Color: 'LightSteelBlue' HEX: #B0C4DE'
     */
    static get LightSteelBlue(): Color;
    /**
     * Color: 'LightYellow' HEX: #FFFFE0'
     */
    static get LightYellow(): Color;
    /**
     * Color: 'Lime' HEX: #00FF00'
     */
    static get Lime(): Color;
    /**
     * Color: 'LimeGreen' HEX: #32CD32'
     */
    static get LimeGreen(): Color;
    /**
     * Color: 'Linen' HEX: #FAF0E6'
     */
    static get Linen(): Color;
    /**
     * Color: 'Magenta' HEX: #FF00FF'
     */
    static get Magenta(): Color;
    /**
     * Color: 'Maroon' HEX: #800000'
     */
    static get Maroon(): Color;
    /**
     * Color: 'MediumAquaMarine' HEX: #66CDAA'
     */
    static get MediumAquaMarine(): Color;
    /**
     * Color: 'MediumBlue' HEX: #0000CD'
     */
    static get MediumBlue(): Color;
    /**
     * Color: 'MediumOrchid' HEX: #BA55D3'
     */
    static get MediumOrchid(): Color;
    /**
     * Color: 'MediumPurple' HEX: #9370DB'
     */
    static get MediumPurple(): Color;
    /**
     * Color: 'MediumSeaGreen' HEX: #3CB371'
     */
    static get MediumSeaGreen(): Color;
    /**
     * Color: 'MediumSlateBlue' HEX: #7B68EE'
     */
    static get MediumSlateBlue(): Color;
    /**
     * Color: 'MediumSpringGreen' HEX: #00FA9A'
     */
    static get MediumSpringGreen(): Color;
    /**
     * Color: 'MediumTurquoise' HEX: #48D1CC'
     */
    static get MediumTurquoise(): Color;
    /**
     * Color: 'MediumVioletRed' HEX: #C71585'
     */
    static get MediumVioletRed(): Color;
    /**
     * Color: 'MidnightBlue' HEX: #191970'
     */
    static get MidnightBlue(): Color;
    /**
     * Color: 'MintCream' HEX: #F5FFFA'
     */
    static get MintCream(): Color;
    /**
     * Color: 'MistyRose' HEX: #FFE4E1'
     */
    static get MistyRose(): Color;
    /**
     * Color: 'Moccasin' HEX: #FFE4B5'
     */
    static get Moccasin(): Color;
    /**
     * Color: 'NavajoWhite' HEX: #FFDEAD'
     */
    static get NavajoWhite(): Color;
    /**
     * Color: 'Navy' HEX: #000080'
     */
    static get Navy(): Color;
    /**
     * Color: 'OldLace' HEX: #FDF5E6'
     */
    static get OldLace(): Color;
    /**
     * Color: 'Olive' HEX: #808000'
     */
    static get Olive(): Color;
    /**
     * Color: 'OliveDrab' HEX: #6B8E23'
     */
    static get OliveDrab(): Color;
    /**
     * Color: 'Orange' HEX: #FFA500'
     */
    static get Orange(): Color;
    /**
     * Color: 'OrangeRed' HEX: #FF4500'
     */
    static get OrangeRed(): Color;
    /**
     * Color: 'Orchid' HEX: #DA70D6'
     */
    static get Orchid(): Color;
    /**
     * Color: 'PaleGoldenRod' HEX: #EEE8AA'
     */
    static get PaleGoldenRod(): Color;
    /**
     * Color: 'PaleGreen' HEX: #98FB98'
     */
    static get PaleGreen(): Color;
    /**
     * Color: 'PaleTurquoise' HEX: #AFEEEE'
     */
    static get PaleTurquoise(): Color;
    /**
     * Color: 'PaleVioletRed' HEX: #DB7093'
     */
    static get PaleVioletRed(): Color;
    /**
     * Color: 'PapayaWhip' HEX: #FFDAB9'
     */
    static get PapayaWhip(): Color;
    /**
     * Color: 'PeachPuff' HEX: #FFEFD5'
     */
    static get PeachPuff(): Color;
    /**
     * Color: 'Peru' HEX: #CD853F'
     */
    static get Peru(): Color;
    /**
     * Color: 'Pink' HEX: #FFC0CB'
     */
    static get Pink(): Color;
    /**
     * Color: 'Plum' HEX: #DDA0DD'
     */
    static get Plum(): Color;
    /**
     * Color: 'PowderBlue' HEX: #B0E0E6'
     */
    static get PowderBlue(): Color;
    /**
     * Color: 'Purple' HEX: #800080'
     */
    static get Purple(): Color;
    /**
     * Color: 'RebeccaPurple' HEX: #663399'
     */
    static get RebeccaPurple(): Color;
    /**
     * Color: 'Red' HEX: #FF0000'
     */
    static get Red(): Color;
    /**
     * Color: 'RosyBrown' HEX: #BC8F8F'
     */
    static get RosyBrown(): Color;
    /**
     * Color: 'RoyalBlue' HEX: #4169E1'
     */
    static get RoyalBlue(): Color;
    /**
     * Color: 'SaddleBrown' HEX: #8B4513'
     */
    static get SaddleBrown(): Color;
    /**
     * Color: 'Salmon' HEX: #FA8072'
     */
    static get Salmon(): Color;
    /**
     * Color: 'SandyBrown' HEX: #F4A460'
     */
    static get SandyBrown(): Color;
    /**
     * Color: 'SeaGreen' HEX: #2E8B57'
     */
    static get SeaGreen(): Color;
    /**
     * Color: 'SeaShell' HEX: #FFF5EE'
     */
    static get SeaShell(): Color;
    /**
     * Color: 'Sienna' HEX: #A0522D'
     */
    static get Sienna(): Color;
    /**
     * Color: 'Silver' HEX: #C0C0C0'
     */
    static get Silver(): Color;
    /**
     * Color: 'SkyBlue' HEX: #87CEEB'
     */
    static get SkyBlue(): Color;
    /**
     * Color: 'SlateBlue' HEX: #6A5ACD'
     */
    static get SlateBlue(): Color;
    /**
     * Color: 'SlateGray' HEX: #708090'
     */
    static get SlateGray(): Color;
    /**
     * Color: 'SlateGrey' HEX: #708090'
     */
    static get SlateGrey(): Color;
    /**
     * Color: 'Snow' HEX: #FFFAFA'
     */
    static get Snow(): Color;
    /**
     * Color: 'SpringGreen' HEX: #00FF7F'
     */
    static get SpringGreen(): Color;
    /**
     * Color: 'SteelBlue' HEX: #4682B4'
     */
    static get SteelBlue(): Color;
    /**
     * Color: 'Tan' HEX: #D2B48C'
     */
    static get Tan(): Color;
    /**
     * Color: 'Teal' HEX: #008080'
     */
    static get Teal(): Color;
    /**
     * Color: 'Thistle' HEX: #D8BFD8'
     */
    static get Thistle(): Color;
    /**
     * Color: 'Tomato' HEX: #FF6347'
     */
    static get Tomato(): Color;
    /**
     * Color: 'Turquoise' HEX: #40E0D0'
     */
    static get Turquoise(): Color;
    /**
     * Color: 'Violet' HEX: #EE82EE'
     */
    static get Violet(): Color;
    /**
     * Color: 'Wheat' HEX: #F5DEB3'
     */
    static get Wheat(): Color;
    /**
     * Color: 'White' HEX: #FFFFFF'
     */
    static get White(): Color;
    /**
     * Color: 'WhiteSmoke' HEX: #F5F5F5'
     */
    static get WhiteSmoke(): Color;
    /**
     * Color: 'Yellow' HEX: #FFFF00'
     */
    static get Yellow(): Color;
    /**
     * Color: 'YellowGreen' HEX: #9ACD32'
     */
    static get YellowGreen(): Color;
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
    get hex(): number;
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
