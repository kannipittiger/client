import '../style/loginStyle.css';
import Axios from 'axios';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { url_api } from '../../config';
import Swal from 'sweetalert2';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    Axios.post(`${url_api}/login`, {
      username: username,
      password: password,
    })
      .then(() => {
        window.location.href ="/home";
      })
      .catch((error) => {
        // Handle login error
        console.error('Login failed:', error);
        Swal.fire({
          icon:'error',
          title: 'Oops...',
          text:'Login failed. Please check your credentials.'});
      });
  };

  return (
    <div className="login">
      <div className="border-login">
        <h2>Log in to Moodify</h2>
        <h5>
          <form action="login" method="post">
            <label htmlFor="username">Username</label>
            <br />
            <input
              className="input-login"
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            ></input>
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            ></input>
            <br /><br />
          </form>
        </h5>
        <nav>
          <button
            name="login"
            type="button"
            className="login-btn font-btn"
            onClick={loginUser}
          >
            Log in
          </button>
          <br />
          <p className="no-acc">Don't have an account?</p>
          <Link className="link" to="/register">
            Sign up for Moodify
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Login;
