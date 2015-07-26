var gulp = require("gulp");
var processhtml = require("gulp-processhtml");
var templateData = require("./template-data");
var del = require("del");
var sourceList = ["./assets/**/*", "!./node_modules/**"];
var destination = "dist";

gulp.task("default", ["build"], function(){});

gulp.task("build",["copy"], function(){
  //proces html, which will build our template-data with
  var opts = {
    process: true,
    templateSettings: {
      interpolate: /\{\{(.+?)\}\}/g
    },
    data: templateData
  };
  return gulp.src("./src/**/*.html")
  .pipe(processhtml(opts))
  .pipe(gulp.dest(destination));
});
gulp.task("copy",["clean"], function(){
  return gulp.src(sourceList)
  .pipe(gulp.dest("./dist/assets"));
});
gulp.task("clean", function(cb){
  return del(["./dist/**/*", "./dist/**"], cb);
});
