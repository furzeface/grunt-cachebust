/*
* grunt-cachebust
* https://github.com/furzeface/grunt-cachebust
*
* Copyright (c) 2014 Daniel Furze
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {

  // Load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    config: {
      gruntfile: 'Gruntfile.js',
      tasks: 'tasks',
      test: 'test'
    },

    jshint: {
      all: [
      '<%= config.gruntfile %>',
      '<%= config.gruntfile %>/**/*.js',
      '<%= config.test %>/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: [
      'tmp'
      ]
    },

    // Configuration to be run (and then tested).
    cachebust: {
      /* jshint camelcase: false */
      default_options: {
        files: [
        {
          expand: true,
          cwd: '<%= config.test %>/fixtures',
          src: [
          'default_options.html'
          ],
          dest: 'tmp/'
        }
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: [
      '<%= config.test %>/*_test.js'
      ]
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('test', [
    'clean',
    'cachebust',
    'nodeunit'
    ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', [
    'jshint',
    'test'
    ]);
};
