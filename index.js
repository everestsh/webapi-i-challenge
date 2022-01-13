// implement your API here

const express = require("express");
const port = 8000;
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World");
});

//http://localhost:8000/hobbits?sortby=name
server.get("/hobbits", (req, res) => {
  const sortField = req.query.sortby || "id";
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee",
    },
    {
      id: 3,
      name: "Bilbo Baggins",
    },
    {
      id: 2,
      name: "Frodo Baggins",
    },
  ];

  // res.send('hello world!!!!')
  // res.status(200).send(hobbits);
  
  const response = hobbits.sort((a, b) => 
   ( a[sortField] < b[sortField] ? -1 : +1)
  );
  res.status(200).json(hobbits);s
});
let hobbits = [
  {
    id: 1,
    name: "Bilbo Baggins",
    age: 111,
  },
  {
    id: 2,
    name: "Frodo Baggins",
    age: 33,
  },
];
let mextId = 3;

// server.get('/hobbits', (req, res)=>{
//     res.send('Welcome to Hobbiton')
// }) // READ data
server.post("/hobbits", (req, res) => {
  res.status(201).json({ url: "/hobbits", operation: "POST" });
}); // CREATE data
server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
}); // UPDATE data
server.delete("/hobbits", (req, res) => {
  // res.json('test delete by endpoint')// work
  res.sendStatus(204);
}); // DELETE data

//  write custom middleware

server.use(function(req, res){
    res.status(404).send(`Ain't nobody got time for dat!`)
})

server.listen(port, () => {
  console.log(`server listening  port ${port}`);
});

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
