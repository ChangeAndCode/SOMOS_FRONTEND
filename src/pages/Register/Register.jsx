import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetcher } from '../../utils/fetcher';
import { useAuth } from '../../context/AuthContext';
import images from '../../../data/images.json';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [message, setMessage] = useState(false);

  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await fetcher('api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      });

      console.log('Registro exitoso', data);
      login(data); // guarda token + usuario en contexto
      navigate('/login');
    } catch (err) {
      console.log('Register error: ', err.message);
      setMessage(err.message);
    }
  };

  return (
    <article id="login-bg" className="first">
      <section id="login">
        <form onSubmit={handleRegister}>
          <Link to="/">
            <img id="login-logo" src="./logos/somos-dark.png" alt="" />
          </Link>

          <h2>Crea tu cuenta</h2>
          <div>
            <label htmlFor="name">Tu nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {message && <div className="error">{message}</div>}
          </div>

          <button type="submit">Registrarse</button>
        </form>
        <img src={images.images.events['event2024.jpg']} alt="" />
      </section>
    </article>
  );
}
