var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var gulp = require('gulp');
var debug = require('gulp-debug')
 
var files = {
    less : {
        source: './content/**/*.less',
        destination: './content/css',
    }
}
 
gulp.task('less_build', function () {
  return gulp.src(files.less.source)
    .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ] }))
    .pipe(gulp.dest(files.less.destination));
});

gulp.task('less_watch', function () {

    watch(files.less.source,function(file){
        console.log("Transpiling file:" + file.path)
         gulp.src(file.path)
        .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ] }))
        .pipe(gulp.dest(files.less.destination));
    })
})


