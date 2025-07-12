import Nav from "../../components/Nav/Nav"
import './Projects.css'
import CardCarrousel from "../../components/CardCarrousel/CardCarrousel"
import { data } from '../../projects.json'

export default function Projects() {
    
    return <>
       <Nav></Nav>
       <article className="first">
            <h2>Bienvenido a la seccion de proyectos</h2>
            <CardCarrousel array={data}></CardCarrousel>
        </article> 
    </>
}   