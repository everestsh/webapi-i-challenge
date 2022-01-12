// implement your API here
const express = require('express')
const userRouter = require('./users/userRoutes.js')

const server = express()
server.use('/users', userRouter)

server.use('/', (req, res)=> res.send('API up and running!'))

server.listen(8000, ()=> console.log('API running on port 8000'))