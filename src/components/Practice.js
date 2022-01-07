import React, { useState } from 'react';
import '../styles/practice.css'

function Practice() {
    var num = 0;
    var multiplier = 0;
    var result = 0;
    let [currNum,setNum] = useState(num);
    let [currResult,setResult] = useState(result);
    let [currMulti,setMulti] = useState(multiplier);

    const incNum = ()=>{
        setNum(++currNum);
        setResult(currNum*currMulti);
    }
    const decNum = ()=>{
        setNum(--currNum);
        setResult(currNum*currMulti);
    }

    const incMul = ()=>{
        setMulti(++currMulti);
        setResult(currNum*currMulti);
    }

    const decMul = ()=>{
        setMulti(--currMulti);
        setResult(currNum*currMulti);
    }


    return (
        <div className='container'>
            <h1>{currNum}</h1>
            <div>
                <button onClick={incNum}>+</button>
                <button onClick={decNum}>-</button>
            </div>

            <br></br>
            <br></br>

            <h2>{currNum} X {currMulti} = {currResult}</h2>
            <div>
                <button onClick={incMul}>+</button>
                <button onClick={decMul}>-</button>
            </div>
        </div>
    )
}

export default Practice;
