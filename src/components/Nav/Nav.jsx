import { Link } from 'react-router-dom'
import './Nav.css'
import ThemeToggleButton from '../ThemeToggleBtn'
import { useEffect, useRef, useState } from 'react'


export default function Nav() {
    const [showIcons, setShowIcons] = useState(false)
    const navDropdownRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (navDropdownRef.current && !navDropdownRef.current.contains(e.target)) {
                setShowIcons(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [showIcons])

    return <>
        <nav id='nav'>
            <svg id='bgSvg' viewBox="0 0 1440 130" preserveAspectRatio="none">
                <path d="M0 0V126C412 7 1440 145 1440 0H0Z"
                    fill="url(#paint0_linear_17_3)" stroke="black"/>
                <defs>
                    <linearGradient id="paint0_linear_17_3" x1="0" y1="41" x2="1440" y2="41" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#363636"/>
                        <stop offset="0.158654" stopColor="#8A3677"/>
                        <stop offset="0.774038" stopColor="#00ACA6"/>
                        <stop offset="1" stopColor="#CBCBCB"/>
                    </linearGradient>
                </defs>
            </svg>

            <Link to='/'>
                <img id='logo' src='./logos/somos-dark.png' alt='logo' />
            </Link>

            <div id='navDropdown'>
                <button onClick={() => setShowIcons(!showIcons)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </button>

                {showIcons && (
                    <ul ref={navDropdownRef}>
                        <Link to='/proyectos'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                            <p>Proyectos</p>
                        </Link>
                        <Link to='/programas'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,120a24,24,0,0,1,48,0c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                            <p>Programas</p>
                        </Link>
                        <Link to='/eventos'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                            <p>Eventos</p>
                        </Link>
                        <Link to='/testimonios'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="40" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                            <p>Testimonios</p>
                        </Link>
                    </ul>
                )}
            </div>

            <div id='links'>
                {/*
                <Link to='/somos/eventos'>Eventos</Link>
                <img src="./icons/icon1.svg" alt="" />
                */}
                <Link to='/proyectos'>
                    <p>Proyectos</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                <Link to='/programas'>
                    <p>Programas</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,120a24,24,0,0,1,48,0c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                <Link to='/eventos'>
                    <p>Eventos</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                <Link to='/testimonios'>
                    <p>Testimonios</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="40" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </Link>
                {/*<Link to='/somos/login'>Admin login</Link> */}
            </div>
            <ThemeToggleButton toogle={null}/>
        </nav>
    </>
}