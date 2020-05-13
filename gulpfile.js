var gulp 			= require('gulp');

/**
*Import gulp plugins
* - gulp-babel (JS compiler)
* - gulp-plumber (prevent pipe breaking coused by errors from gulp plugins)
* - gulp-concat (concatenate js files)
* - gulp-sass (SASS compiler)
* - gulp-notify (messages)
* - sourcemaps (maps CSS back to SASS files)
* - sassGlob (allow to use glob inports in scss files)
* - gulp-browser-sync (create external link for browsing)
* - webpack-stream (adding webpack tehnology)
* - webpackconfig (webpack file with configuration)
*/
const babel			= require('gulp-babel');
const plumber		= require('gulp-plumber');
const concat		= require('gulp-concat');
const sass			= require('gulp-sass');
const notify		= require('gulp-notify');
const sourcemaps	= require('gulp-sourcemaps');
const sassGlob		= require('gulp-sass-glob');
const browserSync	= require('browser-sync').create();

//Webpack config
const webpack 		= require('webpack-stream');
const webpackconfig	= require('./webpack.config.js');

//Set sass compiler
sass.compiler = require('node-sass');

//Task script
gulp.task('script', function(done){
	return gulp.src('./src/components/main.js')
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(webpack(webpackconfig), webpack)
		.pipe(gulp.dest('./dest/js'))
		.pipe(browserSync.stream())
		.pipe(notify({message: "JS task completed!"}))
});

//Task style
gulp.task('sass', function(){
	return gulp.src('./sass/**/*.scss')
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({
			style: 'compressed',
			errLogToConsole: false,
			onError: function(error_message) {
				return notify().write(error_message);
			}
		}))
		.pipe(sourcemaps.write())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./dest/css'))
		.pipe(browserSync.stream())
		.pipe(notify({message: "Style task completed!"}))
});

//Script task
gulp.task('gulp:script', gulp.series(['script']));

//SASS task
gulp.task('gulp:sass', gulp.series(['sass']));

//Default task
gulp.task('default', gulp.series(['script', 'sass']))

//Build task
gulp.task('build', function(){
	browserSync.init({
		server: "./dest"
	})
	gulp.watch('./src/components/**/*.js', gulp.series(['script']));
	gulp.watch('./sass/**/*.scss', gulp.series(['sass']));
})

