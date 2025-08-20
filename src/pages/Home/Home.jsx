import { Link } from "react-router-dom";
import "./Home.css";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Colaboration from "./components/colaboration";
import Statistics from "./components/statistics";
import HomeData from "../../../data/home.json";

export default function Home() {
  return (
    <>
      <Nav />
      <section id="cover">
        <img id="cover-img" src="./event2024.jpg" alt="evento2024" />
        <div id="overlay"></div>
        <div id="content">
          <h1>SOMOS Unión</h1>
          <p>
            Nuestro objetivo es subsanar el tejido social de nuestra ciudad.{" "}
            <br />
            Mejorando la calidad de vida de las personas.
          </p>
          <Link to="/transparencia">
            Conoce mas
            <img src="./icons/plus.svg" alt="pluz icon" />
          </Link>
        </div>
      </section>

      <Colaboration data={HomeData.colaboration}/>
      <Statistics data={HomeData.statistics} />

      <section id="events">
        <h1>Hecha un vistazo a nuestras ultimas actividades</h1>

        <div className="event">
          <img src="./event3.jpg" alt="event" />
          <div>
            <p></p>
            <h2>7o MiFAM Canaco</h2>
            <p>
              En pro del desarrollo familiar.... descripcion objetivo del evento
            </p>
            <p id="date">
              fecha de inicio: 20 de junio 2025 En Cedefam Vallarta
            </p>
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
            <p id="date">
              fecha de inicio: 20 de junio 2025 En Cedefam Vallarta
            </p>
          </div>
          <img src="./event.jpg" alt="event" />
        </div>
      </section>

      <Footer />
    </>
  );
}
