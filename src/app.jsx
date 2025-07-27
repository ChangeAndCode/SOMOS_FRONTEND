import React from 'react';

import {Routes, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Events from './pages/Events/Events';
import Transparency from './pages/Transparency/Transparency';
import Programs from './pages/Programs/Programs';
import Projects from './pages/Projects/Projects';
import Testimonies from './pages/Testimonies/Testimonies';
import Results from './pages/Results/Results';

import AdminProjects from './pages/Admin/Projects'
import AdminPrograms from './pages/Admin/Programs'
import AdminEvents from './pages/Admin/Events'
import AdminTestimonies from './pages/Admin/Testimonies'
import AdminNotes from './pages/Admin/Notes'


export default function App() {
  return <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/eventos' element={<Events/>}></Route>
          <Route path='/proyectos' element={<Projects/>}></Route>
          <Route path='/programas' element={<Programs/>}></Route>
          <Route path='/transparencia' element={<Transparency/>}></Route>
          <Route path='/testimonios' element={<Testimonies/>}></Route>
          <Route path='/resultados' element={<Results/>}></Route>

          <Route path='/admin/proyectos' element={<AdminProjects/>}></Route>
          <Route path='/admin/programas' element={<AdminPrograms/>}></Route>
          <Route path='/admin/eventos' element={<AdminEvents/>}></Route>
          <Route path='/admin/testimonios' element={<AdminTestimonies/>}></Route>
          <Route path='/admin/notas' element={<AdminNotes/>}></Route>
        </Routes>
      </HashRouter>
  </React.StrictMode>
}