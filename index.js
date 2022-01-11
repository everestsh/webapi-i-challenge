// implement your API here

const express = require('express');
const port = 8000;
const server = express();

server.use(express.json())
// server.get('/hobbits', (req, res)=> {
//     const hobbits = [
//         {
//           id: 1,
//           name: 'Samwise Gamgee',
//         },
//         {
//           id: 2,
//           name: 'Frodo Baggins',
//         },
//       ];

//     // res.send('hello world!!!!')
//     // res.status(200).send(hobbits);
//     res.status(200).json(hobbits);
// })

server.get('/hobbits', (req, res)=>{
    res.send('Welcome to Hobbiton')
}) // READ data
server.post('/hobbits', (req, res)=>{
    res.status(201).json({url: "/hobbits", operation: 'POST'})
}) // CREATE data
server.put('/hobbits', (req, res)=>{
    res.status(200).json({url: "/hobbits", operation: 'PUT'})
}) // UPDATE data
server.delete('/hobbits', (req, res)=>{
    // res.json('test delete by endpoint')// work
    res.sendStatus(204)
}) // DELETE data

server.listen(port, ()=> {
    console.log(`server listening  port ${port}`)
})

// 1> yarn 
// 2> yarn add express
// 3> npx gitignore node
// 4> yarn  server  :  npm run server



/** 
 * 12> del git cached
```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
*/
