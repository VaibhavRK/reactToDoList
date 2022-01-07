import React, {useState} from 'react';
import './App.css';

var arr = ["Hello Guys Click me","Click me again to see"];

function App() {
  var num = 0;
  var str = arr[num];
  let [currstr, newstr] = useState(str);

  // console.log(currstr);

  const Changestr = () => {
    if(currstr === arr[0]){
      newstr(arr[1]);
    }
    else if(currstr === arr[1]){
      newstr(arr[0]);
    }
    // newstr = "Yo yo Vaibhav Singh";
    // console.log(newstr);
  }


  return (
    <div className='container'>
      <h1 className='text'>{currstr}</h1>
      <button className='btn' onClick={Changestr}>Click Here</button>
    </div>
  )
}

export default App
