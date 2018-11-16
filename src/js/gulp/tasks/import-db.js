'use strict';

/**
* Import database from remote to localhost
* @description invoke a script Powershell who takes arguments. To edit them, open the config.json file for Gulp tasks.
* @author Arnaud Martin
*/

const exec = require("child_process").exec;

module.exports = ($, config) => {
    $.gulp.task('import-db', (cb) => {
        exec(
            `Powershell.exe -File\
            ${config.dbScripts.folderPath}${config.dbScripts.scriptImport}\
            ${config.remote_db.hostName}\
            ${config.remote_db.userName}\
            ${config.remote_db.port}\
            ${config.remote_db.prodDatabase}\
            ${config.local_db.userName}\
            ${config.local_db.database}\
            ${config.dbScripts.folderPath}${config.dbScripts.sqlTempFileName}\
            ${config.env.prodUrl}\
            ${config.env.localUrl}`,
            (err, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                cb(err);
            }
        );
    });
};