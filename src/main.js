const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/main'));
app.use(express.static(path.join(__dirname, "public")));

app.listen("3000", () => {
  console.log("Server on port 3000");
});
