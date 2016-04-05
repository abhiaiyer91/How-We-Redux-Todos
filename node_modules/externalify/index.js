'use strict';

var transformify = require('transformify');
var through = require('through2');
var mapObject = require('map-obj');
var replaceRequireFunctions = require('replace-require-functions');
var globalize = require('globo');

exports = module.exports = function externalifyTransform(file, opts) {
  opts = opts || {};
  opts.filePattern = opts.filePattern || exports.defaultFilePattern;

  if (opts.filePattern && !opts.filePattern.test(file)) return through();

  if (typeof opts.external !== 'object') {
   throw new Error('Please pass { external: { ... } } to transform');
  }

  var tx = transformify(exports.externalify.bind(null, opts.external));
  return tx(file);
};

exports.defaultFilePattern = /\.js$/;

exports.externalify = function externalify(replacements, code) {
  // Use globo to make sure global references work
  replacements = mapObject(replacements, function (moduleId, globalId) {
    return [moduleId, globalize(globalId)]
  });

  return replaceRequireFunctions(code, replacements)
};

