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
            pattern: '-yyyy-MM-dd'
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