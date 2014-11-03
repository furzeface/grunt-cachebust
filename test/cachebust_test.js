'use strict';

var grunt = require('grunt');

exports.cachebust = {
  /* jshint camelcase: false */

  setUp: function (done) {
    done();
  },
  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.html'),
    expected = grunt.file.read('test/expected/default_options.html');
    test.notEqual(actual, expected, 'should append query strings to CSS and JS file references.');

    test.done();
  }
};
