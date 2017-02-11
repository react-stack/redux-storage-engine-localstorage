# [redux-storage-engine-indexed-db][]

[![build](https://travis-ci.org/react-stack/redux-storage-engine-localstorage.svg?branch=master)](https://travis-ci.org/react-stack/redux-storage-engine-localstorage)
[![dependencies](https://david-dm.org/react-stack/redux-storage-engine-localstorage.svg)](https://david-dm.org/react-stack/redux-storage-engine-localstorage)
[![devDependencies](https://david-dm.org/react-stack/redux-storage-engine-localstorage/dev-status.svg)](https://david-dm.org/react-stack/redux-storage-engine-localstorage#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-engine-localstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localstorage)
[![npm version](https://img.shields.io/npm/v/redux-storage-engine-localstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localstorage)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-engine-localstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-localstorage)

`window.indexedDB` based engine for [redux-storage][].

## Installation

    npm install --save redux-storage-engine-indexed-db

## Usage

Stores everything inside `window.indexedDB`.

```js
import createEngine from 'redux-storage-engine-indexed-db';

const engine = createEngine('my-dbnamey', 'my-db-store');
```


## License

    The MIT License (MIT)

    Copyright (c) 2016- Prateek Bhatnagar <prateek89born@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
