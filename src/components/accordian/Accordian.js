import React, { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { AiFillMinusCircle } from 'react-icons/ai';
import '../../styles/accordian.css';


const data = [
    {
        id:1,
        question:"The value of pie ?",
        answer:"3.14 and out of your aukat"
    },
    {
        id:2,
        question:"How the josh ?",
        answer:"Kahrab ek dum"
    },
    {
        id:3,
        question:"Kamehamaeha ka Copyright kiske pass hai?",
        answer:"Goku ke pass"
    },
    {
        id:4,
        question:"Ukhad lo jo ukhad sako ?",
        answer:"Mera baap tera sab ukhad dega"
    },
    {
        id:5,
        question:"Ukhad lo jo ukhad sako ?",
        answer:"Mera baap tera sab ukhad dega"
    },
    {
        id:6,
        question:"Ukhad lo jo ukhad sako ?",
        answer:"Mera baap tera sab ukhad dega"
    },
    {
        id:7,
        question:"Ukhad lo jo ukhad sako ?",
        answer:"Mera baap tera sab ukhad dega"
    },
    {
        id:8,
        question:"Ukhad lo jo ukhad sako ?",
        answer:"Mera baap tera sab ukhad dega"
    },
    {
        id:9,
        question:"Ukhad lo jo ukhad sako ?",
        answer:"Mera baap tera sab ukhad dega"
    },
];



function Accordian() {

    let [flag,setFlag] = useState(false);

    const showans = (id) =>{
        document.getElementById(id).style.display = 'flex';
        document.getElementById(`add${id}`).style.display = 'none';
        document.getElementById(`minus${id}`).style.display = 'flex';
    }
    
    const hideans = (id) =>{
        document.getElementById(id).style.display = 'none';
        document.getElementById(`add${id}`).style.display = 'flex';
        document.getElementById(`minus${id}`).style.display = 'none';
    }

    return (
        <div className='container'>
            {
                data.map((ele)=>{
                    return(
                        <div className='cover'>
                            <div className='questions'> <IoIosAddCircle id={`add${ele.id}`} size={40} onClick={()=>{showans(ele.id)}} />
                            <AiFillMinusCircle size={40} className='minus' id={`minus${ele.id}`} onClick={()=>{hideans(ele.id)}} /> 
                            <span> {ele.question} </span> </div>
                            
                            <div className='answers' id={ele.id} >
                                   <span>{ele.answer}</span>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordian;
