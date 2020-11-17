# This

Consider this code:

```js
let id = 0;

const person = {
  name: "Bob",
  age: 42,
  speak: function () {
    id++;
    const prefix = id + ":";
    console.log(prefix, "My name is", this.name, "and I am", this.age, "years old.");
  }
};
```

The function that was declared is available via the `speak` property on the `person` object.  We refer to this as the `speak` **method**.

If we were to call the `person.speak` method a few times:
```js
person.speak();
person.speak();
person.speak();
```

We receive the following in the console:
```text
1: My name is Bob and I am 42 years old.
2: My name is Bob and I am 42 years old.
3: My name is Bob and I am 42 years old.
```

Let's examine just the function a bit more:
```js
function () {
  id++;
  const prefix = id + ":";
  console.log(id, "My name is", this.name, "and I am", this.age, "years old.");
}
```

- The variable `id` was referenced (but not declared within the function), which means it is in the outer scope.
- The variable `prefix` was declared and set to a value.  It is not available to the outer scope.  It is private to this method.
- The values `this.name` and `this.age` were referenced, which mean that `this` is available in scope.

But what is `this`?  Where did it come from?

> A **function's `this` keyword** behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.
>
> **- MDN**

In most other languages `this` is a keyword available to methods that references the object that contains the method.

In the `speak` method, `this` would refer to the `person` object.
