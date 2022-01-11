// implement your API here

const express = require('express');
const port = 9000;
const server = express();

server.get('/', (req, res)=> {
    res.send('hello world!!!!')
})
server.listen(port, ()=> {
    console.log('API Running on port 9000!!!')
})

// 1> yarn 
// 2> yarn add express
// 3> npx gitignore node
// 4> yarn  server  :  npm run server