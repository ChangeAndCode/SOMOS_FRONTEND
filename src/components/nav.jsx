import { Link } from 'react-router-dom'

export default function Nav() {
    return <>
       <nav id='nav'>
            <Link to='/somos/'>
                <img id='logo' src='./SOMOSac_final_blanco.png' alt='logo' />
            </Link>
            <div id='links'>
                <Link to='/somos/eventos'>Eventos</Link>
                <Link to='/somos/projectos'>Proyectos</Link>
                <Link to='/somos/programas'>Programas</Link>
                <Link to='/somos/transparencia'>Transparencia</Link>
            </div>
        </nav>
    </>
}