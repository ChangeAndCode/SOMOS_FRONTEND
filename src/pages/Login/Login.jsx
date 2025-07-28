import { useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { fetcher } from '../../utils/Fetcher';
import { useAuth } from '../../context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate();
    const [message, setMessage] = useState(false)

    const { login } = useAuth()
 

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const data = await fetcher('api/auth/login',{
                method: "POST",
                body: JSON.stringify({email, password})
            })

            console.log("Login exitoso", data)
            login(data)
            navigate('/admin/proyectos')
        } catch (err) {
            console.log("Login error: ", err.message)
            setMessage(err.message)
        }
    }

    return <>
        <article id="login-bg" className="first">
            <section id='login'>
                <form onSubmit={handleLogin}>
                    <Link to='/'>
                        <img id='login-logo' src="./logos/somos-dark.png" alt="" />
                    </Link>
                    
                    <h2>Bienvenido al panel de administración</h2>
                    <div>
                        <label htmlFor="user">Ingresa tu correo</label>
                        <input type="email" name='user' id='user' value={email} onChange={(e) => setEmail(e.target.value) }/>
                        <label htmlFor="password">Ingresa tu contraseña</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e)=> setpassword(e.target.value)} />
                        {message && (
                            <div className='error'>{message}</div>
                        )}
                        <p>No recuerdas tu contraseña? <br />
                        Contacta un administrador </p>
                    </div>
                    
                    <button type='submit'>Iniciar sesión</button>
                    
                </form>
                <img src="./event2024.jpg" alt="" />
            </section>
        
        </article> 
    </>
}