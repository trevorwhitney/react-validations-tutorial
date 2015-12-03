var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var clean = require('gulp-rimraf');
var wait = require('gulp-wait');

gulp.task('clean', function () {
  return gulp.src([
    './public/javascripts/*',
    './public/stylesheets/*',
    './public/javascripts',
    './public/stylesheets']
  ).pipe(clean())
    .pipe(wait(1000));
});

gulp.task('build:styles', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({includePaths: ['./bower_components/foundation/scss']}))
    .pipe(gulp.dest('./public/stylesheets'));
});

/* JavaScript */
gulp.task('build:js', function () {
  return browserify({
    debug: true,
    fullPaths: true
  }).transform(babelify)
    .require('./src/app.js', {entry: true})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('build', ['clean', 'build:js', 'build:styles']);

gulp.task('serve', ['build', 'nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ['public/**/*'],
    browser: 'google chrome',
    port: 3001,
    reloadDelay: 1500
  });

  gulp.watch(['./src/*.js', './src/**/*.js'], ['build:js']);
  gulp.watch(['./views/*.jade'], function() { browserSync.reload()});
  gulp.watch([ './scss/*.scss'], ['build:styles']);
});

gulp.task('nodemon', function () {
  return nodemon({
    script: 'bin/www'
  }).on('restart', function() {
    browserSync.reload();
  });
});

gulp.task('default', ['serve']);
