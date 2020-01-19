'use strict';

/**
* Task watch
* Watch SCSS, JS, images files
* Refresh browser and execute tasks on save
* @author Arnaud Martin
*/

module.exports = ($, config) => {
    $.gulp.task('watch', ['browser-sync'], () => {
        $.gulp.watch(config.dirPath.src + 'scss/**/*.scss', ['styles', 'versioning-styles']).on('change', $.browserSync.reload);
        $.gulp.watch(config.dirPath.src + 'js/internals/**/*.js', ['scripts', 'versioning-scripts']).on('change', $.browserSync.reload);
        $.gulp.watch(config.dirPath.src + 'img/*', ['images']).on('change', $.browserSync.reload);
    });
};