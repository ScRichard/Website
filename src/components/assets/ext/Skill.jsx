const Skill = ({ name, description }) => {
    return (
        <div className="flex items-center gap-3 group">
            <p className='px-2 py-0.5 bg-blue-600 text-white rounded-lg font-roboto-mono font-bold text-xs transition-shadow group-hover:shadow-[0_0_10px_2px_rgba(37,99,235,0.7)]'>
                {name}
            </p>
            <span className='text-gray-800'>{description}</span>
        </div>
    );
}

export default Skill;