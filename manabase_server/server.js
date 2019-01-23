const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
// import path from "path";

var app = express();

const SELECT_ALL_ACCOUNTS_QUERY = "SELECT * FROM user_accounts";

// Local MySQL server connection: *CHANGE INFO FOR YOUR LOCAL MACHINE CREDENTIALS*
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "asjDof2389$fMu9dfj23",
//   database: "manabase_db",
//   port: 3306
// });

const connection = mysql.createConnection({
  database: process.env.RDS_DB_NAME,
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
});

connection.connect(err => {
  if (err) {
    console.log(err);

    return err;
  }
});

app.use(cors());
app.use(bodyParser.json());

app.get("/collection", (req, res) => {
  connection.query(SELECT_ALL_ACCOUNTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});
require("./config/routes.js")(app);

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log(`Server running on port: ${port}`);
});
