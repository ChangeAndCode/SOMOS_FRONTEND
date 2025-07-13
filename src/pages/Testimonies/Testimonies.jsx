import "./style.css"
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer"
import TestimonyCard from "../../components/TestimonyCard"

export default function Testimonies () {
    return <>
        <Nav/>
        <article className="first">
            <h2 className="intro">Bienvenido al apartado de testimonios</h2>
            <section className="testimonies">
                <TestimonyCard></TestimonyCard>
                <TestimonyCard></TestimonyCard>
                <TestimonyCard></TestimonyCard>
                <TestimonyCard></TestimonyCard>
                <TestimonyCard></TestimonyCard>
                <TestimonyCard></TestimonyCard>
            </section>
        </article>
        <Footer/>
    </>
}