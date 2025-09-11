import React from 'react';

import {Routes, Route, HashRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";
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
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/eventos" element={<Events />}></Route>
          <Route path="/proyectos" element={<Projects />}></Route>
          <Route path="/programas" element={<Programs />}></Route>
          <Route path="/transparencia" element={<Transparency />}></Route>
          <Route path="/testimonios" element={<Testimonies />}></Route>
          <Route path="/resultados" element={<Results />}></Route>

          <Route
            path="/admin/proyectos"
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/programas"
            element={
              <ProtectedRoute>
                <AdminPrograms />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/eventos"
            element={
              <ProtectedRoute>
                <AdminEvents />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/testimonios"
            element={
              <ProtectedRoute>
                <AdminTestimonies />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/notas"
            element={
              <ProtectedRoute>
                <AdminNotes />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}