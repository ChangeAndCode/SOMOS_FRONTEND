import './style.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    
    return <>
         <section className='sidebar'>
            <div className='links'>
                <Link to='/admin/proyectos'>
                    <img src="../icons/icon2.svg" alt="" />
                    Proyectos</Link>
                <Link to='/admin/programas'>
                    <img src="../icons/icon3.svg" alt="" />
                    Programas</Link>
                <Link to='/admin/eventos'>
                    <img src="../icons/folded-flag.svg" alt="" />
                    Eventos</Link>
                <Link to='/admin/testimonios'>
                    <img src="../icons/icon4.svg" alt="" />
                    Testimonios</Link>
                <Link to='/admin/notas'>
                    <img src="../icons/icon4.svg" alt="" />
                    Notas</Link>
                
            </div>
        </section>
    </>
}