import React, { createContext } from 'react';
import ComB from './ComB';

const BioData = createContext();

function ComA() {

    return (
        <BioData.Provider value={{
            fname:"Vaibhav",
            lname:"Gupta",
            Career:"React Js"
        }}>
           <ComB />
        </BioData.Provider>
    )
}

export default ComA;
export {BioData};