import { useEffect, useRef, useState } from "react"
import Card from "./Card"
import './style.css'
import DetailedCard from "./DetailedCard"

export default function CardCarrousel ({array}){

    const [selectedCard, setSelectedCard] = useState(null)

    useEffect(() => {
        console.log(selectedCard)
    }, [selectedCard])

    const ref = useRef()

    // -----  Horizontal scroll event 
    useEffect(() => {
        const el = ref.current;
        const onWheel = (e) => {
            if(e.delay !==0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY
            }
        }
        el.addEventListener('wheel', onWheel,{ passive: false})
        return () => el.removeEventListener('wheel', onWheel)
    }, [])

    return <>
        <section className="card-carrousel" ref={ref}>
            {array.map(item => <Card key={item.id} onClick={ () => setSelectedCard(item)} item={item} ></Card>)}
            
        </section>
        {selectedCard && (
                <DetailedCard card={selectedCard} onClose={() => setSelectedCard(null)}/>
            )}
    </>
}