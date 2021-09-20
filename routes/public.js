'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

// router.post('/login', controllers.login.login)
router.get('/getRoomId', controllers.game.getRoomId)
router.post('/setRoomId', controllers.game.setRoomId)

module.exports = router
