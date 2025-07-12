import './style.css'

export default function Footer() {
    return <>
        <footer>
            <div>
                <h2>Contacto Somos Unión</h2>
                <p>
                    Lomas del Coronel 4600, 
                    Lomas de Santa Rosa, <br/> 
                    Lomas Universidad, Juventud Nte, <br />
                    31124 Chihuahua, Chih. <br />

                </p>
            </div>
            <div>
                <span>
                    <img src="./icons/facebook.svg" alt="" />
                    <p>Somos Unión</p>
                </span>
                <span>
                    <img src="./icons/whatsapp.svg" alt="" />
                    <p>614 415 6936</p>
                </span>
            </div>
            <div>
                <span>
                    <img src="./icons/instagram.svg" alt="" />
                    <p>somosunionac</p>
                </span>
                <span>
                    <img src="./icons/email.svg" alt="" />
                    <p>esperechihuahua@gmail.com </p>
                </span>
            </div>
        </footer>
    </>
}