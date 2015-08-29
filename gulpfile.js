var gulp = require('gulp'),
  babel = require('gulp-babel'),
  webpack = require('webpack-stream'),
  webpackConfig = require('./webpack.config'),
  nib = require('nib'),
  stylus = require('gulp-stylus'),
  nodemon = require('gulp-nodemon'),
  run = require('run-sequence')
 
var paths = {
  babel: './src/*/*.js',
  stylMain: './src/styl/main.styl',
  css: './build/css'
}

gulp.task('start', function() {
  nodemon({
    script: 'server.js'
  , ext: 'js'
  , env: { 'NODE_ENV': 'development' }
  })
})
 
gulp.task('babel', function() {
  return gulp.src(paths.babel)
    .pipe(babel({
        stage: 0
      }))
    .pipe(gulp.dest('./core'))
})
 
gulp.task('webpack-dev', function() {
  return gulp.src('./src/app/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build/js'))
})
 
gulp.task('webpack', function() {
  return gulp.src('./src/app/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build/js'))
})
 
gulp.task('stylus', function() {
  return gulp.src(paths.stylMain)
    .pipe(stylus({
      use: [nib()],
      import: ['nib']
    }))
    .pipe(gulp.dest(paths.css))
})
 
gulp.task('watch', function() {
  gulp.watch(paths.babel, ['babel'])
})
 
gulp.task('build', ['babel', 'webpack', 'stylus'])
 
gulp.task('build-dev', function(cb) {
  run('babel', 'webpack-dev', 'stylus', cb)
})
 
gulp.task('default', function(cb) {
  run('build-dev', 'watch', 'start', cb)
})