import React, { createContext } from 'react';
import ComB from './ComB';

const BioData = createContext();

function ComA() {

    return (
        <BioData.Provider value={"Yo yo Dude man","This is 2nd string"}>
           <ComB />
        </BioData.Provider>
    )
}

export default ComA;
export {BioData};