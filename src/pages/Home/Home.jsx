import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Colaboration from "./components/colaboration";
import Statistics from "./components/statistics";
import Events from "./components/events";
import HomeData from "../../../data/home.json";
import images from "../../../data/images.json";
import Sumate from "../Sumate/Sumate";

export default function Home() {
  return (
    <>
      <Nav />
      <section id="cover" className="relative w-screen h-[70vh] overflow-visible">
        <img id="cover-img" src={images.images.events['event2024.jpg']} alt="evento2024" className="absolute inset-0 w-full h-full object-cover"/>
        <div id="overlay" className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div id="content" className="relative p-8 z-[2] h-full flex flex-col justify-center text-center items-center text-white translate-y-5 opacity-0 animate-showup">
          <h1 className="text-[48px] font-normal font-letterpress m-0">SOMOS Unión</h1>
          <p className="text-lg font-semilightitalic m-0">
            Nuestro objetivo es subsanar el tejido social de nuestra ciudad.{" "}
            <br />
            Mejorando la calidad de vida de las personas.
          </p>
          <Link to="/transparencia" className="mt-[2%] w-fit flex items-center bg-[#8a3677] text-white px-5 py-2.5 rounded-full cursor-pointer text-center transition-colors duration-300 hover:bg-[#59224c] font-bold-italic no-underline">
            Conoce mas
            <img src={images.images.icons['plus.svg']} alt="pluz icon" />
          </Link>
        </div>
      </section>

      <Colaboration data={HomeData.colaboration}/>
      <Statistics data={HomeData.statistics} />
      <Events data={HomeData.events} />
      <Sumate />

      <Footer />
    </>
  );
}
