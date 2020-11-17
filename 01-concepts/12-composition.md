# Composition
Destructuring "unpacks" values.  Composition allows you to do the opposite. 

-----
## Object Composition
Given this variables:
```js
const street = "1234 Main St.";
const s = "CA";
const other = {
  city: "Beverly Hills",
  zip: "90210",
  country: "US",
};
```

If we wanted to compose a new object containing the `street` and `state`:
```js
const address = {
  street: street,
  state: s,
};
```
This creates:
- `street` property equal to the `street` value
- `state` property equal to the `s` value

The variable name is optional if it is the same as the property name.
```js
const address = {
  street,
  state: s,
};
```

### Spread
The **spread** syntax performs the oppositve of the **rest** syntax.

```js
const address = {
  street,
  state: s,
  ...other,
}
```
This creates:
- `street` property equal to the `street` value
- `state` property equal to the `s` value
- `city` property equal to the `other.city` value
- `zip` property equal to the `other.zip` value
- `country` property equal to the `other.country` value

**Important!** Object spread syntax is safe with `null` and `undefined`!
```js
const address = {
  street,
  state: s,
  ...null,
  ...undefined,
}
```
This will not raise an error.  The result is an object with only `street` and `state` properties.

-----
## Array Composition
Given the variables:
```js
const first = "Apples";
const second = "Bananas";
const junk = ["Coconuts", "Grapes", "Strawberries"];
```

If we wanted to compose a new array containing the `first` and `second` values:
```js
const fruits = [first, second];
// ["Apples", "Bananas"]
```

### Spread
We could spread another array during array composition.
```js
const fruits = [first, second, ...junk];
// ["Apples", "Bananas", "Cocounuts", "Grapes", "Strawberries"]
```

**Important!** Array spread syntax is **NOT** safe with `null` and `undefined`!
```js
const fruits = [
  first,
  second,
  ...junk,
  ...null, // Error!
  ...undefined, // Error!
]
```
