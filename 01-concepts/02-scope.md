# Scope

> The current context of execution. The context in which values and expressions are "visible" or can be referenced.  If a **variable** or other expression is not "in the current scope," then it is unavailable for use.  Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
>
> **-MDN**

Let's examine the following code and then try to figure out what variables are available at each line of code.

```js
for (var i = 0; i < 3; i++) {
  var thing = "thing";
  for (var j = 0; j < 3; j ++) {
    var product = i * j;
  }
}

console.log(i, j, thing, product);
```

Hoisting would cause this code to be interpreted as:
```js
var i;
var thing;
var j;
var product;

for (i = 0; i < 3; i++) {
  thing = "thing";
  for (j = 0; j < 3; j ++) {
    product = i * j;
  }
}

console.log(i, j, thing, product);
```

This means the variable scope would be:
```js
var i, thing, j, product; // Hoisted

// Scope: i, thing, j, product
for (i = 0; i < 3; i++) {
  // Scope: i, thing, j, product
  thing = "thing";
  // Scope: i, thing, j, product
  for (j = 0; j < 3; j ++) {
    // Scope: i, thing, j, product
    product = i * j;
    // Scope: i, thing, j, product
  }
}

// Scope: i, thing, j, product
console.log(i, j, thing, product);
```

Let's write this code to use `let` instead of `var` and do this exercise again.

```js
for (let i = 0; i < 3; i++) {
  let thing = "thing";
  for (let j = 0; j < 3; j ++) {
    let product = i * j;
  }
}

console.log(i, j, thing, product);
```

```js
// Scope: (empty)
for (let i = 0; i < 3; i++) {
  // Scope: i
  let thing = "thing";
  // Scope: i, thing
  for (let j = 0; j < 3; j ++) {
    // Scope: i, thing, j
    let product = i * j;
    // Scope: i, thing, j, product
  }
}

// Scope: (empty)
console.log(i, j, thing, product); // This would raise an error, since we 
                                   // are referencing variables that have 
                                   // not been declared
```

## Aside

Every statement block creates a scope.

```js
function fn() {
  let a;
  // scope: a
}

while (true) {
  let b;
  // scope: b
}

if (true) {
  let c;
  // scope: c
}
```

```js
function fn() {
  let a;
  // scope: a
  while (true) {
    let b;
    // scope: a, b
    if (true) {
      let c;
      // scope: a, b, c
    }
  }
}
```

Scope generation isn't created by the `function`, `while`, or `if` keywords, but instead by their corresponding statement blocks.

Technically we can create scopes with statement blocks by themselves.

```js
{
  let a;
  // scope: a
  {
    let b;
    // scope: a, b
    {
      let c;
      // scope: a, b, c
    }
  }
}
```

I'm not recommending to normally write code like this; however, it does allow a clearer demonstration of scope concepts.

This is an important concept to understand though, since it is common to do this in `switch` statements.
