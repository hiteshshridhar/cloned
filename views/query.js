const mysql = require("mysql");
const express = require("express");
const app = module.exports = express();
const bodyparser = require("body-parser");
const port = 3100;
const path = require("path");




let mysqlConnection = mysql.createConnection({
    host: "localhost" ,
    user : "root" ,
    password : "root",
    database : "test"
});

mysqlConnection.connect( (err) => {
    if(err){
        console.log("error occured" + JSON.stringify(err))
    }
    else{
        console.log("Connection established");
    }
})

app.get("/name", (req, res) =>{
   mysqlConnection.query("Select * from test_table ;", (err, rows, field) => {
       if (!err){
           console.log("Results fetched in console.....");
           console.log(rows);
           res.send(rows);
       }
       else{
           console.log("error in fetching rows.")
       }
   })
});


//accessing the id from DB

app.get("/name/:id", (req, res) =>{
    mysqlConnection.query("Select * from test_table  WHERE id = ?;",[req.params.id] ,(err, rows, field) => {
        if (!err){
            console.log("Results fetched in console.....");
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log("error in fetching rows.")
        }
    })
 });

 // To delete the user from DB--- we can delete the item from DB like this also. 

 app.get("/name/:id/del", (req, res) =>{
    mysqlConnection.query("DELETE from test_table  WHERE id = ?;",[req.params.id] ,(err, rows, field) => {
        if (!err){
            console.log("Results fetched in console.....");
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log("error in fetching rows.")
        }
    })
 });



app.listen(port);