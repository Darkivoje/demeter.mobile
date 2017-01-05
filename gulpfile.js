var gulp = require('gulp'),
    flatten = require('gulp-flatten'),
    jshint = require('gulp-jshint'),
    templateCache = require('gulp-angular-templatecache'),
    browserSync = require('browser-sync').create(),
    browserify = require('browserify'),
    minifyify = require('minifyify'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    transform = require('vinyl-transform'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    autoreset = require('postcss-autoreset'),
    autoprefixer = require('autoprefixer'),
    flexbugsFixes = require('postcss-flexbugs-fixes'),
    preCss = require('precss'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    karma = require('karma').server;

var options = {
    src: './',
    demeterComponents: './components',
    dist: './dist',
    publicDist: './public',
    css: './',
    base: './',
    errorHandler: function (title) {
        return function (err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    }
};

gulp.task('scripts', function () {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-aria/angular-aria.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-material/angular-material.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js'
    ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(options.publicDist));
});

gulp.task('default', function () {
    gulp.start('build');
});

gulp.task('build', ['lint',
    //'test',
    'templates', 'scripts', 'js', 'css']);

gulp.task('serve', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: './',
            routes: {}
        }
    });
    gulp.watch("components/**/*.html", ['templates-watch']);
    gulp.watch("components/**/*.js", ['js-watch']);
});

gulp.task('js-watch', ['js'], function () {
    gulp.watch("components/**/*.js").on('change', browserSync.reload);
});

gulp.task('templates-watch', ['templates'], function () {
    gulp.watch("components/**/*.html").on('change', browserSync.reload);
});

gulp.task('js', function () {
    var b = browserify({
            debug: true,
            entries: [options.demeterComponents + '/app.module.js']
        })
            .plugin('minifyify', {
                map: 'application.js.map',
                output: 'application.js.map'
            })
        ;
    //b.add('dist/templates.js');
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest(options.src));
});

gulp.task('templates', function () {
    gulp.src(options.demeterComponents + '/**/*.html')
        .pipe(templateCache({
            module: 'templates',
            standalone: true,
            root: '/',
            transformUrl: function (url) {
                return url;
            }
        }))
        .pipe(gulp.dest(options.dist));
});

gulp.task('css', function () {
    var processors = [
        preCss,
        autoprefixer({browsers: ['last 1 version']}),
        autoreset({
            reset: {
                margin: 0,
                padding: 0,
                borderRadius: 0
            }
        }),
        flexbugsFixes,
        mqpacker,
        csswring
    ];
    return gulp.src(options.css + '*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(options.dist));
});

gulp.task('lint', function () {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', ['templates'], function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

