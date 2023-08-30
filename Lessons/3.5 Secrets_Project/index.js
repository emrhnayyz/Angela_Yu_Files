//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const pass = "ILoveProgramming"
var inputPass = ""



const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({ extended: true }));

function passCheck(req,res,next){
    console.log(req.body);
    inputPass = req.body["password"]
    if (inputPass == pass) {
        next();
    }else{
        
        app.get("/", (req,res)=>{
            res.sendFile(__dirname+"/public/index.html")
          })

        
    }

    
}

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
  })

app.use(passCheck);

app.post("/check",(req,res)=>{
    res.sendFile(__dirname+"/public/secret.html")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


