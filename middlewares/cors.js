const cors = async (ctx, next) => {
    console.log('ser cros')
    // 允许来自所有域名请求
    ctx.set("Access-Control-Allow-Origin", "*");
    // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); 

    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    ctx.set("Content-Type", "application/json;charset=utf-8");

    // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    ctx.set("Access-Control-Allow-Credentials", true);

    // options请求的最大有效期
    ctx.set("Access-Control-Max-Age", 300);

    /*
    CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
        Cache-Control、
        Content-Language、
        Content-Type、
        Expires、
        Last-Modified、
        Pragma。
    */
    // 需要获取其他字段时，使用Access-Control-Expose-Headers，
    // getResponseHeader('myData')可以返回我们所需的值
    //https://www.rails365.net/articles/cors-jin-jie-expose-headers-wu
    ctx.set("Access-Control-Expose-Headers", "myData");
    
    await next();
}
module.exports = { cors }
