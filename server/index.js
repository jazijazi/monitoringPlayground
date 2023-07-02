const express = require('express')
const app = express()
const port = 3333
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/notif' , (req , res)=>{
    console.log("GET A POST NOTIF...")
    console.log(req.body)
    res.status(201).send("OK")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//curl -v --noproxy '*' -d '{"username":"jazi","password":"ali"}' -X POST -H "Content-Type: application/json" localhost:3333/notif