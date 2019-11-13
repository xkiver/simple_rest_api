var express = require('express')
var router = express.Router()

router.use(function print(req, res, next) {
    console.log('Time: ' + Date.now());
    next();
})

router.get('/', (req, res) => {
    res.send('Animals home page GET')
})

router.post('/', (req, res) => {
    res.send('Animals home page POST')
})

router.get('/about', (req, res) => {
    res.send('About animals')
})

module.exports = router