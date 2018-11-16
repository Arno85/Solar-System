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

/*============= TASKS LOADER =======================*/
Object.keys(tasks).forEach( task => {
    require(config.dirPath.src + config.tasksPath + task)($, config);
});

/*============= MAIN TASKS =======================*/

// Build dist folder with all files required
$.gulp.task('init', ['dist']);

// Clean SASS files
$.gulp.task('clean', ['clean-sass']);

// Development task
$.gulp.task('default', ['watch']);

// Build VSTS who build dist files and copy all files to staging. Take arguments for sftp (hostname, port, username, password, remotePath)
$.gulp.task('build-wp', () => {
    $.runSequence('dist', 'sftp');
});

// Import database from prod to localhost
$.gulp.task('import-prod-db', ['import-db']);

// Export database from localhost to staging
$.gulp.task('export-local-db', ['export-db']);
