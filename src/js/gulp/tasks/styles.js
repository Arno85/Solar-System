'use strict';

/**
* Task style
* Compile SASS to CSS
* Minify, rename and autoprefix css rules for old browsers
* @author Arnaud Martin
*/
var version = `${Math.floor(new Date().getTime() / 1000)}`;

module.exports = ($, config) => {
    $.gulp.task('styles', () => {
        let success = true;
        return $.gulp.src(config.dirPath.src + 'scss/*.scss')
            .pipe($.plumber({
                errorHandler: function(error) {
                    $.notify.onError({
                        title:'⚠️  Error (<%= error.plugin  %>): ',
                        message: '<%= error.message %>'
                    })(error);
                    this.emit('end');
                }
            }))
            .pipe($.cleanDir(config.dirPath.dist + 'css/'))
            .pipe($.cleanDir(config.dirPath.dist + 'css/maps/'))
            .pipe($.sourcemaps.init())
            .pipe($.sass.sync({
                outputStyle: 'compressed',
                errLogToConsole: true
            }))
            .pipe($.rename({
                suffix: `-${version}.min`
            }))
            .pipe($.autoprefixer({
                browsers: ['last 50 versions']
            }))
            .pipe($.sourcemaps.write('./maps'))
            .pipe($.gulp.dest(config.dirPath.dist + 'css/'))
            .pipe($.browserSync.stream({match: '**/*.css'}))
            .pipe($.notify({
                sound: false,
                title: '✔️  Success',
                message: 'Task styles done',
                onLast: true
            }));
    });
};