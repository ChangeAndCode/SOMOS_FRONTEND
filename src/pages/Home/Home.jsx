import { Link } from "react-router-dom";
import "./Home.css";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Colaboration from "./components/colaboration";
import Statistics from "./components/statistics";
import Events from "./components/events";
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

      <Colaboration />
      <Statistics data={HomeData.statistics} />
      <Events data={HomeData.events} />
      <Footer />
    </>
  );
}
