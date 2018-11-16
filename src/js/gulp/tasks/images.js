'use strict';

/**
* Task images
* Compress images
* @author Arnaud Martin
*/

module.exports = ($, config) => {
    $.gulp.task('images', () => {
        return $.gulp.src(config.dirPath.src + 'img/*')
            .pipe($.imagemin())
            .pipe($.gulp.dest(config.dirPath.dist + 'img'))
            .pipe($.notify({
                sound: false,
                title: '✔️  Success',
                message: 'Task images done',
                onLast: true
            }));
    });
};