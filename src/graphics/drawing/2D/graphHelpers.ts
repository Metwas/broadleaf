import Vector2 from "../../../math/vectors/vector2";
import math from "../../../math/math";

export default {
     
     /**
      * Gets the component values within a line graph formulae, such as gradient and y-intercept from the two provided coordinates
      *
      * @param {Vector2} from The start positional vector
      * @param {Vector2} to The end positional vector
      * @remarks The line graph formulae goes as follows: y = f(x) = mx + c
      * @returns {Object} The values for each component in the formulae
      */
     getlineGraphComponents: function (from: Vector2, to: Vector2): Object {

          let _gradient = 0;
          let _yIntercept = 0;

          var _solve = function () {

               /*
                   To solve for m (the gradient) the formulae is as follows:
                   m = (y2 - y1) / (x2 - x1)
               */
               var _deltaX = to.x - from.x;
               var _deltaY = to.y - from.y;

               if (_deltaX === 0) {

                    _gradient = 0;

               } else {

                    _gradient = _deltaY / _deltaX;

               }

               /*
                   To solve for c (the y-intercept) the formulae is as follows:
                   c = ( y - (m * x) )
               */
               var _gradientFn = _gradient * from.x;
               return from.y - _gradientFn;

          };

          const _distance = math.distVector(from, to);
          _yIntercept = _solve();

          return {

               gradient: _gradient,
               yIntercept: _yIntercept,
               distance: _distance

          };

     },

      /**
      * Creates simple oscillation motion
      *
      * @param {Number} angle The angle value
      * @param {Number} height The maximum oscillating distance
      * @returns {Number} a value thats mapped from the padding and amplitude to values between -1 to 1
      */
     oscillate: function (angle: number, height: number) {

          return math.map(Math.sin(angle), -1, 1, -height, height);

     }

};