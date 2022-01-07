import React, { useState } from 'react';
import '../styles/ArrayState.css';


const ArrayState = () =>{
    // let arr = ["block","none"];
    var bioData = [
        {
            id:1,
            name:"Vaibhav Gupta",
            job:"Apple"
        },
        {
            id:2,
            name:"Mansi Gupta",
            job:"Google"
        },
        {
            id:3,
            name:"Akash aur Dhruv",
            job:"Khi bhi kr lenge bas de do😂"
        }
    ];

    let [cBiodata,setBiodata] = useState(bioData);
    var num = 0;

    const Clearkrdo = () =>{
        if(num === 0){
            setBiodata([]);
            num = 1 - num;
        }
        else{
            setBiodata(
                [
                    {
                        id:1,
                        name:"Vaibhav Gupta",
                        job:"Apple"
                    },
                    {
                        id:2,
                        name:"Mansi Gupta",
                        job:"Google"
                    },
                    {
                        id:3,
                        name:"Akash aur Dhruv",
                        job:"Khi bhi kr lenge bas de do😂"
                    }
                ]
            );
            num = 1 - num;
            console.log(setBiodata);
        }
    }

    const removeEle = (id) =>{
        const newArray = cBiodata.filter((ele)=>{
            return ele.id !== id;
        });

        setBiodata(newArray);
    }

    // let ele = document.getElementById('.heading');
    // ele.classList.add(arr[0]);

    return (
        <div className='container'>
           {cBiodata.map((ele)=>{
               return (
                 <div >  
                  <h2 className='heading'>Name : {ele.name} and Job: {ele.job}  <button className='single' onClick={()=>removeEle(ele.id)}>Remove</button></h2>
                </div>
               );
           })}
           <button className='btn' onClick={Clearkrdo}>Clear</button>
        </div>
    )
}

export default ArrayState;