import './style/registerStyle.css'
import { Link } from 'react-router-dom'
const Register = () => {
    return(
        <div className="register">
            <div className="border-register">
                <h2>
                    Sign up to Start<br/>Moodify
                </h2>
                <h5>
                    Email address<br/>
                    <input className="input-register" type="text" name="email" required></input>
                    <br/>
                    Username<br/>
                    <input className="input-register" type="text" name="username" required></input>
                    <br/>
                    Password<br/>
                    <input className="input-register" type="password" name="password" required></input>
                </h5>
                <nav>
                <Link to="/"><button className="register-btn" id="font-btn">Sign up</button></Link>
                </nav>
                </div>
        </div>
    );
}
export default Register;