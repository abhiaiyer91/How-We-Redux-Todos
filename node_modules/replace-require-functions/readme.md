# replace-require-functions [![Build Status](https://travis-ci.org/meteor/replace-require-functions.svg?branch=master)](https://travis-ci.org/meteor/replace-require-functions)

> Replace the require function for certain modules


## Install

```
$ npm install --save replace-require-functions
```


## Usage

```js
var replaceRequires = require('replace-requires');

// Call it on a string of JS code
replaceRequires('require("foo")', {foo: 'bar'});

// Returns the file, but with the `require` function replaced
bar("foo")

// Call it again
replaceRequires('require("foo/fooz")', {foo: 'bar'});

// Also works on requires with paths; matches the first path segment
bar("foo/fooz")
```

## License

MIT © [Ben Drucker](http://bendrucker.me)
