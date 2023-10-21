import './style/welcomeStyle.css'
import Register from './register';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';

export default function Welcome(){
    return(
    <BrowserRouter>
        <div className="welcome">
            <div className="border">
                <h2>test</h2>
                <br/>
                <Link to="/register" target="_blank">Sign up</Link>
                <br/>
                <Link to="/login">Log in</Link>
            </div>
            <Routes>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
}