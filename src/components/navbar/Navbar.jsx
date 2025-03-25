import { useEffect, useState } from 'react';
import Button from './Button';

/* Navbar Component
 * Created by: ScRichard
 * Created on: 2025-22-03
 * Description: Toto je navbar komponenta, ktorá bude obsahovať navigačné odkazy na rôzne časti stránky.
 * Version: 1.0
 * Last update: 2025-22-03
*/
const Navbar = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            console.log(window.pageYOffset)
            if(window.pageYOffset > 500) {
                document.getElementById("nav").classList.remove("absolute")
                document.getElementById("nav").classList.add("sticky")
                document.getElementById("nav").classList.remove("-translate-y-full")
            }else if(window.pageYOffset > 0){
                document.getElementById("nav").classList.remove("sticky")
                document.getElementById("nav").classList.add("absolute")
                document.getElementById("nav").classList.add("-translate-y-full")
            }else {
                document.getElementById("nav").classList.remove("sticky")
                document.getElementById("nav").classList.add("absolute")
                document.getElementById("nav").classList.remove("-translate-y-full")
            }
        });
    }, [])
    return (
        <>
        <div id="nav" className='absolute top-0 flex flex-row justify-center transition-all duration-500 items-center  w-full bg-[#0f0f0f38] backdrop-blur-lg shadow-xl text-white p-4 z-50'>
            {/* Táto časť je na responzivitu */}
            <div className='md:hidden flex flex-row justify-end w-full'>
                <button 
                    onClick={() => { 
                        setOpen(true); 
                    }} 
                    className="px-5 py-3 text-white font-medium rounded-md justify-center items-center bg-[rgba(99,101,241,0.07)] hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:border-[rgba(99,102,241,.70)] border">
                    <i className="bx bx-menu text-2xl"></i>
                </button>
            </div>
            {/* Vnútorná kompozícia */}
            <div className='flex-row justify-center items-center gap-2  md:flex hidden'>
                <Button text={"Domov"} href={"hero"} icon={'bx bx-home-alt-2'}/>
                <Button text={"O mne"} href={"about"} icon={'bx bxs-ghost'}/>
                <Button text={"Tvorba"} href={"projects"} icon={'bx bx-injection'}/>
                <a href="mailto:me@richardschmidt.dev" className="px-5 py-3 text-white font-medium rounded-md justify-center items-center bg-[rgba(99,101,241,0.07)] hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:border-[rgba(99,102,241,.70)] border">
                    <i className="bx bx-envelope"></i>
                    <span>Kontakt</span>
                </a>
            </div>
        </div>
        <div className={`fixed inset-0 bg-[rgba(99,101,241,0.07)] backdrop-blur-2xl z-50 duration-400 flex flex-col items-center justify-center md:hidden transition-all overflow-hidden ${!open ? "left-full" : "left-0"}`}>
                <button 
                    onClick={() => { 
                        setOpen(false); 
                    }} 
                    className="absolute top-4 right-4 text-white text-3xl"
                >
                    <i className="bx bx-x"></i>
                </button>
                <button 
                    onClick={() => {
                        setOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="text-white w-full h-20 font-medium rounded-md justify-center items-center hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:border-[rgba(99,102,241,.70)] border"
                >
                    <i className="bx bx-envelope"></i>
                    <span>Domov</span>
                </button>
                <button 
                    onClick={() => {
                        setOpen(false);
                        const element = document.getElementById(`about`);
                        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                    }} 
                    className="text-white w-full h-20 font-medium rounded-md justify-center items-center hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:border-[rgba(99,102,241,.70)] border"
                >
                    <i className="bx bx-envelope"></i>
                    <span>O mne</span>
                </button>
                <button 
                    onClick={() => {
                        setOpen(false);
                        const element = document.getElementById(`projects`);
                        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                    }} 
                    className="text-white w-full h-20 font-medium rounded-md justify-center items-center hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:border-[rgba(99,102,241,.70)] border"
                >
                    <i className="bx bx-envelope"></i>
                    <span>Tvorba</span>
                </button>
                <a 
                    href="mailto:me@richardschmidt.dev" 
                    className="text-white w-full h-20 font-medium rounded-md justify-center items-center hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:border-[rgba(99,102,241,.70)] border"
                >
                    <i className="bx bx-envelope"></i>
                    <span>Kontakt</span>
                </a>
            </div>
        </>
    )

};


export default Navbar;