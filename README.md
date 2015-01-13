# angular-age-filter

[![Build Status](https://travis-ci.org/srph/angular-age-filter.svg)](https://travis-ci.org/srph/angular-age-filter)
[![Author | Shields.io](http://img.shields.io/badge/author-%40srph-blue.svg?style=flat-square)](http://twitter.com/_srph)

An angular filter that converts date to age <del>for lazy people</del>.

## Getting Started

Should work with AngularJS ```>=1.2.0```.

### Installation

**```angular-age-filter``` is available via [Bower]**

```bash
$ bower install angular-srph-age-filter
```

**Include the script to your HTML file**

```html
<!-- other scripts -->
<script src="/path/to/angular-age-filter.js"></script>
```

**Add the ```srph.age-filter``` module in your module's dependencies.**

```js
angular.module('myApp', ['srph.age-filter']);
```

### Usage

**Templates**

```html
{{ '11/23/1996' | age }}
{{ 848678400000 | age }}
```

**Controller, directives, etc..**

```js
app.controller('YoloController', function($scope, $filter) {
	$scope.myDate = $filter('age')('11/23/1996');
	$scope.hisDate = $filter('age')(848678400000);
})
```

**It also accepts a second parameter, testing the birthdate against a given time, such as:**

```html
{{ '11/23/1996' | age: '11/23/2001' }}
```

Outputs: ```5```

## Acknowlegement

This isn't entirely my work. You might want to check the [SO Answer](http://stackoverflow.com/questions/24883308/convert-birthday-to-age-in-angularjs) by [pixelbits](http://stackoverflow.com/users/3661630/pixelbits).

**angular-age-filter** © 2014+, Kier Borromeo (srph). Released under the [MIT](http://mit-license.org/) License.<br>

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)

[MIT]: http://mit-license.org/