> # broadleaf
common typescript and es6 helper functions

> ### Usage
```javascript
const broadleaf = require("broadleaf");
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

This is my first node module and I am looking forward to improving and add new features to this project

Have a look at the various test functions
in the test directory for more examples and use cases
