'use strict';

/**
 * Provides the callback function with the complete process.argv, appending
 *   piped data if exists
 *
 * @param [func] cb - The callback function
 */
module.exports = function (cb) {
  if (process.stdin.isTTY) {
    cb(process.argv);

  } else {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    // Gather all data
    var content = '';
    process.stdin.on('data', function (data) {
      content += data;
    });

    // Save when finished
    process.stdin.on('end', function () {
      var args = process.argv.slice();
      args.push(content);
      cb(args);
    });
  }
}
