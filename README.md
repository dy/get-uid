# get-uid [![Build Status](https://travis-ci.org/dfcreative/get-uid.svg?branch=master)](https://travis-ci.org/dfcreative/get-uid) [![Code Climate](https://codeclimate.com/github/dfcreative/get-uid/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/get-uid)

Simple random id generator.

`$ npm install get-uid`

```js
	var getUid = require('get-uid');

	getUid(); //1178851014
	getUid(); //811233864
	...
```


Yet another one uid generator? There are already some:

* gen-uid
* unique
* uid
* uid2
* uid-util
* micro-uid
* component-uid
* j-uid
* unique-id
* uniqid
* short-uid
* puid
* amp-unique-id
* genuid
* simple-uid
* random-id
* smart-id
* uuid-pure
* simple-random-id
* nid

This one is just shorter and simpler, almost like `id++`, but with no bad side-effects. The technique is used innerly by [Financial Times’ WeakSet](https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/WeakSet/polyfill.js), [Web-components’ WeakMap](https://github.com/webcomponents/webcomponentsjs/blob/master/src/WeakMap/WeakMap.js) and so on.


[![NPM](https://nodei.co/npm/get-uid.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/get-uid/)

<a href="UNLICENSE"><img src="http://upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" width="20"/></a>