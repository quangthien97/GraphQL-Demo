require('@babel/register')({
  presets: ['@babel/preset-env']
});
require('@babel/polyfill')
require('./index')