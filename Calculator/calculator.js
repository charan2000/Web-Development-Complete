
const bodyParser = require("body-parser");
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);  // log the data coming from form into the console 
    console.log(req.body.num2);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    res.send("The result = " + (num1 + num2));   // log only that variable in the data got from form
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    console.log(req.body);
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    res.send("The result = " + (weight / ( height*height)));
});

app.listen(3000, function(){
    console.log("Server Started and running on port: '3000' ");
});
    