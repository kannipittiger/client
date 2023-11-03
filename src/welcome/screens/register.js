import '../style/registerStyle.css'
import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { url_api } from '../../config';
import Swal from 'sweetalert2';

const Register = () => {
    const [userList, setUserList] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = () => {
        if (!username || !password || !email) {
    
            Swal.fire({
              icon: 'error',
              title: 'ผิดพลาด',
              text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            });
            return;
          }
      
          if (password.length < 8 || password.length > 20) {
            
            Swal.fire({
              icon: 'error',
              title: 'ผิดพลาด',
              text: 'รหัสผ่านต้องมีความยาวระหว่าง 8 ถึง 20 ตัวอักษร',
            });
            return;
          }
      
          if (!email.includes('@')) {
      
            Swal.fire({
              icon: 'error',
              title: 'ผิดพลาด',
              text: 'อีเมลไม่ถูกต้อง',
            });
            return;
          }
        Axios.post(`${url_api}/create`,{
            username: username,
            email:email,
            password:password
        }).then((response) => {
            setUserList([            
            ...userList,{
                username:username,
                email:email,
                password:password
            }])
            Swal.fire({
                icon: 'success',
                title: 'สมัครสมาชิกสำเร็จ',
                text: 'ยินดีต้อนรับ! คุณได้สมัครสมาชิกแล้ว'
              });

        }).catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'สมัครสมาชิกล้มเหลว',
              text: 'กรุณาสมัครสมาชิกอีกรอบ'
            });
          });
    }
    return (
        <div className="register">
            <div className="border-register">
                <h2>
                    Sign up to Start<br />Moodify
                </h2>
                <h5>
                    <form action="register" method='post'>
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input
                            className="input-register"
                            type="email" 
                            name="email" 
                            placeholder='Enter email' 
                            onChange={(event) => { 
                                setEmail(event.target.value) 
                            }} 
                            required>
                        </input>
                        <br />
                        <label htmlFor="username">Username</label>
                        <br />
                        <input
                            className="input-register" 
                            type="text" 
                            name="username" 
                            placeholder='Enter username'
                            onChange={(event) => { 
                                setUsername(event.target.value) 
                            }} 
                            required></input>
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            className="input-register" 
                            type="password" 
                            name="password" 
                            placeholder='Enter password'
                            onChange={(event) => { 
                                setPassword(event.target.value) 
                            }} 
                            required></input>
                        <br /><br />
                        <Link to="/"><button
                             name="reg_user" 
                             type="submit" 
                             className="register-btn font-btn" 
                             onClick={addUser}>
                            
                            Sign up
                        </button></Link>
                    </form>
                </h5>

            </div>
        </div>
    );
}
export default Register;