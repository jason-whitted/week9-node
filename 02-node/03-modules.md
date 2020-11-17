# Modules

In the browser there was a big problem with global variable contamination.

## The Problem
For example:
```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
  // printJunk.js
  var a = "aaa";
  var _ = "bbb";
  var $ = "ccc";

  function printJunk() {
    console.log(a, _, $);
  }
</script>
```

In this example, we import the jQuery library, which provides a variable `$` globally.

Then we run the `printJunk` script which inadvertently steps on the `$` variable.

Now the variable `$`, which is supposed to be jQuery, is `"ccc"` instead.  Not very useful.

## The Solution
Node decided to compartmentalize these individual scripts to keep their variables separate.

In a script if you want to include a library you need to `require()` it.  And if you want your script to export something you need to specify what it is exporting via `modules.exports`.

```js
// myLibrary.js
function moment(value) {
  console.log("This function does something", value);
}

module.exports = moment;
```

The `myLibrary.js` script creates a `moment` function and it returns it as the default export for this module.

```js
// program.js
const moment = require("moment"); // Defined in package.json as a package
const myMoment = require("./myLibrary.js"); // A local script that has an export

const now = moment();
myMoment(now);
```

The `program.js` file imports the `moment` package and places the default export of it into a variable named `moment`.

It then processes the `./myLibrary.js` script and places its default export into a `myMoment` variable.

There is no collision here with the two functions named `moment`.
