import { useEffect, useRef } from "react"
import Card from "./Card"
import './style.css'

export default function CardCarrousel ({array, imgRoute}){

    const ref = useRef()

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
            {array.map(item => <Card item={item} imgRoute={imgRoute} key={item.id}></Card>)}

        </section>
    </>
}