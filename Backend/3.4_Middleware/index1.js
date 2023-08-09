import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));//dosya yolunu URL'ye dönüştürmek için fileURLToPath fonksiyonunu kullanırız.

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //bu cogu zaman yazicagimiz temel kod

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);//Bu kod parçası, /submit endpoint'ine bir POST isteği gönderildiğinde gelen form verilerini konsola yazdırır. Bu noktadan sonra form verilerini istediğiniz şekilde işleyebilirsiniz (veritabanına kaydetme, başka bir servise gönderme vb.)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
