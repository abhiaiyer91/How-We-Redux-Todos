'use strict';

var detective = require('detective');
var patch = require('patch-text');
var hasRequire = require('has-require');
var extend = require('xtend');
var mapObject = require('map-obj');

// replacements in the form:
// moduleName: "RequireFunc"
// replaces all occurences of require("moduleName*") with
// RequireFunc("moduleName*")
module.exports = function externalize (code, replacements) {
  var patchRanges = detective.find(code, {nodes: true}).nodes
    .filter(requireLiteral)
    .map(function (node) {
      var requireString = node.arguments[0].value.toString();
      var replaceRequireFunc = null;

      mapObject(replacements, function (moduleName, requireFunc) {
        if (requireString === moduleName ||
            requireString.indexOf(moduleName + "/") === 0) {
          replaceRequireFunc = requireFunc;
        }

        return requireFunc;
      });

      if (replaceRequireFunc) {
        return extend(node, {
          replacement: replaceRequireFunc + '("' + requireString + '")'
        });
      }

      return node;
    })
    .filter(function (node) {
      return node.replacement != null
    });

  return patch(code, patchRanges);
}

function requireLiteral (node) {
  var arg = node.arguments[0];
  return arg && arg.type === 'Literal';
}
