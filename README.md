# grunt-cachebust

> Append a timestamp to your assets to bust that cache!

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cachebust --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cachebust');
```

## The "cachebust" task

### Overview
In your project's Gruntfile, add a section named `cachebust` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cachebust: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  cachebust: {
  }
})
```

#### Custom Options

```js
grunt.initConfig({
  cachebust: {
    options: {
    },
    files: {
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 2014-11-03 v0.2.0 - Adds support for MD5 hashing as default, timestamp optional.
- 2014-11-03 v0.1.0 - Initial release.

## License
Copyright (c) 2014 Daniel Furze. Licensed under the MIT license.
