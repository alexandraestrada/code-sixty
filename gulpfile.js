// Include gulp
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

var dest = 'public/assets/';

gulp.task('js', function() {
    var jsFiles = ['src/js/*'];

    gulp.src(plugins.mainBowerFiles().concat(jsFiles))
        .pipe(plugins.filter('*.js'))
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js'));
});

gulp.task('css', function() {
    var cssFiles = ['src/css/*'];

    gulp.src(plugins.mainBowerFiles().concat(cssFiles))
        .pipe(plugins.filter('*.css'))
        .pipe(plugins.order([
            'normalize.css',
            '*'
        ]))
        .pipe(plugins.concat('styles.css'))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(dest + 'css'));
});

// gulp.task('css', function() {

//     var cssFiles = ['src/css/*'];

//     gulp.src(plugins.mainBowerFiles().concat(cssFiles))
//         .pipe(plugins.filter('*.css'))
//         .pipe(plugins.concat('main.css'))
//         .pipe(plugins.uglify())
//         .pipe(gulp.dest(dest + 'css'));

// });


gulp.task('default', ['js', 'css']);

// // Include Our Plugins
// var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

// // Lint Task
// gulp.task('lint', function() {
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// // Compile Our Sass
// gulp.task('sass', function() {
//     return gulp.src('scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('css'));
// });

// // Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });

// // Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch('js/*.js', ['lint', 'scripts']);
//     gulp.watch('scss/*.scss', ['sass']);
// });

// // Default Task
// gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);