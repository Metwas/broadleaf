import * as utils from "../utils";

export class SeperatorModel {

     /**
      * A specified string of charactors that will initialize the token seperator
      */
     public startSequence: string;

     /**
      * A specified string of charactors that will close the token seperator value
      */
     public endSequence: string;

     /**
      * The token seperator
      */
     public token: string;

     /**
      * Default constructor
      * 
      * @param {String} token 
      * @param {String} startSequence 
      * @param {String} endSequence 
      */
     public constructor(token: string, startSequence?: string, endSequence?: string) {

          if (!utils.isString(token)) {

               throw new Error("Invalid seperator token provided!");

          }

          if (!utils.isString(startSequence) || startSequence === void 0) {

               startSequence = "";

          }

          if (!utils.isString(endSequence) || endSequence === void 0) {

               endSequence = startSequence;

          }

          this.token = token;
          this.startSequence = startSequence;
          this.endSequence = endSequence;

     }
     
}