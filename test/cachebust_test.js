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

    test.equal(actual, expected, 'should append an MD5 hash as a query string to CSS and JS file references.');

    test.done();
  },
  custom_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_options.html'),
    expected = grunt.file.read('test/expected/custom_options.html');

    test.notEqual(actual, expected, 'should append a timestamp as a query string to CSS and JS file references.');

    test.done();
  }
};
