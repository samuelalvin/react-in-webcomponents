const gulp = require("gulp");
var exec = require("child_process").exec;

gulp.task("copy:lib", function () {
    var lib =
    [
        ["webcomponents", "node_modules/@webcomponents/webcomponentsjs/**"],
        ["es6-shim", "node_modules/es6-shim/**"]
    ];

    for (var index in lib) {
        gulp.src(lib[index][1]).pipe(gulp.dest("src/lib/" + lib[index][0]));
    }
});

gulp.task("webpack", function (callback) {
    exec("webpack");
});