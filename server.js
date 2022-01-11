// implement your API here

const express = require('express')
const useRoutes = require('./useRoutes')

const server = express()

// server.get('/', (req, res)=> res.send('API up and running!'))
server.use('/users', useRoutes)

server.listen(8000, ()=> console.log('API running on port 8000'))