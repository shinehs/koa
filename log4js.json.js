const config = require('./config')
const log4js_config = {
    pm2: true,
    appenders: {
        console: {
            type: 'console'
        },
        dateFile: {
            type: 'dateFile',
            filename: config.logPath,
            encoding: 'utf-8',
            pattern: '-yyyy-MM-dd',
            keepFileExt: true,
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: ['console', 'dateFile'],
            level: 'info'
        }
    },
    maxLogSize: 102400,
    backups: 20,
    compress: true
}

module.exports = {
    log4js_config
}
