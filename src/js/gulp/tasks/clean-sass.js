'use strict';

/**
 * Task clean-sass
 * Clean SCSS files except mixins
 * @author Arnaud Martin
 */

module.exports = ($, config) => {
    $.gulp.task('clean-sass', () => {
        $.gulp.src([`${config.dirPath.src}scss/**/*.scss`, `!${config.dirPath.src}scss/utils/mixins/*.scss`])
            .pipe($.csscomb())
            .pipe($.gulp.dest(`${config.dirPath.src}scss`))
            .pipe($.notify({
                sound: false,
                title: '✔️ Success',
                message: 'Task clean-sass done',
                onLast: true
            }));
    });
};