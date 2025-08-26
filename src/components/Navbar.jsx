import { React, useState, useEffect } from 'react';
import { BUTTON_STYLES } from '../assets/Styles';
import { FaRegMoon } from "react-icons/fa";
import { RiMenu2Line, RiCloseLargeFill } from "react-icons/ri";
import Button from './navbar/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        let opened = false;

        const handleScroll = () => {
            if (window.scrollY > 50 && !opened) {
                opened = true;
                navbar.classList.add('fixed', '-translate-y-full');
                navbar.classList.remove('relative');

                setTimeout(() => {
                    navbar.classList.remove('-translate-y-full');
                }, 300);
            } else if (window.scrollY <= 50) {
                opened = false;
                navbar.classList.remove('fixed', '-translate-y-full');
                navbar.classList.add('relative');
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav id="navbar" className='flex z-9 justify-center transition-all items-center max-[700px]:flex-col relative bg-gray-100 p-4 w-full'>
                <button
                    onClick={() => setIsOpen(true)}
                    className='text-gray-800 text-xl font-roboto-flex flex flex-row gap-2 justify-center items-center font-bold min-[700px]:hidden'
                >
                    <RiMenu2Line /> Menu
                </button>
                <div className="flex flex-row gap-4 max-[700px]:hidden">
                    <Button text="Home" href={"hero"}/>
                    <Button text="Skills" href={"skills"} />
                    <Button text="Education" href={"education"}/>
                    <Button text="Projects" href={"projects"}/>
                    <Button text="Contact" href={"contact"}/>
                </div>
            </nav>
            <div
                className={`fixed flex flex-col w-full h-screen z-10 bg-gray-100/60 backdrop-blur-md top-0 left-0 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className='text-gray-800 text-xl p-6 font-roboto-flex flex flex-row gap-2 justify-center items-center font-bold min-[700px]:hidden'
                >
                    <RiCloseLargeFill /> Close
                </button>
                <div className="flex flex-col gap-4">
                    <a href="" className={BUTTON_STYLES.primary}>Home</a>
                    <a href="" className={BUTTON_STYLES.primary}>Skills</a>
                    <a href="" className={BUTTON_STYLES.primary}>Education</a>
                    <a href="" className={BUTTON_STYLES.primary}>Projects</a>
                    <a href=""  className={BUTTON_STYLES.primary}>Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
