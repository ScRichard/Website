import React from "react";
import Me from "../../assets/photo.png";

const Hero = () => {
    return (
        <div className="flex flex-row max-[700px]:flex-col items-center justify-center gap-12 p-4">
            <div className="w-56 h-56 bg-gray-100 rounded-full flex items-center justify-center relative">
                <img src={Me} alt="me" className="w-full left-0 top-0 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 max-[700px]:items-center">
                <h1 className="font-roboto-mono font-bold text-3xl">Richard Schmidt</h1>
                <span className="text-sm text-gray-700">Student & Junior Software Engineer</span>
                <p className="mt-1 text-gray-800 font-medium">Žilina, Slovakia</p>
            </div>
        </div>
    );
}

export default Hero;