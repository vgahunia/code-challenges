// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var connect = require('gulp-connect');



// Use localhost
gulp.task('connect', function() {
  connect.server();
});

gulp.task('default', ['connect']);