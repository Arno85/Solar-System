'use strict';

/**
* Task browser-sync
* Auto refresh browser when changes are applied in the css, js, php and html files
* @author Arnaud Martin
*/

module.exports = ($, config) => {
    $.gulp.task('browser-sync', () => {
        $.browserSync.init(config.browserSync.files, {
            proxy: config.env.localUrl,
            open: false,
            port: 3200
        });
    });
};