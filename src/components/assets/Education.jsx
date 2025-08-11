import School from "./ext/School";

const Education = () => {
    return(
        <div className="px-20 max-[700px]:px-3">
            <School name={"BYTČA GRAMMAR SCHOOL"} year={"Sep 2021 - Jun 2025"} description={
                "I studied at this high school for 4 years, where I focused on Computer Science. During my studies, I began exploring the world of code, building early projects, and developing a strong foundation in tech and also attending seminars. I am now continuing my education at the University of Žilina, studying Computer Science."
            }/>
        </div>
    );
};

export default Education;