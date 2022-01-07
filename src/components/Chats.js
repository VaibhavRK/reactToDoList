import React, { useEffect, useState } from 'react'
import TitleChange from './TitleChange';

function Chats() {
    let [count,setCount] = useState(0);

    let [winSize,setWinsize] = useState(window.screen.width);

    TitleChange(count);

    useEffect(()=>{
        console.log("add event");
        window.addEventListener("resize", ()=>{
            setWinsize(window.innerWidth);
        });

        console.log(winSize);
        
        return() =>{
            console.log("remove event");
            window.removeEventListener("resize",()=>{
                setWinsize(window.innerWidth);
            })
        }
    })

    const updatecount = ()=>{
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={updatecount}>Click me</button>
            <p> {winSize} </p>
        </div>
    )
}

export default Chats;
