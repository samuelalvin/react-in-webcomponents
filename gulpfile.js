const gulp = require("gulp");
var exec = require("child_process").exec;

gulp.task("copy:lib", function () {
    var lib =
    [
        ["polymer", "node_modules/@polymer/polymer/**"],
        ["webcomponents", "node_modules/@webcomponents/webcomponentsjs/**"],
        ["shadycss", "node_modules/@webcomponents/shadycss/**"],
        ["react", "node_modules/react/**"],
        ["react-dom", "node_modules/react-dom/**"]
    ];

    for (var index in lib) {
        gulp.src(lib[index][1]).pipe(gulp.dest("src/lib/" + lib[index][0]));
    }
});

gulp.task("webpack", function (callback) {
    exec("webpack");
});