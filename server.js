const express = require('express')
const path = require('path')

const server = express()

server.listen(5000, ()=>{
    console.log('magic happening on 5000')
})