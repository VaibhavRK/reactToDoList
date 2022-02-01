import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/menu.css';


const Menu = ()=>{
    return(
        <>    
            <NavLink exact activeClassName='active_class' to='/' >About US</NavLink>
            <NavLink exact activeClassName='active_class' to='/user' >User</NavLink>
            <NavLink exact activeClassName='active_class' to='/search' >Search</NavLink>
            <NavLink exact activeClassName='active_class' to='/contact'>Contact Us</NavLink>
            <NavLink exact to='*'>Error</NavLink>
        </>
    )
}

export default Menu;