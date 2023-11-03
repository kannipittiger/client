import './App.css';
import Welcome from './welcome/screens/welcome';
import Register from './welcome/screens/register';
import Login from './welcome/screens/login';
import Home from './MainApp/HomePages/HomeScreen';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LeftBox from './MainApp/HomePages/LeftBox';
import Search from './MainApp/HomePages/Search';
import AudioPlayer from './Audio/AudioPlayer';



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
        <Route path ="/lbox/:id" element={<LeftBox/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
