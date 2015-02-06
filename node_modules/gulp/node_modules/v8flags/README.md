# v8flags  [![Build Status](https://secure.travis-ci.org/tkellen/node-v8flags.png)](http://travis-ci.org/tkellen/node-v8flags)
> Get available v8 flags.

[![NPM](https://nodei.co/npm/v8flags.png)](https://nodei.co/npm/v8flags/)

## Example
```js
const v8flags = require('v8flags');

v8flags.fetch(); // [ '--use_strict',
                 //   '--es5_readonly',
                 //   '--es52_globals',
                 //   '--harmony_typeof',
                 //   '--harmony_scoping',
                 //   '--harmony_modules',
                 //   '--harmony_proxies',
                 //   '--harmony_collections',
                 //   '--harmony',
                 // ...
```

## Release History

* 2014-05-09 - v0.1.0 - initial release
* 2014-09-02 - v0.2.0 - cache flags
* 2014-09-02 - v0.3.0 - keep -- in flag names
* 2014-09-03 - v1.0.0 - first major version release
* 2014-11-17 - v1.0.2 - get node executable from `process.env._`
* 2014-11-17 - v1.0.3 - get node executable during npm install via `process.env.NODE`
* 2014-11-18 - v1.0.4 - wrap node executable path in quotes
