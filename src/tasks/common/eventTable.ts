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

import { IListener } from "./IListener";

/**
 * Model for mapping an event name to a listener container
 */
export class EventTable<T>{

     /**
      * The name for this event
      */
     public name: string;

     /**
      * The listener container associated with this event
      */
     public listeners: IListener<T>[];

     /**
      * Option to keep the events persistent after emission
      */
     public persistent: boolean;

     /**
      * Default constructor 
      * 
      * @param {String} name 
      * @param {Boolean} persistent Optional - defaults to true
      */
     constructor(name: string, persistent?: boolean){

          this.name = name || "";
          this.listeners = [];
          this.persistent = persistent || true;

     }

}
