const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'database-1.cj4iawuucsa5.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'database123',
    database: "test_schema",
});

db.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected");

});

