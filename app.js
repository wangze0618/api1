const express = require('express');
const app = express();
const cors = require('cors')
// const bodyparser = require('body-parser')

const { router } = require('./router');

app.use(express.urlencoded({ extended: false }))
// app.use(bodyparser.json())
app.use(cors())

app.use(router)


app.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080')
})