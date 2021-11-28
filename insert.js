const { db } = require("./connect");
const user1 = {
    name: 'spider1',
    password: '00001'
}
// const insertSql = `INSERT INTO users(name,password) 
// VALUES(?,?)`;

// db.query(insertSql, [user1.name, user1.password], (err, res) => {
//     if (err) {
//         console.log(err.message);
//     }
//     if (res.affectedRows !== 0) {
//         console.log("插入成功！");
//     }
// })



// 更简便的写法
const insertSql = `INSERT INTO users SET ?`;

db.query(insertSql, user1, (err, res) => {
    if (err) {
        console.log(err.message);
    }
    if (res.affectedRows !== 0) {
        console.log("插入成功！");
    }
})
