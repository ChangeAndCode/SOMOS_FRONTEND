import { useEffect, useRef, useState } from "react"

export default function DetailedCard ({card, onClose}) {
    /// ---- Cierre al dar click afuera 
    const ventanaRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ventanaRef.current && !ventanaRef.current.contains(e.target)) {
                onClose()
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [onClose])

    /// ---- Carrousel ----
    const [index, setIndex] = useState(0)

     const prev = () => {
        setIndex((prevIndex) =>
        prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setIndex((prevIndex) =>
        prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return <>
        <article ref={ventanaRef} className="detailed-card">
            
                <section className="carrousel">
                    <div>
                    <img src={card.images? card.images[index] : '#'} alt={card.img} className="detailed-img"/>
                    </div>
                    <div className="thumbnails">
                        <button onClick={prev}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 88 104 128 144 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                        </button>
                        {card.images? card.images.map((img, i) => 
                        <img src={img} key={i} style={i === index ? { border: '4px solid var(--primary)', padding: '0%'  } : {}}></img>
                        ): {}}
                        <button onClick={next}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="112 88 152 128 112 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                        </button>
                    </div>
                </section>
                <section className="content">
                    <h1>{card.name}</h1>  
                    <p>{card.description}</p>
                    <h3 className="numbers">{card.startDate}</h3>
                </section>

            
        </article>
    </>
}