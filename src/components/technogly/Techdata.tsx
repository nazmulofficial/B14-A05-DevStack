import React, { use } from 'react';
const Techdata = ({techPromise}) => {
    console.log(techPromise());
    const TechData=use(techPromise());
    console.log(TechData);
    return (
        <div>
            
        </div>
    );
};

export default Techdata;