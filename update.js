const { db } = require("./connect");

const user1 = {
    name: 'aaa1',
    password: '123454',
    id: 7
}


// const upSql = `UPDATE users SET name=?, password=? 
// WHERE id=?`

// db.query(upSql, [user1.name, user1.password, user1.id], (err, res) => {
//     if (err) {
//         console.log(err.message);
//     } else if (res.affectedRows !== 0) {
//         console.log('更新成功！');
//     }
// })


// 更新语句的简写形式
const upSql = `UPDATE users SET ? WHERE id= ?`;

db.query(upSql, [user1, user1.id], (err, res) => {
    if (err) {
        console.log(err.message);
    } else if (res.affectedRows !== 0) {
        console.log('更新成功！');
    }
})