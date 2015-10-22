var gulp = require('gulp');
var gutil = require('gulp-util');
var colors = gutil.colors;
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');
var taskListing = require('gulp-task-listing');

var paths = {
    sass: ['./scss/**/*.scss']
};

gulp.task('help', taskListing);

gulp.task('default', ['sass']);

gulp.task('sass', ['clean-styles'], function (done) {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('md-icons', function () {
    gulp.src('./www/lib/material-design-icons/iconfont/Material*.*')
        .pipe(gulp.dest('./www/fonts'));
});

gulp.task('clean-styles', function () {
    del('./www/css/*.*').then(function (path) {
        console.log(colors.green('\n Deleted css: ' + path.replace(/,/g, '\n ')));
    }, function (err) {
        console.log(colors.red('\n Error deleting css: ' + err));
    });
});
