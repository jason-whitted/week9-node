# Libraries

**Libraries**, **Packages**, **Modules**, **APIs** are synonyms.

## Libraries in the Browser
In the browser you get several built-in APIs:
- Document Object Model (DOM)
- fetch
- etc.

Additional libraries can be included using a `<script>` tag and specifying a `src` attribute.

```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="myLibrary.js"></script>
<script>
  // Now we have access to:  
  // - jQuery via `$()`
  // - moment via `moment()`
  // - Whatever is included in myLibrary.js
</script>
```

## Packages in Node
In NodeJS you get several built-in APIs:
- File System
- [etc.](https://nodejs.org/dist/latest-v15.x/docs/api/)

Packages are managed by `npm` (Node Package Manager).  When you install `NodeJS` it comes bundled with `npm`.

## npmjs
You can browse available packages on [https://npmjs.com](https://npmsjs.com).

### Yarn
Another tool, `yarn`, is commonly used in place of `npm`, but to use this you would need to install it from [https://yarnpkg.com](https://yarnpkg.com).

### Installation
Node has you predefine your packages in your `package.json` file.

When you are in a directory that contains a `package.json` file you can install the specified packages with any of the following:
```bash
# Via NPM
npm install
npm i
# Via Yarn
yarn install
yarn
```
