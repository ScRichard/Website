import { useState } from 'react';
import Button from './Button';

/* Navbar Component
 * Created by: ScRichard
 * Created on: 2025-22-03
 * Description: Toto je navbar komponenta, ktorá bude obsahovať navigačné odkazy na rôzne časti stránky.
 * Version: 1.0
 * Last update: 2025-22-03
*/
const Navbar = () => {
    return (
        <>
        <div className='flex flex-row justify-center items-center bg-gray-800 text-white p-2'>
            {/* Táto časť je na responzivitu */}
            <div className='hidden'>
                <Button text={"Domov"} href={"#"} icon={'bx bx-home-alt-2'}/>
            </div>
            <div>
                <Button text={"Domov"} href={"#"} icon={'bx bx-home-alt-2'}/>
            </div>
        </div>
        </>
    )

};


export default Navbar;