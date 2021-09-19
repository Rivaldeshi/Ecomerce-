const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 5000;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "commerce"
});


app.get("/getData", (req, res) => {
    const query = "SELECT * FROM produit"
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });

})


app.get("/getoffer", (req, res) => {
    const query = "SELECT id, name, imgsrc FROM produit where id = 4"

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });


})

app.listen(port, () => {
    console.log("listiner on port alraydi");
})


