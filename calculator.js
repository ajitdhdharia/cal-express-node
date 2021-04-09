const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
var firstNumber = Number(req.body.fNumber);
var secondNumber = Number(req.body.sNumber);
var result = firstNumber + secondNumber;
    res.send("Result is " + result);
});

app.listen(3000, function(){
console.log("Listening on port 3000");
});