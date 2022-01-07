import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () =>{

    const {name} = useParams();

    return (
        <>
        <h1>This is Contact Page and</h1>
        <h1> My name {name} </h1>
        </>
    )
}

export default Contact;