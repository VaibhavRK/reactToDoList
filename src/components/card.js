import React from 'react';
import '../styles/card.css'

function Card({title,imgsrc,name}) {
    return (
        <div className='container'>
            <img className='IMG' src={imgsrc} alt="Profile Image" />

            <div className='data'>
                <p style={{fontSize:25}}>{name}</p>
                <p style={{textAlign:'center',fontSize:20}}>Web Developers</p>

                <div className='rowvali'>

                    <div className='columnS'>
                        <p>Article</p>
                        <p>38</p>
                    </div>
                    <div className='columnS'>
                        <p>Followers</p>
                        <p>38</p>
                    </div>
                    <div className='columnS'>
                        <p>Rating</p>
                        <p>38</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
