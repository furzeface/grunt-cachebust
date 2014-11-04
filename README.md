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
[![Build Status][travis-image]][travis-url]
[![devDependency Status][dev-dependency-image]][dev-dependency-url]
[![Stories in Ready][waffle-image]][waffle-url]

To contribute either check the [Waffle board](https://waffle.io/furzeface/grunt-cachebust) or [GitHub issues](https://github.com/furzeface/grunt-cachebust/issues) then work away:

1. [Fork it](https://github.com/furzeface/grunt-cachebust/fork)!
2. Create your feature branch: `git checkout -b feature/awesome-feature`
3. Run: `npm install` for dependencies and `npm link` for local development 
4. Run: `grunt develop` to build and watch for changes
5. Commit your changes: `git commit -m 'feat(Project): Adds awesome feature'`
6. Push to the branch: `git push origin feature/awesome-feature`
7. Submit a [pull request](https://github.com/furzeface/grunt-cachebust/pulls) :+1:

Tips:
* In lieu of a formal styleguide, take care to maintain the existing coding style. 
* Add unit tests for any new or changed functionality. 
* Test your code using [Grunt](http://gruntjs.com): `grunt test`
* Install [editorconfig-sublime](https://github.com/sindresorhus/editorconfig-sublime) for Sublime Text to help with consistent code formatting.
* Commit messages loosely adhere to [these guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).
* Versioning adheres to [Semver](http://semver.org).

## Release History
- 2014-11-03 v0.2.0 - Adds support for MD5 hashing as default, timestamp optional.
- 2014-11-03 v0.1.0 - Initial release.

[![NPM](https://nodei.co/npm/grunt-cachebust.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/grunt-cachebust)

## License
Copyright (c) 2014 Daniel Furze. 

Licensed under the MIT license: [http://danielfurze.mit-license.org](http://danielfurze.mit-license.org)


[npm-url]: http://badge.fury.io/js/grunt-cachebust
[npm-image]: https://badge.fury.io/js/grunt-cachebust.svg
[travis-url]: http://travis-ci.org/furzeface/grunt-cachebust
[travis-image]: https://secure.travis-ci.org/furzeface/grunt-cachebust.svg?branch=master
[waffle-url]: https://waffle.io/furzeface/grunt-cachebust
[waffle-image]: https://badge.waffle.io/furzeface/grunt-cachebust.svg?label=ready&title=Ready
[dev-dependency-url]: https://david-dm.org/furzeface/grunt-cachebust#info=devDependencies
[dev-dependency-image]: https://david-dm.org/furzeface/grunt-cachebust/dev-status.svg
