'use strict'

const fs = require('fs')
const path = require('path')
const log4js = require('log4js')
const config = require('../config')
const { log4js_config } = require('../log4js.json')

const logsDir = path.parse(config.logPath).dir
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}
// 配置log4.js
log4js.configure(log4js_config)

const logger = log4js.getLogger(`[${config.name}]`)

const loggerMiddleware = async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  const remoteAddress = ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips ||
    (ctx.socket && (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
  let logText = `${ctx.method} ${ctx.status} ${ctx.url} 请求参数： ${JSON.stringify(ctx.request.body)} 响应参数： ${JSON.stringify(ctx.body)} - ${remoteAddress} - ${ms}ms`
  logger.info(logText)
}
module.exports = {
  logger,
  loggerMiddleware
}
