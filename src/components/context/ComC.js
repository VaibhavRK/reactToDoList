import React, { useContext } from 'react';
import {BioData} from './ComA';



function ComC() {
    const name = useContext(BioData);
    return(
        <div>
            <h1>Hello Guys {name.fname} {name.lname} </h1>
            <h1>My Career : {name.Career} </h1>
        </div>
    ); 
}

export default ComC;
