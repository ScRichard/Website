import { SubHeader } from "../Devider";

const Project = ({name, year, description_list}) => {
    return (
        <div className="flex flex-col items-start gap-2 mb-4 outline-2 outline-gray-200 rounded-xl p-3 w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <SubHeader header={name}/>
                <span className='text-gray-500 text-sm'>{year}</span>
            </div>
            <ul className="list-disc pl-5">
                {description_list.map((text, index) => (
                <li key={index} className="text-gray-800">{text}</li>
                ))}
            </ul>
        </div>
    )
}
export default Project;