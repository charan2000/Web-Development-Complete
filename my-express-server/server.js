
const express = require("express");

const app = express();

app.get("/", function(req, res){
    console.log(req);
    res.send("<h1>Hello Universe!</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h2>Contact me here: charanbhavisetti2000@gmail.com</h2>");
});

app.get("/about", function(req, res){
    res.send(
        "<h1>About me</h1><br><h2>I'm a Full Stack Developer work ing as Software Engineer in X company</h2>")
});

app.listen(3000, function(){
    console.log("Server started at port: 3000");
});