'use strict';

var _require = require('react');

var PropTypes = _require.PropTypes;

var storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

module.exports = storeShape;