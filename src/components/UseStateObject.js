import React, { useState } from 'react'

const UseStateObject = () => {

    let [cObj,setObj] = useState({myName:"Vaibhav",age:19,degree:"Btech"})
    let arr = ["Vaibhav","Mansi"];

    const changeName = ()=>{
        if(cObj.myName === arr[0]){
            setObj({...cObj,myName:arr[1]});
        }
        else{
            setObj({...cObj,myName:arr[0]});
        }
    }
    return (
        <div>
            <h1>Name : {cObj.myName} , Age: {cObj.age} , and degree : {cObj.degree}</h1>
            <button className='btn' onClick={changeName}>Click me</button>
        </div>
    )
}

export default UseStateObject;
