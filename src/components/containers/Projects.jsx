import {useState} from 'react'
import GothajImage from '../../assets/images/gothaj.jpg'
import PortfolioImage from '../../assets/images/portfolio.png'

import AderalImage from '../../assets/images/aderal.png'

const Projects = () => {
    return (
        <>
        <div className="flex flex-col bg-gray-900 items-center p-4">
            <div className="text-white font-bold text-5xl text-center font-mono tracking-wide w-full md:w-1/2 p-4">
                Projekty
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-3/4 p-4">
                <div className="bg-gray-950 rounded-lg p-4 flex flex-col gap-4 text-center justify-center items-center">
                    <div className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[rgb(99,102,241)] to-sky-500'>Gothaj Client</div>
                    <div className="text-gray-400">Minecraftový hack client</div>
                    <img src={GothajImage} class="w-full" alt="Gothaj UI" />
                    <a href="#" className="px-5 py-3 text-white font-medium rounded-md justify-center items-center bg-[rgba(99,102,241,.70)] hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-40 border">
                        <i className='bx bx-compass'></i>
                        <span>Pozrieť viac</span>
                    </a>
                </div>
                <div className="bg-gray-950 rounded-lg p-4 flex flex-col gap-4 text-center justify-center items-center">
                    <div className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[rgb(99,102,241)] to-sky-500'>Portfólio</div>
                    <div className="text-gray-400">Osobné portfolio</div>
                    <img src={PortfolioImage} class="w-full" alt="Portfolio UI" />
                    <a href="#" className="px-5 py-3 text-white font-medium rounded-md justify-center items-center bg-[rgba(99,102,241,.70)] hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-40 border">
                        <i className='bx bx-compass'></i>
                        <span>Pozrieť viac</span>
                    </a>
                </div>
                <div className="bg-gray-950 rounded-lg p-4 flex flex-col gap-4 text-center justify-center items-center">
                    <div className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[rgb(99,102,241)] to-sky-500'>Aderal.lol</div>
                    <div className="text-gray-400">Privátné fóra</div>
                    <img src={AderalImage} class="w-full" alt="Gothaj UI" />
                    <a href="#" className="px-5 py-3 text-white font-medium rounded-md justify-center items-center bg-[rgba(99,102,241,.70)] hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-40 border">
                        <i className='bx bx-compass'></i>
                        <span>Pozrieť viac</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;