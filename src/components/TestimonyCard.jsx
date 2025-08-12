export default function TestimonyCard ({testimony}) {
    return <>
        <div className="testimony">
            <img src={testimony.images[0]? testimony.images[0] : '#' } alt="userImg"/>
            <h1>“ ’’</h1>
            <h2>{testimony.message}</h2>
            <p>- Usuario 123456</p>
        </div>
    </>
}