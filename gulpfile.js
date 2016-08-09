var  gulp			  = require('gulp'),
	   minifyCss 	= require('gulp-minify-css'),
	   sass			  = require('gulp-sass'),
	   server 		= require('gulp-server-livereload')
     es         = require('event-stream'),
     tap        = require('gulp-tap'),
     modify     = require('gulp-modify'),
     fs         = require('fs'),
     path       = require('path'),
	   typescript	= require('gulp-typescript');

const tscConfig = require('./tsconfig.json');



var paths = {
	web: '/',
	appJavascript: ['app/*.ts', 'app/**/*.ts'],
	appScss: ['app/assets/*.scss']
}

gulp.task('ts', function () {
	return gulp
		.src(paths.appJavascript)
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(gulp.dest(function(file) {
		  return file.base;
		}));
});


gulp.task('sass', function () {
  gulp.src(paths.appScss)
    .pipe(sass().on('error', sass.logError))
 	  .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(function(file) {
    		return file.base;
		}));
});

gulp.task('default', ['ts', 'sass']);

gulp.task('watch', ['ts', 'sass', 'webserver'],function(){
	gulp.watch(paths.appJavascript, ['ts']);
	gulp.watch(paths.appScss, ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: {
      	enable: true,
				clientConsole: false,
      	// filter: function(filePath, cb) {
        //   cb( !(/node_modules/.test(filePath)) &&
        //   	  !(/.*ts$/.test(filePath)) &&
        //   	  !(/gulpfile.js$/.test(filePath)) );
        //}
				filter: function(filePath, cb) {
          cb( !(/node_modules/.test(filePath)) );
        }
      },
      defaultFile: 'index.html',
      open: true
    }));
});
