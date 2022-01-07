import React, { useState } from 'react';
import './BasicForm.css';
import { FaWpforms } from 'react-icons/fa'

function BasicForm() {
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");

    let [content,setContent] = useState([]);

    const Submitting = (e)=>{
        e.preventDefault();

        if(username && password){
            let newContent = {id:new Date().toLocaleDateString() ,Email:username,Password:password};
            setContent([...content,newContent]);
    
            console.log(content);
    
            setUsername("");
            setPassword("");
        }
        else{
            alert("Please enter usewrname and passwor both");
        }


        // document.getElementById('para').style.display = "inline-block";
    }
    
    return (
        <>
            <form onSubmit={Submitting}>
              <FaWpforms size={40} color='white' style={{marginBottom:'20'}} />
              <input placeholder='Enter Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
              <input placeholder='Enter Password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
              <button type="submit">Submit</button>
            </form>

            <div>
                {
                    content.map((ele)=>{
                      return(
                        <div className='dataentry'>
                            <p>{ele.id}</p>
                            <p>{ele.Email}</p>
                            <p>{ele.Password}</p>
                        </div>
                      )
                    })
                }  
            </div>
        </>
    )
}

export default BasicForm
