import './App.css';
import Welcome from './welcome/welcome';
import Register from './welcome/register';
import Login from './welcome/login';
import Home from './MainApp/HomeScreen';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Search from './MainApp/pagesHome/Search';
import AudioPlay from './Audio/AudioPlay';
import tracks from './Audio/tracks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="audioplay" element={<AudioPlay  tracks={tracks}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
