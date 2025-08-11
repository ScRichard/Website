import Project from './ext/Project';

const Projects = () => {
    return (
        <div className="w-full px-20 max-[700px]:px-3">
            <Project
                name={"GOTHAJ MINECRAFT CLIENT"}
                year={"2022 - 2024"}
                description_list={[
                    "A custom Minecraft client with advanced features",
                    "Managing a team of developers (4 people)",
                    "Developed in Java with C++ components",
                    "Over 100,000 downloads and around 100+ daily active users",
                    "One of the most popular clients in the community",
                ]}
            />
        </div>
    );
}

export default Projects;