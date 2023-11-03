# WEB-PROJECT (MOODIFY)

ขั้นตอนการติดตั้งเว็บ Moodify
1.ดาวน์โหลด database ที่ชื่อว่า moodify แล้ว import ลงใน mysql
2.ดาวน์โหลด xampp เพื่อใช้งาน apache และ mysql ที่มี database ชื่อว่า moodify
3.clone code ลงใน VS Code จากลิงก์นี้ https://github.com/kannipittiger/client.git จากนั้นเปิด terminal ขึ้นมา 2 อันโดยอันที่ 1 ให้พิมพ์ bash cd server แล้วพิมพ์ npm run dev เพื่อรันส่วนของ server
ส่วนอันที่ 2 ให้พิมพ์ว่า bash cd client แล้วพิมพ์ว่า bash npm start

# NPM INSTALL REQUEST

npm i mysql cors express nodemon axios react-router-dom sweetalert2 react-icons

  ใส่คำสั่ง "dev" : "nodemon index" ลงไปในส่วน scripts ของ package.json
