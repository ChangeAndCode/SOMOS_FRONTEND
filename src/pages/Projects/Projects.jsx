import './Projects.css'
import Nav from "../../components/Nav/Nav"
import Footer from '../../components/Footer/Footer'
import CardCarrousel from "../../components/CardCarrousel/CardCarrousel"
import { data } from './projects.json'

export default function Projects() {
    
    const addProjectForm = [
        {name: "projectName", label: "Nombre del proyecto", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
        {name: "description", label: "Descripcion", type: "text", placeholder: "Insgrese descripcion del proyecto", required: true}
    ]

    return <>
       <Nav/>
       <article className="first">
            <h2>Bienvenido a la seccion de proyectos</h2>
            <CardCarrousel array={data} imgRoute={"./images/projects/"}></CardCarrousel>
            
        </article>
        <Footer/> 
    </>
}   