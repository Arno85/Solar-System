'use strict';

/**
* Task dist
* Build the distribution files
* @author Arnaud Martin
*/

module.exports = ($, config) => {
    $.gulp.task('dist', () => {
        // Start tasks styles, scripts, images to generate files in dist folder
        $.gulp.start('styles',  'scripts', 'versioning-styles', 'versioning-scripts', 'images');

        // Copy others files in each folders
        $.gulp.src(config.dirPath.src + 'data/**/*')
            .pipe($.gulp.dest(config.dirPath.dist + 'data'));
        $.gulp.src(config.dirPath.src + 'fonts/**/*')
            .pipe($.gulp.dest(config.dirPath.dist + 'fonts'));
        $.gulp.src(config.dirPath.src + 'css/**/*')
            .pipe($.gulp.dest(config.dirPath.dist + 'css'));
        $.gulp.src(config.dirPath.src + 'js/admin/**/*')
            .pipe($.gulp.dest(config.dirPath.dist + 'js/admin'));
        return $.gulp.src(config.dirPath.src + 'js/vendors/**/*')
            .pipe($.gulp.dest(config.dirPath.dist + 'js/vendors'))
            .pipe($.notify({
                sound: false,
                title: '⚙️  Dist files created',
                message: 'You\'re ready to code',
                onLast: true
            }));
    });
};