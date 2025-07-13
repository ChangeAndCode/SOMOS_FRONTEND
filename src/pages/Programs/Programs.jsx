import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer"
import CardCarrousel from '../../components/CardCarrousel/CardCarrousel'
import {data} from './programs.json'

export default function Programs() {
    return <>
        <Nav/>
        <article className="first">
        <h2>Bienvenido a la pagina programas</h2>
        <CardCarrousel array={data} imgRoute={"./images/programs/"}></CardCarrousel>
        </article>    
        <Footer/>
    </>
}