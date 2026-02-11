import './style.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import ThemeToggleButton from '../ThemeToggleBtn'
import { useAuth } from '../../context/AuthContext'
import images from '../../../data/images.json'
import { useTheme } from '../../context/ThemeContext';

export default function AdminNav() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const { darkMode } = useTheme();
        const logoSrc = darkMode
            ? images.images.logos['somos-dark.png']
            : images.images.logos['somos-light.png'];
    return <>
        <nav id='adminnav'>
            <Link to='/'>
                <img id='logo' src={logoSrc} alt='logo' />
            </Link>
            <h1>Panel de administración</h1>
            <span>
                <button onClick={() => {logout(); navigate('/login')}}>Cerrar sesión</button>
                <ThemeToggleButton toogle={true}/>
            </span>
        </nav>
    </>
}