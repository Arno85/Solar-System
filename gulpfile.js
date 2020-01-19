'use strict';

/**
* Gulpfile.js
* Main tasks for development frontend
* @author Arnaud Martin
*/

/*============= REQUIRES =======================*/
const  config = require('./src/js/gulp/config.json'),
    $ = require('gulp-load-plugins')({pattern: '*'}),
    tasks = require('require-dir-all')(config.dirPath.src + config.tasksPath);

    // console.log($);

/*============= TASKS LOADER =======================*/
Object.keys(tasks).forEach( task => {
    require(config.dirPath.src + config.tasksPath + task)($, config);
});

/*============= MAIN TASKS =======================*/

// Build dist folder with all files required
$.gulp.task('build', ['dist']);

// Clean SASS files
$.gulp.task('clean', ['clean-sass']);

// Development task
$.gulp.task('serve', ['watch']);
