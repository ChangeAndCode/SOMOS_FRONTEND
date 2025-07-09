import Nav from "../../components/Nav/Nav"
import './Events.css'

export default function Events() {
    return <>
        <Nav></Nav>
        <section className="section">
            <div className="container">
                
                <img src="./event.jpg" alt="event" />
                <h2>7o MiFAM Canaco</h2>
                <p>
                    En pro del desarrollo familiar.... descripcion objetivo del evento
                </p>
                <p id="date">fecha de inicio: 20 de junio 2025
                En Cedefam Vallarta</p>
            
            </div>
            
            <div className="container">
                
                <img src="./event3.jpg" alt="event" />
<h2>7o MiFAM Canaco</h2>
                
                <p>
                    En pro del desarrollo familiar.... descripcion objetivo del evento
                </p>
                <p id="date">fecha de inicio: 20 de junio 2025
                En Cedefam Vallarta</p>
            </div>
        </section>       
         
    </>
}