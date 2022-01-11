
const express = require('express')
const server = express()

server.use('/', (req, res)=>{
    res.status(200).send('Hello from express app running')
})

server.listen(8000, ()=>{
    console.log(`magic happening on port 8000`)
})

// 1> npm init --y // create package.json
// 2> yarn add express
// 3> npx gitignore node
// 4> yarn add nodemon
// 5> touch index.js
// 6> yarn  server  :  npm run server