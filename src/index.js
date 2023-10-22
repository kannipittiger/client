import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
=======
import Welcome from './welcome/welcome'
import Login from './welcome/login'
import Register from './welcome/register'
import Banner from './MainApp/Banner'
>>>>>>> d004daf (bannerchange)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
