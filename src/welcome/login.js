import './style/loginStyle.css'
export default function Login () {
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
                <a className="link" href="welcome.js">Forgot password</a>
                <p className="no-acc">Don't have an account?</p>
                <a className="link" href="register.js">Sign up for Moodify</a>
            </div>
        </div>
    );
}