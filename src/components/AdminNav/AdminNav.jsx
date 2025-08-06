import './style.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import ThemeToggleButton from '../ThemeToggleBtn'
import { useAuth } from '../../context/AuthContext'


export default function AdmiNav() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    return <>
        <nav id='adminnav'>

            <Link to='/'>
                <img id='logo' src='./logos/somos-dark.png' alt='logo' />
            </Link>
            <h1>Panel de administración</h1>
            <span>
                <button onClick={() => {logout(); navigate('/login')}}>Cerrar sesión</button>
                <ThemeToggleButton toogle={true}/>
            </span>
        </nav>


    </>
}