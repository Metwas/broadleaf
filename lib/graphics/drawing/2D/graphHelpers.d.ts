import Vector2 from "../../../math/vectors/vector2";
declare const _default: {
    /**
     * Gets the component values within a line graph formulae, such as gradient and y-intercept from the two provided coordinates
     *
     * @param {Vector2} from The start positional vector
     * @param {Vector2} to The end positional vector
     * @remarks The line graph formulae goes as follows: y = f(x) = mx + c
     * @returns {Object} The values for each component in the formulae
     */
    getlineGraphComponents: (from: Vector2, to: Vector2) => Object;
    /**
    * Creates simple oscillation motion
    *
    * @param {Number} angle The angle value
    * @param {Number} height The maximum oscillating distance
    * @returns {Number} a value thats mapped from the padding and amplitude to values between -1 to 1
    */
    oscillate: (angle: number, height: number) => number;
};
export default _default;
