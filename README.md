# koa
一个通用的koa项目模板，

## TODO

- Redis组件的东西要加进来。
- log4js的配置缺少文件切块部分。

- views：TODO 暂时没用打算放页面，还没规划好。
- public: TODO 图片等，暂时也没用到

###其他目录结构如下：
```javascript
├─.gitignore                // 忽略文件配置
├─app.js                    // 应用入口
├─config.js                 // 公共配置文件
├─ecosystem.config.js       // pm2配置文件
├─package.json              // 依赖文件配置
├─README.md                 // README.md文档
├─routes                    // 路由
|   ├─private.js                // 校验接口  TODO
|   └public.js                  // 公开接口
├─models                    // 数据库配置及模型  TODO 这里也没用到，根据项目使用情况自定吧
|   ├─index.js                  // 数据库配置
|   └user.js                    // 用户的schema文件
├─middlewares               // 中间件
|      ├─cors.js                // 跨域中间件 TODO 暂时没用 用的还是第三方的，这里有点小问题，晚点改改
|      ├─jwt.js                 // jwt中间件 TODO 公司现在那套token只能给lizhi用 不能给tiya用。
|      ├─logger.js              // 日志打印中间件
|      └response.js             // 响应及异常处理中间件
├─logs                      // 日志目录
|  ├─server.log             // 服务器日志文件，暂时都打一起，没区分类型，都为info
├─lib                       // 工具库
|  ├─error.js                   // 异常处理
|  └mongoDB.js                  // mongoDB配置 TODO 永泉说以后可能接，但是暂时用不到
├─controllers               // 操作业务逻辑
|      ├─index.js               // 配置
|      ├─login.js               // 登录   TODO
|      └test.js                 // 测试 TODO
├─services               // 操作数据库 TODO
|      ├─index.js               // 配置
|      ├─user.js               // 用户
├─bin                       // 启动目录
|  └www                         // 启动文件配置
```