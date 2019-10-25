import { math } from "../../broadleaf";

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

/**
 * Vectors hold two distinct values (x, y) to represent either distance or velocity in a given direction (Such as Euclidean distance)
 * 
 * @documentation https://en.wikipedia.org/wiki/Euclidean_vector
 */
export class Vector2 {

     public x: number;
     public y: number;

     /**
      * Default constructor which takes a set of cartesian coordinates
      * 
      * @param {number} x The value which falls on the x-axis or direction
      * @param {number} y The value which falls on the y-axis or direction
      */
     constructor(x: number, y: number) {

          this.x = x;
          this.y = y;

     }

     /**
      * Calculates the magnitude of the vector
      */
     magnitude(): number {

          return Math.sqrt((this.x + this.y) * (this.x + this.y));

     }

     /**
      * Sets the x property on this vector to the value provided
      * 
      * @param {number} scaler 
      */
     setX(scaler: number): void {

          this.x = scaler;

     }

     /**
      * Sets the y property on this vector to the value provided
      * 
      * @param {number} scaler 
      */
     setY(scaler: number): void {

          this.y = scaler;

     }

     /**
      * Adds the provided value to the x property on this vector
      * 
      * @param {number} scaler 
      */
     setVector(vector: Vector2): Vector2 {

          this.setX(vector.x);
          this.setY(vector.y);
          return this;

     }

     /**
      * Adds the provided value to the x property on this vector
      * 
      * @param {number} scaler 
      */
     setScaler(scaler: number): Vector2 {

          this.setX(scaler);
          this.setY(scaler);
          return this;

     }

     /**
      * Adds the provided value to the x property on this vector
      * 
      * @param {number} scaler 
      */
     addX(scaler: number): void {

          this.x += scaler;

     }

     /**
      * Adds the provided value to the y property on this vector
      * 
      * @param {number} scaler
      */
     addY(scaler: number): void {

          this.y += scaler;

     }

     /**
      * Adds the provided vector to this current vector object
      * 
      * @param {Vector2} vector A valid Vector2 object
      */
     addVector(vector: Vector2): Vector2 {

          this.addX(vector.x);
          this.addY(vector.y);
          return this;

     }

     /**
      * Adds a scaler value to the current vector object
      * 
      * @param {Scaler} scaler
      */
     addScaler(scaler: number): Vector2 {

          this.addX(scaler);
          this.addY(scaler);
          return this;

     }

     /**
      * Subtracts the provided value from the x property on this vector
      * 
      * @param {number} scaler 
      */
     subX(scaler: number): void {

          this.x -= scaler;

     }

     /**
      * Subtracts the provided value from the y property on this vector
      * 
      * @param {number} scaler
      */
     subY(scaler: number): void {

          this.y -= scaler;

     }

     /**
      * Subtracts the provided vector from this current vector object
      * 
      * @param {Vector2} vector A valid Vector2 object
      */
     subVector(vector: Vector2): Vector2 {

          this.subX(vector.x);
          this.subY(vector.y);
          return this;

     }

     /**
      * Subtracts a scaler value from the current vector object
      * 
      * @param {Scaler} scaler
      */
     subScaler(scaler: number): Vector2 {

          this.subX(scaler);
          this.subY(scaler);
          return this;

     }

     /**
      * Multiplies the vectors x value to the provided multiplier 
      * 
      * @param {number} scaler A multiplier scaler
      */
     multiplyX(scaler: number): void {

          this.x *= scaler;

     }

     /**
      * Multiplies the vectors y value to the provided multiplier 
      * 
      * @param {number} scaler The multiplier scaler
      */
     multiplyY(scaler: number): void {

          this.y *= scaler;

     }

     /**
      * Multiplies the vectors x and y value to the provided vector object
      * 
      * @param {Vector2} vector A valid Vector2 object
      */
     multiplyVector(vector: Vector2): Vector2 {

          this.multiplyX(vector.x);
          this.multiplyY(vector.y);
          return this;

     }

     /**
      * Multiplies the vectors x and y value to the provided scaler value
      * 
      * @param {Scaler} scaler
      */
     multiplyScaler(scaler: number): Vector2 {

          this.multiplyX(scaler);
          this.multiplyY(scaler);
          return this;

     }

     /**
      * Normalizes the current vector's length to 1
      */
     normalize(): Vector2 {

          const mag = this.magnitude();

          if (mag > 0) {

               return this.multiplyScaler(1 / mag);

          }

          return this;

     }

     /**
      * Calculates the current vectors rotational angle
      * 
      * @returns {Number} The angle in radians
      */
     heading(): number {

          return Math.atan2(this.y, this.x);

     }

     /**
      * Rotates the current vector by a given angle
      * 
      * @param {Number} angle 
      */
     rotate(angle: number): Vector2 {

          const mag: number = this.magnitude();
          let newAngle: number = this.heading() + angle;
          newAngle = math.degreesToRadians(newAngle);

          // update the position based from the angle and magnitude
          this.x = Math.cos(newAngle) * mag;
          this.y = Math.sin(newAngle) * mag;

          // return the vector to allow for chaining
          return this;

     }

}