'use strict';

/**
* Task script
* Uglify, and rename JS files
* @author Arnaud Martin
*/

var version = `${Math.floor(new Date().getTime() / 1000)}`;

module.exports = ($, config) => {
    $.gulp.task('versioning-scripts', () => {
        return $.gulp.src('index.html')
            .pipe($.plumber({
                errorHandler: function(error) {
                    $.notify.onError({
                        title:'⚠️  Error (<%= error.plugin  %>): ',
                        message: '<%= error.message %>'
                    })(error);
                    this.emit('end');
                }
            }))
            .pipe($.replace(/main(.*?).min.js/g, `main-${version}.min.js`))
            .pipe($.gulp.dest('./'))
            .pipe($.browserSync.stream())
            .pipe($.notify({
                sound: false,
                title: '✔️  Success',
                message: 'Task versioning JS done',
                onLast: true
            }));
    });
};