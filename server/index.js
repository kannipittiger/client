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

app.get('/songs',(req,res) => {
    db.query("SELECT * FROM songs ", (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/songs/:songID', (req, res) => {
    const songID = req.params.songID; // Get the song ID from the URL
    db.query("SELECT * FROM songs WHERE songID = ?", [songID], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (result.length === 0) {
        res.status(404).json({ error: 'Song not found' });
      } else {
        res.status(200).json(result[0]);
      }
    });
  });
  

app.post('/create',(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO users (username,email,password) VALUES (?,?,?)",
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

app.post('/login',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err,result) => {
            if(err){
                console.log(err);
                res.status(500).send("เกิดข้อผิดพลาดในการล็อกอิน");
            }else{
                if (result.length > 0) {
                    // ล็อกอินสำเร็จ
                    res.send("ล็อกอินสำเร็จ");
                } else {
                    // ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง
                    res.status(401).send("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
                }
            }
        }
    );
});


app.listen('3001', () => {
    console.log('Server is ruuning...');
}) 