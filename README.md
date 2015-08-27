# cli-pipe

> Accept piped data as an argument to your CLI app

This module allows you to accept piped data in your application along with
directly provided arguments. It returns a simple array of all the arguments and
flags, with any piped data pushed onto the end of the array.

## Usage

First, install with `npm`:

```bash
$ npm install cli-pipe
```

Then include and call:

```js
// File: test.js
var get_args = require('cli-pipe');

get_args(function (args) {
  console.log(args);
});
```

Run it like so:

```bash
$ node test.js first second    # Arguments provided directly
[ 'node', '/path/to/dir/test.js', 'first', 'second' ]

$ cat somefile.txt | node test.js first   # Piped data and direct args
[ 'node', '/path/to/dir/test.js', 'first', 'content of somefile.txt' ]
```

This module does not alter `process.argv`, so it is compatible with most or all
other CLI helper modules (e.g. commander, meow).

```js
// Example with commander
var program  = require('commander'),
    get_args = require('cli-pipe');

get_args(program.parse);
```

