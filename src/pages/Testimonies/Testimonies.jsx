import "./style.css"
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer"
import TestimonyCard from "../../components/TestimonyCard"
import { fetcher } from "../../utils/fetcher"
import { useEffect, useState } from "react"

export default function Testimonies () {

    useEffect(() => {getTestimonies()}, [])

    const [testimonies, setTestimonies] = useState()

    async function getTestimonies () {
        const data = await fetcher('api/testimonies', {
            method: 'GET'
        })
        console.log('Fetched testimonies: ', data)
        setTestimonies(data)
    }

    return <>
        <Nav/>
        <article className="first">
            <h2 className="intro">Bienvenido al apartado de testimonios</h2>
            <section className="testimonies">
                {testimonies?.map((testimony, i) => 
                    <TestimonyCard key={i} testimony={testimony}></TestimonyCard>
                )}
            </section>
        </article>
        <Footer/>
    </>
}