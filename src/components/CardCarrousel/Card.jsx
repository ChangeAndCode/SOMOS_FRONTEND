export default function Card ({item}) {
    return <>
        <div className="card">
                <p className="date">{item.date}</p>
                <div className="card-img">
                    <img src="#" alt="card-img"/>
                </div>
                
                <div className="overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
    </>
}