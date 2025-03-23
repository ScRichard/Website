
const Hero = () => {
    return (
        <div className="w-full h-screen flex justify-center align-center relative flex-col overflow-hidden">
            { /* background */}
            <div className="absolute w-full h-full top-0 left-0 bg-gray-700 -z-20"></div>

            <div className="text-white font-semibold text-6xl text-center font-[Permanent_Marker]">Inovácie, ktoré zmenia svet...</div>
            <div className="text-white font-semibold text-4xl text-center font-[Permanent_Marker]">V mojej hlave</div>
            <div className="text-gray-400 font-semibold text-2xl text-center">Richard Schmidt</div>

            <div className="flex flex-row justify-center items-center">
                <a href="#" className="peer text-white">
                    <i className='bx bx-compass' ></i>
                    <span className="peer-hover:block hidden">Pozrieť viac</span>
                </a>
            </div>
        </div>
        )
}
export default Hero;