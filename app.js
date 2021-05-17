const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
// app.use(cors());
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended:false})


const User = require("./users.js");

mongoose.connect('mongodb://localhost:27017/mernuser', {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',()=> {
    console.log("mongodb connected with mongoose");
});


app.get("/",(req,res)=> {

});

app.get("/story",(req,res) => {
User.find()
.then(users => res.json(users))
.catch(err => res.status(400).json("err:"+err));
});

app.get("/create",(req,res) => {

});

app.post("/create",urlencodedParser,(req,res) => {

    console.log(req.data);
    const user = new User({
        title: req.body.title,
        story: req.body.story,
        name: req.body.name,
        genre: req.body.genre
    });
    user.save()
    .then(() => res.json("user added"))
    .catch(err => res.status(400).json("err:" + err));
    

});


app.listen(port,()=> {
    console.log("server is working at port: "+port);
});
