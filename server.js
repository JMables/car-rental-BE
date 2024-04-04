const express = require( "express" ); 
const mysql = require("mysql");

require("dotenv").config();

const app = express()

app.listen(5000, () => {
  console.log("app listening on port 5000")
})