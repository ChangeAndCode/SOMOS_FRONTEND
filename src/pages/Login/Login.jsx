import './style.css'
import { Link } from 'react-router-dom'
export default function Login() {
    return <>
        <article id="login-bg" className="first">
            <section id='login'>
                <form>
                    <Link to='/somos/'>
                        <img id='login-logo' src="./logos/somos-dark.png" alt="" />
                    </Link>
                    
                    <h2>Bienvenido al panel de administración</h2>
                    <div>
                        <label htmlFor="user">Ingresa tu correo</label>
                        <input type="text" name='user' id='user'/>
                        <label htmlFor="pwd">Ingresa tu contraseña</label>
                        <input type="password" name="pwd" id="pwd" />
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