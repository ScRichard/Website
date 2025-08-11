import Skill from './ext/Skill';
import { SubHeader } from './Devider';
const Skills = () => {
    return (
        <div className="px-20 max-[700px]:px-3 w-full flex flex-col">
            <SubHeader header="Programming Languages" />
            <div className="grid grid-cols-2 gap-4 mb-4 w-full text-sm py-1 max-[700px]:grid-cols-1">
                <Skill name="Java" description="Backend & Minecraft plugins" />
                <Skill name="JavaScript" description="Websites & Backend" />
                <Skill name="Python" description="Backend & School projects" />
                <Skill name="C/C++" description="Memory reading & Injecting" />
                <Skill name="HTML" description="Websites" />
                <Skill name="CSS & SCSS" description="Websites" />
                <Skill name="TypeScript" description="Backend & Websites" />
            </div>
            <SubHeader header="Frameworks & Libraries" />
            <div className="grid grid-cols-2 gap-4 mb-4 w-full text-sm py-1 justify-center items-center max-[700px]:grid-cols-1">
                <Skill name="Flask" description="Backend of websites" />
                <Skill name="Spring" description="Backend of Websites" />
                <Skill name="Next.js" description="Backend & Scripts" />
                <Skill name="React.js" description="Frontend of Websites" />
                <Skill name="LWGL" description="Minecraft projects" />
                <Skill name="JDA" description="Discord bots development" />
                <Skill name="Tailwind CSS" description="Styling websites" />
            </div>
            <SubHeader header="Other" />
            <div className="grid grid-cols-2 gap-4 mb-4 w-full text-sm py-1 justify-center items-center max-[700px]:grid-cols-1">
                <Skill name="SQL" description="MySQL & PostgreSQL" />
                <Skill name="NoSQL" description="MongoDB & CouchDB" />
                <Skill name="LLMs" description="Usage in projects" />
                <Skill name="Docker" description="Containerization" />
                <Skill name="Git" description="Version control" />
                <Skill name="Linux" description="Basic setups for servers" />
                <Skill name="UX & UI" description="Design of UI's and also UX" />
                <Skill name="Testing" description="Basic knowlage of Unit Testing in projects" />
            </div>
        </div>
    );
}

export default Skills;