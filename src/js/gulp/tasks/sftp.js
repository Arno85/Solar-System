'use strict';

/**
* Task sftp
* Upload files from the source control to the server
* @author Arnaud Martin
*/

module.exports = ($, config) => {
    let args = $.yargs.argv;

    $.gulp.task('sftp', () => {
        return $.gulp.src([
            config.sftpSrc,
            '!node_modules/**',
            '!'+ config.dirPath.src +'**',
            '!gulpfile.js',
            '!package.json',
            '!package-lock.json'
        ])
        .pipe($.sftp({
            host: args.host,
            port: args.port,
            user: args.user,
            pass: args.pass,
            remotePath: args.remotePath
        }));
    });
};