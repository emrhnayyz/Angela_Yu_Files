import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);//the raw headers are basically a list of key value pairs that come from where the request originated.
    res.send("<h1>Hello, World!!</h1>")

})

app.get("/about", (req, res) => {

    res.send("<h1>Welcome to about Me!!</h1>")

})

app.get("/contact", (req, res) => {

    res.send("<h1>Here you can find about my contacts :</h1> Phone:+4951548654213")

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})