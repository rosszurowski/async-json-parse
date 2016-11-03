
# async-json-parse

Parses JSON asynchronously, rather than the usual sync `JSON.parse` interface. Helpful for times when you need to parse large amounts of JSON without blocking the UI from rendering.

```js
var parse = require('async-parse-json')

parse('{"foo":"bar"}')
	.then(res => console.log(res))
// returns { foo: 'bar' }
```

This module was inspired by the [technique described by Mohsen Azimi](http://azimi.me/2015/07/30/non-blocking-async-json-parse.html), which uses the [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) to parse JSON asynchronously. For browsers that don't support `window.fetch`, parsing falls back to synchronous methods.

### Install

```bash
npm install async-json-parse
```

### Usage

#### `parse(json)`

Parses `json`, a stringified JSON object. Returns a promise that resolves to the parsed JSON string.


### License

MIT
