import './style/registerStyle.css'
import Axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [userList, setUserList] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = () => {
        Axios.post('http://localhost:3001/create',{
            username: username,
            email:email,
            password:password
        }).then(() => {
            setUserList([            
            ...userList,{
                username:username,
                email:email,
                password:password
            }])

        })
        alert("Sign up success");
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