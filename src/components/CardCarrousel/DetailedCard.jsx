import { useEffect, useRef } from "react"

export default function DetailedCard ({card, onClose, imgRoute}) {
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

    return <>
        <article ref={ventanaRef} className="detailed-card">
            <div>
                <img src={imgRoute + card.img} alt={card.img} />
                <section>
                    <h6>{card.date}</h6>
                    <h1>{card.title}</h1>  
                    
                    <p>{card.description}</p>
                </section>
            </div>
            
        </article>
    </>
}