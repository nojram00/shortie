const router = require('express').Router();

router.get('/test', (req, res) => {
    res.json({
        title: 'test',
        message: 'Hello World!'
    });
})

router.get('/', (req, res) => {
    res.json({
        title: 'Home',
        message: 'This is Homepage \nThis Message is fetched from "/api/" endpoint',
        users: [
            'John Doe',
            'Jane Doe',
            'Alberto Doe'
        ]
    })
})

module.exports = router