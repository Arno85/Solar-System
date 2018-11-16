'use strict';

/**
* Export database from localhost to remote
* @description invoke a script Powershell who takes arguments. To edit them, open the config.json file for Gulp tasks.
* @author Arnaud Martin
*/

const exec = require("child_process").exec;

module.exports = ($, config) => {
    $.gulp.task('export-db', (cb) => {
        exec(
            `Powershell.exe -File\
            ${config.dbScripts.folderPath}${config.dbScripts.scriptExport}\
            ${config.remote_db.hostName}\
            ${config.remote_db.userName}\
            ${config.remote_db.port}\
            ${config.remote_db.stagingDatabase}\
            ${config.local_db.userName}\
            ${config.local_db.database}\
            ${config.dbScripts.folderPath}${config.dbScripts.sqlTempFileName}\
            ${config.env.stagingUrl}\
            ${config.dbScripts.localDbUrl}`,
            (err, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                cb(err);
            }
        );
    });
};