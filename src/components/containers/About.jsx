import { useEffect, useRef } from "react";
import AboutScroll from "../utilities/about_utility";
import Section from "./about/Section";
import me from "../../assets/images/me.png"


const About = () => {
    return (
        <div className="w-full h-screen bg-gray-950 overflow-hidden relative flex flex-col items-end justify-center gap-7" id="about">

            <div className="text-white font-bold text-5xl text-center font-mono tracking-wide w-full md:w-1/2 p-4">
                Niečo o mne
            </div>
            
            <AboutScroll/>
            <img src={me} alt="Me" className="absolute left-30 w-1/4 hidden md:block rounded-full" />


            <div className="text-center text-white font-light text-lg md:text-xl lg:text-2xl w-full md:w-1/2 leading-relaxed space-y-6 px-4 md:px-0">
                <Section name={"Main"} body={
                    "Ahoj! Volám sa Richard. Som vývojár so záujmom o moderné technológie a dizajn. Rád vytváram interaktívne a responzívne aplikácie, ktoré sú nielen funkčné, ale aj esteticky príjemné."
                }/>
                <Section name={"Technologies"} body={
                    <>
                        Moje zručnosti zahŕňajú <span className="font-semibold text-lime-400">Java</span>, <span className="font-semibold text-lime-400">Python</span>, <span className="font-semibold text-lime-400">React</span>, <span className="font-semibold text-lime-400">JavaScript</span> a ďalšie webové technológie. Neustále sa snažím zlepšovať svoje schopnosti a učiť sa nové veci, aby som mohol prinášať, čo najlepšie riešenia.
                    </>
                }/>
                <Section name={"Commit-force"} body={
                    <>
                       Zameriavam sa primárne na vývoj backendových systémov, ale aj software či samotný dizajn webových stránok.
                    </>
                }/>

            </div>
        </div>
    );
}

export default About;
