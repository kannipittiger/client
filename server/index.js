const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"jayjay23",
    database:"moodify"
})

app.get('/users',(req,res) => {
    db.query("SELECT * FROM users ", (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/create',(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO users (username,email,password) VALUES(?,?,?)",
        [username,email,password],
        (err,result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Values inserted");
            }
        }
    );
});

app.listen('3001', () => {
    console.log('Server is ruuning...');
}) 