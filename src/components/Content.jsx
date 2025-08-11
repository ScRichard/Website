import React from 'react';
import Hero from './assets/Hero';
import {Devider, SubHeader} from './assets/Devider';
import Skills from './assets/Skills';
import Education from './assets/Education';
import Projects from './assets/Projects';
import Contact from './assets/Contact';
import Footer from './assets/Footer';

const Content = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[700px] max-[700px]:w-full'>
            <Hero />
            <Devider header="ABOUT ME" var2="I'm a developer based in Slovakia. I’ve recently graduated from high school and I'm now starting my studies in Computer Science at the University of Žilina. I enjoy turning ideas into real projects, writing clean and efficient code, and continuously learning new technologies. My goal is to build useful, meaningful, and modern digital solutions — and always keep improving."/>
            
            <Devider header="SKILLS" var2="I specialize in backend development, web programming, and app creation. I'm always learning, improving, and building clean, functional digital experiences."/>
            <Skills />

            <Devider header="EDUCATION" var2="I recently graduated from high school and am preparing to study at the University of Žilina. I'm passionate about technology and constantly expanding my knowledge through both formal education and personal projects."/>
            <Education />

            <Devider header="PROJECTS" var2="Here you can explore some of the projects I’ve worked on. They showcase my skills in programming, backend development, app creation, and design. Each project reflects my passion for building functional and creative digital solutions."/>
            <Projects />
            <Devider header="CONTACT" var2="Whether you have a project in mind, want to collaborate, or just say hello — feel free to reach out. I'm always open to new opportunities and ideas."/>
            <Contact />
            <Footer />
        </div>
    );
};

export default Content;