import { Link } from 'react-router-dom'

export default function Nav() {
    return <>
        <nav id='nav'>
    <svg viewBox="0 0 1440 130" preserveAspectRatio="none"
         style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <path d="M0 0V126C412 7 1440 145 1440 0H0Z"
              fill="url(#paint0_linear_17_3)" stroke="black"/>
        <defs>
            <linearGradient id="paint0_linear_17_3" x1="0" y1="41" x2="1440" y2="41" gradientUnits="userSpaceOnUse">
                <stop stop-color="#363636"/>
                <stop offset="0.158654" stop-color="#8A3677"/>
                <stop offset="0.774038" stop-color="#00ACA6"/>
                <stop offset="1" stop-color="#CBCBCB"/>
            </linearGradient>
        </defs>
    </svg>

    <Link to='/somos/'>
        <img id='logo' src='./SOMOSac_final_blanco.png' alt='logo' />
    </Link>

    <div id='links'>
        <Link to='/somos/eventos'>Eventos</Link>
        <img src="./icons/icon1.svg" alt="" />
        <Link to='/somos/projectos'>| Proyectos</Link>
        <img src="./icons/icon2.svg" alt="" />
        <Link to='/somos/programas'>| Programas</Link>
        <img src="./icons/icon3.svg" alt="" />
        <Link to='/somos/transparencia'>| Transparencia</Link>
        <img src="./icons/icon4.svg" alt="" />
    </div>
</nav>


    </>
}