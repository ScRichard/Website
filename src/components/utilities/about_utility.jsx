
const AboutScroll = () => {
    return (
        <div className="absolute flex flex-row gap-3 transform h-full -rotate-3 -left-3/4 md:-left-1/4 w-1/2">
                {Array.from({ length: 5 }).map((_, sectionIndex) => {
                    const duration = 4 + Math.random() * 5;
                    return (
                        <div key={sectionIndex} className="w-40 h-full flex flex-col relative items-center">
                            <div className="absolute w-40 h-60 top-full lufthansa flex items-center justify-center bg-none" style={{ "--duration": duration+"s", "--delay": `${duration / 7* 6}s` }}>
                                <i className="bx bxl-python text-3xl text-gray-600"></i>
                            </div>
                            <div className="absolute w-40 h-60 top-full lufthansa flex items-center justify-center bg-none" style={{ "--duration": duration+"s", "--delay": `${duration / 7* 5}s` }}>
                                <i className="bx bxl-java text-3xl text-gray-600"></i>
                            </div>
                            <div className="absolute w-40 h-60 top-full lufthansa flex items-center justify-center bg-none" style={{ "--duration": duration+"s", "--delay": `${duration / 7* 4}s` }}>
                                <i className="bx bxl-flask text-3xl text-gray-600"></i>
                            </div>
                            <div className="absolute w-40 h-60 top-full lufthansa flex items-center justify-center bg-none" style={{ "--duration": duration+"s", "--delay": `${duration / 7* 3}s` }}>
                                <i className="bx bxl-spring-boot text-3xl text-gray-600"></i>
                            </div>
                            <div className="absolute w-40 h-60 top-full lufthansa flex items-center justify-center bg-none" style={{ "--duration": duration+"s", "--delay": `${0}s` }}>
                                <i className="bx bxl-git text-3xl text-gray-600"></i>
                            </div>
                            <div className="absolute w-40 h-60 top-full lufthansa flex items-center justify-center bg-none" style={{ "--duration": duration+"s", "--delay": `${duration / 7* 2}s` }}>
                                <i className="bx bxl-tailwind-css text-3xl text-gray-600"></i>
                            </div>
                            <div className="absolute w-40 h-60 top-full lufthansa flex items-center justify-center bg-none" style={{ "--duration": duration+"s", "--delay": `${duration / 7}s` }}>
                                <i className="bx bx-dumbbell text-3xl text-gray-600"></i>
                            </div>
                        </div>
                    );
                })}
            </div>
    )
}

export default AboutScroll;