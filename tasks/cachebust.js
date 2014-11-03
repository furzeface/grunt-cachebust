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

    var $ = require('cheerio'),
    MD5 = require('MD5');

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      type: 'MD5'
    });

    if (options.type === 'timestamp') {
      var timestamp = new Date().getTime();
    }

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      var contents = file.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        return grunt.file.read(filepath);
      }).join('');

      var $scripts = $(contents).find('script'),
      $styles = $(contents).find('link[rel=stylesheet]');

      // Loop the stylesheet hrefs
      for (var i = 0; i < $styles.length; i++) {
        var styleHref = $styles[i].attribs.href;
        if (options.type === 'timestamp') {
          contents = contents.replace(styleHref, styleHref + '?t=' + timestamp);
        } else {
          contents = contents.replace(styleHref, styleHref + '?hash=' + MD5(styleHref));
        }
      }

      // Loop the script srcs
      for (var i = 0; i < $scripts.length; i++) {
        var scriptSrc = $scripts[i].attribs.src;
        if (options.type === 'timestamp') {
          contents = contents.replace(scriptSrc, scriptSrc + '?t=' + timestamp);
        } else {
          contents = contents.replace(scriptSrc, scriptSrc + '?hash=' + MD5(scriptSrc));
        }
      }

      // Write the destination file
      grunt.file.write(file.dest, contents);

      // Print a success message
      grunt.log.writeln('File "' + file.dest + '" busted!');
    });
});

};
