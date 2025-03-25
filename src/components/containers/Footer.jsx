import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950/97 text-white py-6">
            <div className="flex justify-center space-x-6">
                <a href="https://www.github.com/ScRichard" className="p-3.5" target='_blank'><i className='bx bxl-github'></i></a>
                <a href="https://www.facebook.com/profile.php?id=100078466874052" className="p-3.5" target='_blank'><i className='bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/rchrd.sch/"  className="p-3.5" target='_blank'><i className='bx bxl-instagram' ></i></a>
            </div>
            <p className="mt-4 text-sm text-center text-gray-400">
                © {new Date().getFullYear()} Richard Schmidt. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;