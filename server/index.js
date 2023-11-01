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
    if (!username || !password || !email) {
        return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
      }
    
      if (password.length < 8 || password.length > 20) {
        return res.status(400).send("รหัสผ่านต้องมีความยาวระหว่าง 8 ถึง 20 ตัวอักษร");
      }
    
      if (!email.includes('@')) {
        return res.status(400).send("อีเมลไม่ถูกต้อง");
      }
    db.query("INSERT INTO users (username,email,password) VALUES (?,?,?)",
        [username,email,password],
        (err,result) => {
            if (err) {
                return res.status(400).send("เกิดข้อผิดพลาดในการเพิ่มข้อมูล");
              } else {
                return res.status(200).send("ค่าถูกเพิ่มเข้าสู่ฐานข้อมูล");
                
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