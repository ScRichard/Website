import { useEffect, useRef } from "react";
import AboutScroll from "../utilities/about_utility";
import Section from "./about/Section";


const About = () => {
    return (
        <div className="w-full h-screen bg-gray-950 overflow-hidden relative flex flex-col items-end justify-around">
            <div className="text-white font-bold text-5xl text-center font-mono tracking-wide w-full md:w-1/2 p-4">
                Niečo o mne
            </div>

            <AboutScroll/>

            <div className="text-center text-white font-light text-lg md:text-xl lg:text-2xl w-full md:w-1/2 leading-relaxed space-y-6 px-4 md:px-0">
                <Section name={"Main"} body={
                    "Ahoj! Volám sa Richard. Som vývojár so záujmom o moderné technológie a dizajn. Rád vytváram interaktívne a responzívne aplikácie, ktoré sú nielen funkčné, ale aj esteticky príjemné."
                }/>
                <Section name={"Technologies"} body={
                    <>
                        Moje zručnosti zahŕňajú <span className="font-semibold text-lime-400">React</span>, <span className="font-semibold text-lime-400">JavaScript</span> a ďalšie webové technológie. Neustále sa snažím zlepšovať svoje schopnosti a učiť sa nové veci, aby som mohol prinášať čo najlepšie riešenia.
                    </>
                }/>
                <Section name={"Commit-force"} body={
                    <>
                       Moje zručnosti zahŕňajú <span className="font-semibold text-li</div>me-400">React</span>, <span className="font-semibold text-lime-400">JavaScript</span> a ďalšie webové technológie. Neustále sa snažím zlepšovať svoje schopnosti a učiť sa nové veci, aby som mohol prinášať čo najlepšie riešenia.
                    </>
                }/>

            </div>
        </div>
    );
}

export default About;
