// 引入express
const express = require('express');
const data = require('./data.js')

// 创建应用对象
const app = express();

app.all('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    //响应一个数据


    //对对象进行字符转换
    let str = JSON.stringify(data);

    // 设置响应体
    response.send(str)
});

app.listen(8080, () => {
    console.log("服务已启动8080端口监听中")
})