import { SubHeader } from "../Devider"

const School = ({name, year, description}) => {
    return (
        <div className="flex flex-col items-start gap-2 mb-4 outline-2 outline-gray-200 rounded-xl p-3">
            <div className="flex flex-row items-center justify-between w-full">
                <SubHeader header={name}/>
                <span className='text-gray-500 text-sm'>{year}</span>
            </div>
            <span className='text-gray-800'>{description}</span>
        </div>
    );
};

export default School;