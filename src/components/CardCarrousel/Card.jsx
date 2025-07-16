export default function Card ({item, imgRoute, onClick}) {
    return <>
        <div className="card" onClick={ onClick }>
                <p className="date">{item.date}</p>
                <div className="card-img">
                    <img src={imgRoute + item.img} alt={item.title + "-img"}/>
                </div>
                
                <div className="overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
    </>
}