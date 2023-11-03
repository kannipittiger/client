import '../style/welcomeStyle.css'
import {Link} from 'react-router-dom'

export default function Welcome(){
    return(
        <div className="welcome">
            <div className="border">
                <h2>Welcome to Moodify</h2>
                <br/>
                <nav>
                <Link to="/register"><button className='btn'>Sign up</button></Link>
                <br/><br/>
                <Link to="/login"><button className='btn'>Log in</button></Link>
                </nav>
            </div>
        </div>
    );
}