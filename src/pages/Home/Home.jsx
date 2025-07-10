
import { Link } from "react-router-dom"
import CountUp from "../../components/CountUp"
import './Home.css'

import Nav from '../../components/Nav/Nav'


export default function Home() {
    return <>
        <Nav/>
        <section id='cover'>
            <img id='cover-img' src='./event2024.jpg' alt='evento2024' />
            <div id='overlay'></div>
            <div id='content'>
                <h1>SOMOS Union</h1>
                <p>Nuestro objetivo es subsanar el tejido social de nuestra ciudad.
                Mejorando la calidad de vida de las personas.</p>
                <Link to='/somos/transparencia'>Conoce mas 
                    <img src="./icons/plus.svg" alt="pluz icon" />
                </Link>
            </div>
            
        </section>

        <section id='patreons'>
            <p>Orgullosos colaboradores de:</p>
            <div id='carrousel'>
                <img src='./logos/coprev.jpeg' alt='coprev-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/red-emprende.png' alt='red-emprende-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/redpro.png' alt='redpro-logo' />
            </div>
            { /* ---------  Duplicado  ----------*/ }
            <div id='carrousel2'>
                <img src='./logos/coprev.jpeg' alt='coprev-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/red-emprende.png' alt='red-emprende-logo' />
                <img src='./logos/somos.png' alt='somos-logo' />
                <img src='./logos/redpro.png' alt='redpro-logo' />
            </div>
        
        </section>

        <section id='statistics'>
            <div>
                <p>Proximo evento</p>
                <div className="statistic">
                    <h1>Name del evento</h1>
                    <img src="./icons/Frame.svg" alt="" />
                </div>
                <p>15 de Julio 2025</p>
                <p>Club de leones</p>
            </div>
            <div>
                <p>Comunidad</p>
                <div className="statistic">
                <h1><CountUp end={500} duration={1700} /></h1>
                <img src="./icons/Frame1.svg" alt="" />
                </div>
                <p>Nuevos</p>
                <p>Participantes</p>
            </div>
            <div>
                <p>Eventos realizados</p>
                <div className="statistic">
                <h1><CountUp end={42} duration={1700} /></h1>
                <img src="./icons/Frame2.svg" alt="" />
                </div>
                <p>Eventos a nivel</p>
                <p>estatal</p>
            </div>
            <div>
                <p>Recursos recaudados</p>
                <div className="statistic">
                <h1><CountUp end={15} duration={1700} /> mdp</h1>
                <img src="./icons/Frame3.svg" alt="" />
                </div>
                <p>Donados a apoyos</p>
                <p>comunitarios</p>
            </div>
        </section>

        <section id='events'>
            <h1>Hecha un vistazo a nuestras ultimas actividades</h1>
        
            <div className="event">
                <img src="./taller.jpg" alt="event" />
                <div>
                    <p></p>
                    <h2>7o MiFAM Canaco</h2>
                    <p>
                        En pro del desarrollo familiar.... descripcion objetivo del evento
                    </p>
                    <p id="date">fecha de inicio: 20 de junio 2025
                    En Cedefam Vallarta</p>
                </div>
                
            </div>

            <h1>Asiste a nuestro proximo evento!</h1>
            <div className="event">
                <div>
                    <p></p>
                    <h2>7o MiFAM Canaco</h2>
                    <p>
                        En pro del desarrollo familiar.... descripcion objetivo del evento
                    </p>
                    <p id="date">fecha de inicio: 20 de junio 2025
                    En Cedefam Vallarta</p>
                </div>
                <img src="./event.jpg" alt="event" />
            </div>
            
            
        </section>

        <footer>Contacto</footer>
    </>
}