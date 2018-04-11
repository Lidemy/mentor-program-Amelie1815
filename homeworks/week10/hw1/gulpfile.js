// variable declaration
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const minifyCSS = require('gulp-csso');
const minifyJS = require('gulp-minify');

// compile Sass to CSS
gulp.task('css', () => {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

// transpile JavaScript code to ES5 
gulp.task('es5', () => {
  return gulp.src('./es6/*.es6.js')
    .pipe(babel({
        presets: ['env']
    }).on('error', es5.logError))
    .pipe(gulp.dest('./js'))
});

// run webpack
gulp.task('webpack', () => {
  return gulp.src('./index.js')
    .pipe(webpack())
    .pipe(gulp.dest('./js'));
  });

// compress CSS
gulp.task('minifyCSS', () => {
  return gulp.src('./css/*.css')
    .pipe(minifyCSS().on('error', minifyCSS.logError))
    .pipe(gulp.dest('./build/css'))
});

// compress JavaScript
gulp.task('minifyJS', () => {
  return gulp.src('./js/*.js')
    .pipe(minifyJS({
      ext:{
          src:'-debug.js',
          min:'.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./build/js'))
});

// run task
gulp.task('default', [ 'css', 'es5', 'webpack', 'minifyCSS', 'minifyJS' ]);


/*

Add a directory named 'build' to place the final version of files.

On CLI, execute `$ gulp` 
or add the task name behind, such as 
`$ gulp css`, `$ gulp es5`, `$ gulp minifyCSS`, `$ gulp minifyJS`.

Note: 
`pipe` === `|` 
Take the output on the left as the input on the right. 

*/