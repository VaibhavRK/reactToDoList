import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const User = () =>{
    let {name, lname} = useParams();
    let location = useLocation();
    let history = useHistory();

    console.log(history);

    const showAlert = ()=>{
        history.goBack();
    }

    return (
        <>
        <h1>User {name} {lname} </h1>
        <h2>My current location is {location.pathname} </h2>
        <button onClick={showAlert} > Go Back </button>
        <button onClick={()=>history.goForward()} > Go Forward </button>
        <button onClick={()=>history.push('/')} > Go to About Page </button>
        </>
    )
}

export default User;