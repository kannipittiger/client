import './App.css';
import Welcome from './welcome/welcome';
import Register from './welcome/register';
import Login from './welcome/login';
import Home from './MainApp/HomeScreen';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Search from './MainApp/pagesHome/Search';
import AudioPlayer from './Audio/AudioPlay';


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="/audioplayer/:id" element={<AudioPlayer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
