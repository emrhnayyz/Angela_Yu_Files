//jshint esversion: 6

//! 1.Ilk olarak bu degiskenleri olusturmaliyiz 
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { log } = require("console");

const app =express();
//image'leri serverda gösterebilmek icin gerekli ayrica express static ifadesinin icerisine parantez ile ilgili dosya ismi yazilmali
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req,res){
    //burada request yapildiginda "/" sayfasindaki gidilen siteyi signup.html yapiyoruz
        res.sendFile(__dirname + "/signup.html")
    
    
      });


app.post("/", function(req,res){

var firstName = req.body.fName;
var lastName = req.body.lNmae;
var email = req.body.email;

console.log(firstName, lastName, email);



})

app.listen(3000, function(){
console.log("Server is running on port 3000");
})

