import logo from './logo.svg';
import './App.css';
import Welcome from './welcome/welcome';
import Register from './welcome/register';
import Login from './welcome/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
