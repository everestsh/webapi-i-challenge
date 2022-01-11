// implement your API here

const express = require('express')
const useRoutes = require('./useRoutes')

const server = express()

// server.get('/', (req, res)=> res.send('API up and running!'))
server.use('/users', useRoutes)

server.listen(8000, ()=> console.log('API running on port 8000'))


// 1> npm init --y // create package.json
// 2> yarn add express
// 3> npx gitignore node
// 4> yarn add nodemon
// 5> touch index.js
// 6> yarn  server  :  npm run server