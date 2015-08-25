var gulp = require('gulp'),
  babel = require('gulp-babel'),
  webpack = require('webpack-stream'),
  webpackConfig = require('./webpack.config')

var paths = {
  babel: './src/*/*.js'
}

gulp.task('babel', function() {
  return gulp.src(paths.babel)
    .pipe(babel({
        stage: 1
      }))
    .pipe(gulp.dest('./core'))
})

gulp.task('webpack-dev', function() {
  return gulp.src('./src/app/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('watch', function() {
  gulp.watch(paths.babel, ['babel'])
})

gulp.task('build', ['babel'])

gulp.task('build-dev', ['babel', 'webpack-dev'])

gulp.task('default', ['build-dev', 'watch'])