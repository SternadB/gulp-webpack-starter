<p align="center">
	<img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
	<img height="257" width="257" src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png">
  	<p align="center">Gulp-webpack starter project</p>
</p>

## Gulp-webpack starter project

Gulp-webpack starter project combine gulp and webpack technology for compiling js and scss files. It's serves as initial framework for projects build with ES6 and SASS. It's also contains demo ES6 project.

- **Gulp** - gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.
- **Webpack** - webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

## Content
- **Gulpfile.js** - define compile settings, gulp plugins and tasks
- **Webpack.config.js** - define configuration for webpack (compiling js files)
- **ES6 cars project** - demo project build in ES6
- **Style structure** - demonstrate style structure with .scss

## Requirements
- **NPM version** - 6.14.4
- **NODE version** - 12.16.1

## Installation and usage
- **NPM modules** - npm install (install all required plugins)
- **Gulp build task** - gulp build (run all gulp tasks)
- **Gulp script task** - gulp gulp:script (run script task)
- **Gulp sass task** - gulp gulp:sass (run sass task)

## Gulp plugins
- gulp-babel (JS compiler)
- gulp-plumber (prevent pipe breaking coused by errors from gulp plugins)
- gulp-concat (concatenate js files)
- gulp-sass (SASS compiler)
- gulp-notify (messages)
- sourcemaps (maps CSS back to SASS files)
- sassGlob (allow to use glob imports in scss files)
- imageMin (minify image format - png, jpeg, gif and svn)
- gulp-browser-sync (create external link for browsing)
- webpack-stream (adding webpack tehnology)
- webpackconfig (webpack file with configuration)



