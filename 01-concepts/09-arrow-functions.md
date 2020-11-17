# Arrow Functions

> An **arrow function expression** is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

While `const` and `let` can completely make `var` obsolete, there are still cases when you need to use a traditional `function` instead of an arrow function.

A traditional function:
```js
// function declaration
function add(a, b) {
  console.log("calculating", a, "+", b);
  const c = a + b;
  console.log("result", c);
  return c;
}
// - or -
// function expression
const add = function (a, b) {
  console.log("calculating", a, "+", b);
  const c = a + b;
  console.log("result", c);
  return c;
};
```

> NOTE: There is no semicolon following a function declaration, but there is a semicolon following a function expression

This could be rewritten as an arrow function:
```js
const add = (a, b) => {
  console.log("calculating", a, "+", b);
  const c = a + b;
  console.log("result", c);
  return c;
};
```

The term **arrow function** is referencing to the `=>` operator that it uses during declaration.

This helps tie in our mental model (method signature) of the `add` function:
```js
(Number, Number) => Number
```

> Two numbers are passed in as parameters, some calculation is performed, and a number is returned.

## Syntax
You place parenthesis around the input parameters:
```js
const a = () => {};
const b = (x) => {};
const c = (x, y) => {};
const d = (x, y, z) => {};
```

If there is exactly one paramter the parenthesis are optional:
```js
const b = (x) => {};
const b = x => {};
```

If the arrow function's body consists only of a return statement:
```js
const add = (a, b) => {
  return a + b;
}
```

The wavy braces and `return` keyword are optional:
```js
const add = (a, b) => a + b;
```

After the `=>` we use wavy braces to indicate the function body.  This means that if you want to return an object:
```js
const getThing = () => {
  return { 
    name: "thing", 
    size: 3,
  };
}
```

We would get an error if we tried to write:
```js
const getThing = () => {
  name: "thing", // Error!
  size: 3,
};
```

The interpreter thinks after the `=>` that the `{` is indicating the function body (statement block) and it tries to process `name: "thing"` as a statement, which is not valid.  Instead we need to tell the interpreter that we want to return an object literal.  We do that using parenthesis around the object literal.

```js
const getThing = () => ({
  name: "thing",
  size: 3,
});
```

## Auto-binding

Arrow functions have their `this` auto-bound.  An arrow function's `this` is not subject to runtime binding and cannot be rebound via `.bind()`.

This rigidity means that an arrow function's `this` is much more predictable.

> **Differences & Limitations:**
> - Does not have its own bindings to `this` or `super`, and should not be used as methods.
> - ...
> 
> **-MDN**

## Aside
Next week we will be learning about Object-Oriented Programming (OOP), where we can use constructor functions to handle `this` a little more reasonably.

In general though, `this` is normally a **Code Smell**.

> In computer programming, a **code smell** is any characteristic in the source code of a program that possibly indicates a deeper problem. Determining what is and is not a code smell is subjective, and varies by language, developer, and development methodology.
> 
> **-Wikipedia**

It's normally more clear for a function to receive it's parameters explicitly and not rely on "magic" values like `this`.

When creating a generic speak function, doesn't this make more sense?

```js
let id = 0;
const speak = speaker => {
  id++;
  const prefix = id + ":";
  console.log(prefix, "My name is", speaker.name, "and I am", speaker.age, "years old.");
}
```

Now you can call it with:
```js
const person = { name: "Bob", age: 42 };
const dog = { name: "Fido", age: 3 };
speak(person);
speak(dog);
```

No more confusing `this` and it works in both cases as you would expect.