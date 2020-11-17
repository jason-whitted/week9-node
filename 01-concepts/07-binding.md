# Function Binding

Still working with the previous code block:

```js
let id = 0;

const person = {
  name: "Bob",
  age: 42,
  speak: function () {
    id++;
    const prefix = id + ":";
    console.log(id, "My name is", this.name, "and I am", this.age, "years old.");
  }
};
```

If we were to run the following code:
```js
const a = person.speak;
a();
a();
a();
```

What would we expect to see?

What actually prints to the screen is:
```text
1: My name is  and I am undefined years old.
2: My name is  and I am undefined years old.
3: My name is  and I am undefined years old.
```

What happened?

The function `a` now points to the function; however, the runtime binding of `this` gets changed.  In a browser the top level `this` object is the `Window` object.

You can actually change the `this` value on a function using the `.bind()` method of the Function.

If we were to run the following code:
```js
const dog = { name: "Fido", age: 3 };
const b = person.speak.bind(dog);
```

Now `b` is a function, which has it's `this` value bound to the `dog` object.

When you call:
```js
person.speak();
a();
b();
person.speak();
a();
b();
```

The console displays:
```text
1: My name is Bob and I am 42 years old.
2: My name is  and I am undefined years old.
3: My name is Fido and I am 3 years old.
4: My name is Bob and I am 42 years old.
5: My name is  and I am undefined years old.
6: My name is Fido and I am 3 years old.
```

## Aside
The runtime binding that happens can be confusing, which makes keeping track of `this` difficult.
