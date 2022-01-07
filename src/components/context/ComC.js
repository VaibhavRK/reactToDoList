import React, { useContext } from 'react';
import {BioData} from './ComA';



function ComC() {
    const name = useContext(BioData);
    return(
        <div>
            <h1>Hello Guys {name} </h1>
        </div>
    ); 
}

export default ComC;
