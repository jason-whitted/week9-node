# Shadowing

An outer scope could define a variable `thing`.

An inner scope could overwrite the scoped variable `thing` with a new variable declaration with the same name.

This is referred to as shadowing.  The inner scope would no longer have access to the outer scope's `thing` variable.

```js
{
  let thing = "thing";
  {
    console.log(0, thing);
    let name = "something";
    {
      // What would happen if we did one of the following?
      // thing = "stuff";
      // let thing = "stuff";
      console.log(1, thing, name);
    }
  }
  console.log(2, thing);
}
```

