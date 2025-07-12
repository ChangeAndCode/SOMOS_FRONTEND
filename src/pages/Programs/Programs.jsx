import Nav from "../../components/Nav/Nav"
import CardCarrousel from '../../components/CardCarrousel/CardCarrousel'
import {data} from '../../projects.json'

export default function Programs() {
    return <>
        <Nav></Nav>
        <article className="first">
        <h2>Bienvenido a la pagina programas</h2>
        <CardCarrousel array={data}></CardCarrousel>
        </article>    
    </>
}