# Let vs. Const

Variables declared with `let` are allowed to be reassigned values.

```js
let a;   // undefined
a = 123; // 123
a++;     // 124
a *= 2;  // 248
```

Variables declared with `const` must be assigned a value during declaration and cannot be reassigned.

```js
const a; // Error
```

```js
const a = 123;
a++;     // Error
```

## Aside
Many new JavaScript developers are confused by the `const` keyword assuming this means that the value is immutable.  This is not the case!  The `const` keyword means that the variable cannot be reassigned.

Consider the following:

```js
const arr = ["a", "b"];
arr.push("c");
arr.push("d");
console.log(arr); // ["a", "b", "c", "d"]
```

The variable `arr` will always point to the same array in memory.

But the array itself is allowed to mutate.

## Var Is Dead
- Use `const` and `let` instead of `var`
- Prefer `const` over `let`
- Use `let` when you **need** to reassign the value later in your code
