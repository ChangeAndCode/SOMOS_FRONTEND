import Nav from "../../components/Nav/Nav";
import images from "../../../data/images.json";
import { useNavigate } from 'react-router-dom';

export default function Sumate() {
    const navigate = useNavigate();

    return (
        <>
            <Nav />
            <div className="max-w-6xl mx-auto flex flex-col justify-center  sm:px-6 lg:px-8  min-h-[calc(100vh-80px)]">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#8a3677] mb-4">Súmate a Nuestra Causa</h1>
                    <p className="text-lg sm:text-xl text-[#6a6a6a] max-w-2xl mx-auto leading-relaxed">
                        Tu apoyo es fundamental para seguir transformando vidas. 
                        Elige cómo quieres contribuir con nosotros.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <button 
                        className="flex flex-col items-center gap-2 p-6 sm:p-8 border-2 border-gray-300 rounded-2xl bg-white cursor-pointer transition-all duration-300 hover:border-[#8a3677] hover:-translate-y-1 hover:shadow-lg min-w-[200px] sm:min-w-[250px]"
                        onClick={() => navigate('/sumate/donacion')}
                    >

                        <div className="text-2xl mb-2"><img className='h-12' src={images.images.icons['donate.svg']} alt="" /></div>
                        <span className="font-semibold text-[#333]">Convertirse en Donador</span>
                    </button>
                    <button 
                        className="flex flex-col items-center gap-2 p-6 sm:p-8 border-2 border-gray-300 rounded-2xl bg-white cursor-pointer transition-all duration-300 hover:border-[#8a3677] hover:-translate-y-1 hover:shadow-lg min-w-[200px] sm:min-w-[250px]"
                        onClick={() => navigate('/sumate/voluntariado')}
                    >
                        <div className="text-2xl mb-2"><img className='h-12' src={images.images.icons['raised-hand.svg']} alt="" /></div>
                        <span className="font-semibold text-[#333]">Convertirse en Voluntario</span>
                    </button>
                </div>
            </div>
        </>
    );
}