import './style/registerStyle.css'

const Register = () => {

    return(
        <div className="register">
            <div className="border-register">
                <h2>
                    Sign up to Start<br/>Moodify
                </h2>
                <h5>
                    <form method="post" action="register_db.php">
                        <label for="email">Email address</label>
                        <br/>
                        <input className="input-register" type="email" name="email" placeholder='Enter email' required></input>
                        <br/>
                        <label for="username">Username</label>
                        <br/>
                        <input className="input-register" type="text" name="username" placeholder='Enter username' required></input>
                        <br/>
                        <label for="password">Password</label>
                        <br/>
                        <input className="input-register" type="password" name="password" placeholder='Enter password' required></input>
                        <br/><br/>
                        <button name="reg_user" type="submit" className="register-btn font-btn">Sign up</button>
                    </form>
                </h5>
                
                </div>
        </div>
    );
}
export default Register;