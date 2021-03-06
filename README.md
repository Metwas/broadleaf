> # broadleaf
Common utility belt library written in Typescript, translated to es5 standard JavaScript

> ### Usage

```javascript
const broadleaf = require("broadleaf");

// Typescript
import broadleaf from "broadleaf";
```

> ### EventEmitter

```javascript
const { EventEmitter } = require("broadleaf");

// create event emitter
const emitter = new EventEmitter(); // Typescript: const emitter = new EventEmitter<any>();

// attach persistant or non-persistant event listeners
emitter.on("message", (ev) => { console.log("Good " + ev); });
emitter.once("message2", () => { console.log("hello"); });

// emit events
emitter.emit("message","day");
emitter.emit("message2");

// clear listeners
emitter.off("message");

// dispose of all listeners
emitter.dispose();
```

> ### Timers

```javascript
const { Timer } = require("broadleaf");

const duration = 5000; // Total duration for the timer to take to complete
const fps = 1; // The resolution OR frame per second
const startTime = 0; // A specified head start for the timer

let timer = new Timer(duration, fps, startTime);
console.log("STATUS: " + timer.status);

// attach event listeners
timer.on("complete", () => { console.log("\ntimer completed: "});
timer.on("start", () => { console.log("timer started"); });

/* 
  for each tick the elapsed value gets incremented based off the fps value, this data is useful for creating animations, which i will 
  add in the future.
 */
timer.on("tick", (elapsed) => { console.log("timer tick: " + elapsed); });

// start the timer
timer.start();
```
> ### Proxy JX

```javascript
const { utils } = require("broadleaf");

// create a proxy for a given object or array, below defines a custom getter and setter
const proxy = new utils.polyfill.ProxyJX({}, {
             // can specify a getter and setter
            get: function(target, property){ 
                   // custom logic here for a getter request
                   customFunction(); 
                   // return property value to caller
                   return target[property]
            },
            set: function(target, property, value){
                  // update target value
                  target[property] = value
             }
});

```

> ### Enumerator

```javascript
const { Enumerator } = require("broadleaf");

Enumerator.create(["START", "STOP", "RUNNING"], startIndex = 0) 
RETURNS @Type Object => { 0: "START", 1: "STOP", 2: "RUNNING", "START": 0, "STOP": 1, "RUNNING": 2 }

```

 > ### Math & utilities
  
```javascript
const { utils, math } = require("broadleaf");

utils.isNumber(0) // true
utils.isArray([]) // true

// type defaults
utils.__default("number") // 0

// math constants
math.PI
math.TAU
math.DEGTORAD
math.RADTODEG
math.KILOBYTE
math.MEGABYTE

// vectors
const vel = math.Vector2(5,2);
const acc = math.Vector2(10,2);
vel.addVector(acc);
vel.multiplyScaler(2);
```

> ### Colors

```javascript
const { Color } = require("broadleaf");

const red = Color.red;
// rgb
const blue = new Color(0,0,255);
// hex string or number
const green = new Color("#080");
// set to white
green.setHex(0xFFF);

// linear-interpolation support
const inc = 0.3 // increment ratio [0 - 1]
red.lerp(blue, inc);

// OR statically
Color.lerp(Color.red, Color.blue, inc);
```

This is my first node module and I am looking forward on improving and adding new features to this project

Have a look at the various test functions
in the test directory for more examples and use cases
