import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Events from './pages/Events/Events';
import Transparency from './pages/Transparency';
import Programs from './pages/Programs';
import Projects from './pages/Projects';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <>
      <Router>
        <Routes>
          <Route path='/somos/' element={<Home/>}/>
          <Route path='/somos/login' element={<Login/>}></Route>
          <Route path='/somos/eventos' element={<Events/>}></Route>
          <Route path='/somos/projectos' element={<Projects/>}></Route>
          <Route path='/somos/programas' element={<Programs/>}></Route>
          <Route path='/somos/transparencia' element={<Transparency/>}></Route>
        </Routes>
      </Router>
      
    </>
  </React.StrictMode>
);
