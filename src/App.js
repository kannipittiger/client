import logo from './logo.svg';
import './App.css';
import Welcome from './welcome/welcome';
import { BrowserRouter ,Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Welcome />}>
                  
              </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
