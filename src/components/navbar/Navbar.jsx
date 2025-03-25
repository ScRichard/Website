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
            <div className='hidden'>
                <Button text={""} href={"#"} icon={'bx bx-home-alt-2'}/>
            </div>
            {/* Vnútorná kompozícia */}
            <div className='flex flex-row justify-center items-center gap-2'>
                <Button text={"Domov"} href={"#"} icon={'bx bx-home-alt-2'}/>
                <Button text={"O mne"} href={"#"} icon={'bx bxs-ghost'}/>
                <Button text={"Tvorba"} href={"#"} icon={'bx bx-injection'}/>
                <Button text={"Kontakt"} href={"#"} icon={'bx bx-envelope'}/>
            </div>
        </div>
        </>
    )

};


export default Navbar;