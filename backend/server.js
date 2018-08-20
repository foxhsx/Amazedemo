
//创建一个简单服务器
//http模块:封装了一个简单的http服务器和一个简单的http客户端
//express基于nodejs平台，快速，开放，极简单的web开发框架；
const http = require('http');

const express = require('express');

// 实例化express对象
const app = express();

// 创建服务器
const server = http.createServer(app);
// 绑定监听的端口
server.listen('3000');

//最多只会触发一次这个事件，触发后立刻解除
server.once('listening',() => {
    console.log('server is run at port 3000');
});

//引入路由
const xchartRouter = require('./routes/xchart');


app.use('*',(req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use('/xchart',xchartRouter);

