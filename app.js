'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')()
const staticCache = require('koa-static-cache')

const config = require('./config')
const publicRouter = require('./routes/public')
const privateRouter = require('./routes/private')
const { loggerMiddleware } = require('./middlewares/logger')
const { errorHandler, responseHandler } = require('./middlewares/response')
const { corsHandler } = require('./middlewares/corsHandler')
const cors = require('koa-cors');

const helmet = require("koa-helmet")
 
const app = new Koa()

// Helmet safe 这里还没配置，自己找找用法根据需要配置咯，header头大写body大小也没配置自己玩
app.use(helmet())
// cors
app.use(cors(corsHandler));

// Logger
app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

// Global Middlewares
app.use(bodyParser)
app.use(staticCache(config.publicDir))

// Routes
app.use(publicRouter.routes(), publicRouter.allowedMethods())
app.use(privateRouter.routes(), privateRouter.allowedMethods())

// Response
app.use(responseHandler)


module.exports = app

