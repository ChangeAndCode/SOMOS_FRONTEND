export default function Card ({item, imgRoute, onClick}) {

    return <>
        <div className="card" onClick={ onClick }>
                <p className="date">{item.date}</p>
                <div className="card-img">
                    <img src={item.images? item.images[0] : '#'} alt={item.title + "-img"}/>
                </div>
                
                <div className="overlay">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
    </>
}