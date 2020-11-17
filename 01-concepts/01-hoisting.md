# Hoisting

## Variable Hoisting

Variable declarations are processed before any code is executed.

```js
'use strict';
console.log(something); // What? This variable hasn't been defined yet! Is this an error?!
var something = "Hello";
console.log(something);
```

Due to hoisting the interpreter executes the code as if it had been written like this:

```js
'use strict';
var something; // Hoisted
console.log(something);
something = "Hello";
console.log(something);
```

## Function Hoisting

Function declarations are also hoisted.

```js
'use strict';

sayHello(); // What? This function hasn't been defined yet! Is this an error?!

function sayHello() {
  console.log("Hello");
}
```

Due to hoisting the interpreter executes the code as if it had been written like this:

```js
'use strict';

function sayHello() { // Hoisted
  console.log("Hello");
}

sayHello();
```

## Let / Const
Hoisting can be confusing to keep track of, increasing cognitive load by making variable values harder to predict.

Variables declared with `let` and `const` are not hoisted.

```js
'use strict';
console.log(something); // This would raise an error, since the `something` variable has not been declared.
let something = "Hello";
console.log(something);
```
