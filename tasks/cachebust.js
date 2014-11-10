/*
 * grunt-cachebust
 * https://github.com/furzeface/grunt-cachebust
 *
 * Copyright (c) 2014 Daniel Furze
 * Licensed under the MIT license.
 */

 'use strict';

 module.exports = function (grunt) {
  grunt.registerMultiTask('cachebust', 'Append a timestamp to your assets to bust that cache!', function () {
    var cachebust = require('cachebust');

    // Merge task-specific and/or target-specific options with these defaults
    var options = this.options({
      type: 'MD5'
    });

    // Loop the files
    this.files.forEach(function (file, next) {
      var src = file.src[0],
      dest = file.dest;

      if (!grunt.file.exists(src)) {
        grunt.log.warn('Source file "' + src + '" not found.');
        return next();
      }

      // Call the Node module
      var processedContents = cachebust.busted(grunt.file.read(src), options);

      // Write the file
      grunt.file.write(file.dest, processedContents);
      // Print a success message
      grunt.verbose.writeln('File ' + file.dest + ' busted!');
    });
  });
};
