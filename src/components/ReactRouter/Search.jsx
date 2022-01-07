import React, { useState } from 'react';

const Search = () =>{
    let [img,setImg] = useState('');

    let api = 'https://source.unsplash.com/600x400/?';

    api += img;

    return (
        <>
            <div>
                <input type='text' placeholder='Search Here' value={img} onChange={(e)=>{setImg(e.target.value)}} />
            </div>
            <div>
                {img !== '' ? <img src={api} alt='search img' /> : ""}
            </div>
        </>
    )
}

export default Search;