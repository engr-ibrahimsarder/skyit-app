import React from 'react';

const SectionTitleTwo = ({heading}) => {
    return (
        <div className="mx-auto text-center my-2">
            <h3 className="font-semibold text-base uppercase">{heading}</h3>
            <div className="divider bg-white w-8 h-1 mx-auto mt-[-2px]"></div>
        </div>
    );
};

export default SectionTitleTwo;