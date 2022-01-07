import React, { useEffect, useState } from 'react';
import '../styles/userFetchApi.css';
import Card from './card';

function UserFetchApi() {

    let [user,setUser] = useState([]);
    let [loading,setLoading] = useState(true);
    
    async function getUser(){
        try{
            setLoading(false);
            const response = await fetch('https://api.github.com/users');
            setUser(await response.json());
        }catch(err){
            setLoading(false);
            console.log(err);
        }
    }

    useEffect(()=>{
        getUser();
    },[]);

    if(loading){
        return (
            <div className='load'>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div>
            <h1 className='Title'>List of Github Users</h1>

            <div className='allcards'>
               {
                   user.map((ele) => {
                       return (
                           <Card title={ele.title} imgsrc={ele.avatar_url} name={ele.login} />
                       )
                   })
               }
            </div>
        </div>
    )
}

export default UserFetchApi
