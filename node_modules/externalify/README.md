# externalify

Browserify transform that lets you require external modules from any function that follows the require API.

Much like the `external` option to Browserify, but lets you specify a custom name for the `require` function to avoid creating a global `require` symbol.

#### Using via JavaScript

```js
var browserify = require('browserify');

// configure what we want to externalize
var externalifyConfig = { external: { jquery: '$', three: 'THREE' } };

browserify()
  .require(require.resolve('./main'), { entry: true })
  .transform('exposify', externalifyConfig)
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(path.join(__dirname, 'bundle.js'), 'utf8'))
```

#### Using via Commandline

Use the Browserify transform option:

```sh
browserify --debug -t [ exposify --external [ --jquery=$ --three=THREE ] ] exposify main > bundle.js
```

## Installation

```sh
npm install exposify
```

## License

MIT
