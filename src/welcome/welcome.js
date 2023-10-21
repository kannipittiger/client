import './style/welcomeStyle.css'

export default function Welcome(){
    return(
        <div className="welcome">
            <div className="border">
                <h2>tetetett</h2>
                <br/>
                <a href="/register">Sign up</a>
                <br/>
                <a href="/login">Log in</a>
            </div>
        </div>
    );
}