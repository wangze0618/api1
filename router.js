const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from simple server :)')
})

router.get('/api', (req, res) => {
    res.send({
        status: 200,
        msg: 'hello GET~',

    })
})


router.post('/api', (req, res) => {
    const data = req.body
    res.send({
        status: 200,
        msg: 'hello~',
        data: data
    })
})

module.exports = {
    router
}