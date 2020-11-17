# Destructuring

> The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
>
> **-MDN**

-----
## Object Destructuring
Given this object:
```js
const address = {
  street: "1234 Main St.",
  city: "Beverly Hills",
  state: "CA",
  zip: "90210",
  country: "US",
};
```

If we wanted to refer to only the `city` and `state`, we could create two variables:
```js
const city = address.city;
const state = address.state;
```

With object destructing we could write this as:
```js
const { city, state } = address;
```
This creates:
- `city` variable referencing `address.city`
- `state` variable referencing `address.state`

By default creates variables named exactly what the object properties are.

### Assigning to new variable names

You can optionally specify different variable names in the destructing assignment:
```js
const { city, state: s } = address;
```

This creates:
- `city` variable reference `address.city`
- `s` variable referencing `address.state`

### Rest
> Rest properties collect the remaining own enumerable property keys that are not already picked off by the destructuring pattern.

Huh?!

```js
const { city, state, ...other } = address;
```
This creates:
- `city` variable equal to `"Beverly Hills"`
- `state` variable equal to `"CA"`
- `other` variable equal to a new object `{ street: "1234 Main St.", zip: "90210", country: "US" }`

-----
## Array Destructuring
Given this array:
```js
const fruits = ["Apples", "Bananas", "Coconuts", "Grapes", "Strawberries"];
```

If we wanted to refer only to the first and second elements of the array we could create two variables:
```js
const first = fruits[0];
const second = fruits[1];
```

With array destructuring we could write this as:
```js
const [first, second] = fruits;
```

### Rest
You can also use the **rest** syntax to pack the unspecified values into another array.

```js
const [first, second, ...junk] = fruits;
```
This creates:
- `first` variable equal to `"Apples"`
- `second` variable equal to `"Bananas"`
- `junk` variable equal to `["Coconuts", "Grapes", "Strawberries"]`

### Ignoring some values
If we only wanted the first and third values, but didn't care about the second value:
```js
const [first, , third] = fruits;
```
This creates:
- `first` variable equal to `"Apples"`
- `third` variable equal to `"Cocounuts"`
