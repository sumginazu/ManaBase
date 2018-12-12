const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// import path from "path";

var app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "client")));

require("./config/routes.js")(app);

app.listen(8000, function() {
  console.log("Server running on port 8000");
});
