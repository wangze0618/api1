const mysql = require('mysql');

// 配置连接参数
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '0618',
    database: 'db1'
})


module.exports = { db }

