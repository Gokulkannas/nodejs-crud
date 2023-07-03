const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./html");

mongoose
  .connect(
    "mongodb+srv://gokulkannas20msc:vscode1234@cluster0.z9hspc4.mongodb.net/casting"
  )
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
  
app.use("/", require("./Route/castRoutes"));

const port = 1000;
app.listen(port, () => {
  console.log("port on 1000");
});
