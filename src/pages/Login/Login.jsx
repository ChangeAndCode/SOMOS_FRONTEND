import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            })

            const data = await res.json()

            if(!res.ok) {
                throw new Error(data.message || "Error de login")
            } 

            console.log("Login exitoso", data)
            localStorage.setItem("token", data.token)
        } catch (err) {
            console.log("Error: ", err.message)
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