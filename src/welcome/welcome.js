import './style/welcomeStyle.css'
import {Link} from 'react-router-dom'

export default function Welcome(){
    return(
        <div className="welcome">
            <div className="border">
                <h2>Welcome to Moodify</h2>
                <br/>
                <nav>
                <Link to="/register">Sign up</Link>
                <br/>
                <Link to="/login">Log in</Link>
                </nav>
            </div>
        </div>
    );
}