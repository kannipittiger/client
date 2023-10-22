import './style/loginStyle.css'
import {Link} from 'react-router-dom';
const Login = () => {
    return(
        <div className="login">
            <div className="border-login">
                <h2>
                    Log in to Moodify
                </h2>
                <h5>
                    Email address<br/>
                    <input className="input-login" type="text" name="email" required></input><br/>
                    Password<br/>
                    <input className="input-login" type="password" name="password" required></input>
                </h5>
                <button className="login-btn" id="font-btn">Log in</button>
                <br/>
                <nav>
                <Link className="link" to="/recover">Forgot password</Link>
                <p className="no-acc">Don't have an account?</p>
                <Link className="link" to="/register">Sign up for Moodify</Link>
                </nav>
            </div>
        </div>
    );
}
export default Login;