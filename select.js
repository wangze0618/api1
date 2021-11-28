const { db } = require("./connect");

const sql = 'SELECT * FROM users;';
db.query(sql, (err, res) => {
    if (err) {
        console.log('错误!' + err.message);
    }
    console.log(res);
})