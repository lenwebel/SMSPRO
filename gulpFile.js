<<<<<<< HEAD

var gulp = require("gulp");
var less = require("gulp-less-sourcemap");
var watch = require("gulp-watch") 

var files = {
    less : {
        source:"./content/**/*.less",
        destination:"./content/css"
        }
}


gulp.task("less_build",function(){
    gulp.src(files.less.source)
        .pipe(less({sourceMap: {
            sourceMapRootpath: files.less.destination 
        }
    }))
    .pipe(gulp.dest(files.less.destination));
})


gulp.task("less_watch",function(){

    gulp.src(files.less.source).
    
    pipe(watch(files.less.source,function(file){
        gulp.src(file.path)
        .pipe(less({sourceMap: {
            sourceMapRootpath: files.less.destination 
        }
    }))
    .pipe(gulp.dest(files.less.destination));    
    }));
    
})
=======
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

>>>>>>> 1e660ef3fb97f0ec73e131d8f6df1344d23202fb
