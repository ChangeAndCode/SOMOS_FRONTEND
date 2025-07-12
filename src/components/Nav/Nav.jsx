import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav() {
    return <>
        <nav id='nav'>
            <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
        <path d="M0 0V126C412 7 1440 145 1440 0H0Z"
              fill="url(#paint0_linear_17_3)" stroke="black"/>
        <defs>
            <linearGradient id="paint0_linear_17_3" x1="0" y1="41" x2="1440" y2="41" gradientUnits="userSpaceOnUse">
                <stop stopColor="#363636"/>
                <stop offset="0.158654" stopColor="#8A3677"/>
                <stop offset="0.774038" stopColor="#00ACA6"/>
                <stop offset="1" stopColor="#CBCBCB"/>
            </linearGradient>
        </defs>
    </svg>

    <Link to='/somos/'>
        <img id='logo' src='./logos/somos-dark.png' alt='logo' />
    </Link>

    <div id='links'>
        {/*
        <Link to='/somos/eventos'>Eventos</Link>
        <img src="./icons/icon1.svg" alt="" />
        */}
        <Link to='/somos/proyectos'>Proyectos</Link>
        <img src="./icons/icon2.svg" alt="" />
        <Link to='/somos/programas'>| Programas</Link>
        <img src="./icons/icon3.svg" alt="" />
        <Link to='#'>| Resultados</Link>
        <img src="./icons/folded-flag.svg" alt="" />
        <Link to='/somos/transparencia'>| Testimonios</Link>
        <img src="./icons/icon4.svg" alt="" />
    </div>
</nav>


    </>
}