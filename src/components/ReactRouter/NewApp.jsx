import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import '../../styles/NewApp.css';
import User from './User';
import Search from './Search';


const NewApp = () =>{
 
  let [flag,setFlag] = useState(true);
  const changeMode = () =>{
       if(flag){
         document.body.style.backgroundColor = 'white';
         setFlag(false);
        }
        else{
         document.body.style.backgroundColor = 'rgba(5, 5, 82, 0.911)';
         setFlag(true);
       }
  }

    return (
        <div>
          <Menu />
          <Switch>
            <Route exact path='/' render={()=><About name='This is About Prop' />} />
            <Route exact path='/user' component={User} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/user/:name' component={User} />
            <Route path='/user/:name/:lname' component={User} />
            <Route exact path='/contact' component={<Contact />} />
            {/* <Route path='/contact/:name' component={<Contact />} /> */}
            <Route component={Error} /> 
          </Switch>
          <button onClick={changeMode}>Change Mode</button>
        </div>
    )
}

export default NewApp;
// export {Switch};
