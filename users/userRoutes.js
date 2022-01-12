
const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).send('hello from the GET /users endpoint')
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    res.status(200).send('hello from the POST /users endpoint')
})

module.exports = router