import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next) {
  console.log("Request Method", req.method);
  console.log("Request URL:", req.url);
  next()
} //burada morgan metodunu aslinda kismen replice etmis olduk

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
