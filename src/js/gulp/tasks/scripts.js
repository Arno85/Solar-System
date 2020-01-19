'use strict';

/**
* Task script
* Uglify, and rename JS files
* @author Arnaud Martin
*/

var version = `${Math.floor(new Date().getTime() / 1000)}`;

module.exports = ($, config) => {
    $.gulp.task('scripts', () => {
        return $.gulp.src(config.dirPath.src + 'js/internals/**/*.js')
            .pipe($.plumber({
                errorHandler: function(error) {
                    $.notify.onError({
                        title:'⚠️  Error (<%= error.plugin  %>): ',
                        message: '<%= error.message %>'
                    })(error);
                    this.emit('end');
                }
            }))
            .pipe($.cleanDir(config.dirPath.dist + 'js/internals/'))
            .pipe($.cleanDir(config.dirPath.dist + 'js/internals/maps/'))
            .pipe($.sourcemaps.init())
            .pipe($.order([
                "main.js",
                "modules/*.js",
                "events.js"
              ]))
            .pipe($.concat(`main.js`))
            .pipe($.uglify())
            .pipe($.rename({
                suffix: `-${version}.min`
            }))
            .pipe($.sourcemaps.write('./maps'))
            .pipe($.gulp.dest(config.dirPath.dist + 'js/internals'))
            .pipe($.browserSync.stream())
            .pipe($.notify({
                sound: false,
                title: '✔️  Success',
                message: 'Task scripts done',
                onLast: true
            }));
    });
};
