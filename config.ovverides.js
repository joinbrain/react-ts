const { addWebpackAlias, override} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    'styled-components': path.resolve(
      __dirname,
      'node_modules',
      'styled-components',
    ),
  }),
);
