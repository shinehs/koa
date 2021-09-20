'use strict'
const game = {}
game.getRoomId = async (ctx, next) => {
    ctx.result = {
        nick:'shine',
        logo: 'www.xx.com/xx.png',
        city: 'guangzhou',
        id:ctx.query.id
    }
    ctx.msg = '13'
    return next()
}

game.setRoomId = async (ctx, next) => {
    console.log('~~~', ctx.request.body.partyId)
    if (!ctx.request.body.partyId){
        ctx.throw({
            code: 400,
            message: '参数不正确'
        });
 
    } else {
        ctx.result = {
            nick:'shine',
            logo: 'www.xx.com/xx.png',
            city: 'guangzhou'
        }
        ctx.msg = '13'
        return next()
    }
    
}

module.exports = game

