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

     constructor(token: string, startSequence?: string, endSequence?: string) {

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

     /**
      * The output result stored after the last parsing call
      */
     private _results: Array<string> = [];
     get result(): Array<string> {

          return this._results;

     }

     /**
      * Obtains all the values which match the current seperator tokens
      * 
      * @param {String} value 
      * @returns {Array}
      */
     parse(value: string): Array<string> {

          // const tokenString: string = `${this.startSequence}${this.token}${this.endSequence}`;
          // const regexFn: (value: string) => string = utils.regex.MATCH_TOKEN(this);
          // return this._results = [""];
          return [];

     }

}