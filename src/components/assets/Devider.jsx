import React from "react";

const Devider = ({header, var2}) => {
    return (
        <div className=" px-20 max-[700px]:px-3 py-3">
            <div className="font-roboto-mono font-semibold text-xl text-right mb-2">
                {header}
            </div>
            <div className="text-justify text-gray-700 text-sm leading-6">
                {var2}
            </div>
        </ div>
    );
};

const SubHeader = ({header}) => {
    return (
        <div className="font-roboto-mono font-semibold text-lg text-left mb-2">
            {header}
        </div>
    );
};

export { Devider, SubHeader };