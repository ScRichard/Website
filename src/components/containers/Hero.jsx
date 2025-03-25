import HeroBG from "../utilities/hero_utility";
const Hero = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center relative flex-col overflow-hidden gap-5">
            { /* background */}
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900 -z-20"></div>

            <HeroBG/>

            { /* Hlavná stránka do všetkého */}
            <div className="flex flex-col gap-2">
                <div className="text-white font-semibold text-4xl font-[Source_Code_Pro]">Frontend? Backend? Full-stack?</div>
                <div className="text-white font-semibold text-4xl font-[Source_Code_Pro]"> Skôr 'All-stack-overflow' vývojár.</div>
                <div className="text-gray-400 font-mono text-xl">// Ahoj, volám sa Richard. Som fullstack vývojár.</div>
            </div>
            { /* Tlačítko pozrieť viac */}
            <div className="flex flex-row justify-center items-center absolute bottom-0 -translate-1/2 left-1/2">
            <a href="#" className="px-5 py-3 text-white font-medium rounded-md justify-center items-center bg-[rgba(99,102,241,.70)] hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] border">
                <i className='bx bx-compass'></i>
                <span>Pozrieť viac</span>
            </a>
            </div>
        </div>
        )
}
export default Hero;