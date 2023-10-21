import './style/registerStyle.css'
export default function Register () {
    return(
        <div className="register">
            <div>
                <h2>
                    Sign up to Start<br/>Moodify
                </h2>
                <h5>
                    Email address<br/>
                    <input className="input" type="text" name="email" required></input>
                </h5>
                <h5>
                    Username<br/>
                    <input className="input" type="text" name="username" required></input>
                </h5>
                <h5>
                    Password<br/>
                    <input className="input" type="password" name="password" required></input>
                </h5>
                <button className="register-btn" id="font-btn">Sign up</button>
                </div>
        </div>
    );
}