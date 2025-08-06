import { Link } from 'react-router-dom'
import './Nav.css'
import ThemeToggleButton from '../ThemeToggleBtn'


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

    <Link to='/'>
        <img id='logo' src='./logos/somos-dark.png' alt='logo' />
    </Link>

    <div id='links'>
        {/*
        <Link to='/somos/eventos'>Eventos</Link>
        <img src="./icons/icon1.svg" alt="" />
        */}
        <Link to='/proyectos'>
            <p>Proyectos</p>
            <img src="./icons/icon2.svg" alt="" />
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
        <Link to='/programas'>
            <p>Programas</p>
            <img src="./icons/icon3.svg" alt="" />
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
        <Link to='/eventos'>
            <p>Eventos</p>
            <img src="./icons/folded-flag.svg" alt="" />
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
        <Link to='/testimonios'>
            <p>Testimonios</p>
            <img src="./icons/icon4.svg" alt="" />
        </Link>
        {/*<Link to='/somos/login'>Admin login</Link> */}
    </div>
    <ThemeToggleButton toogle={null}/>
</nav>


    </>
}