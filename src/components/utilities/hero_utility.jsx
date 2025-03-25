import { useState, useEffect } from "react";

const HeroBG = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [...Array(80)].map(() => ({
                id: Math.random(),
                width: 100,
                height: 3,
                top: Math.random() * 100,
                left: Math.random() * 100,
                opacity: Math.random() * 0.8 + 0.2,
                boxShadow: `0 0 ${Math.random() * 4 + 1}px rgba(255, 255, 255, 0.8)`,
                animationDuration: Math.random() * 5 + 2,
            }));
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <>
            <div className="absolute w-full h-full bg-gray-900">
                <div className="absolute inset-0">
                    {stars.map((star) => (
                        <div
                            key={star.id}
                            className="relative star bg-white rounded-full shadow-lg falling-star"
                            style={{
                                width: `${star.width}px`,
                                height: `${star.height}px`,
                                top: `${star.top}%`,
                                left: `${star.left}%`,
                                opacity: 0,
                                transform: "rotate(45deg)",
                                background: "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.42))",
                                animation: `fall ${star.animationDuration}s linear infinite`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    @keyframes fall {
                        0% {
                            transform: translate(0) rotate(45deg);
                            opacity: 0;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            transform: translate(300px, 300px) rotate(45deg);
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </>
    );

};

export default HeroBG;