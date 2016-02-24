
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

    
})