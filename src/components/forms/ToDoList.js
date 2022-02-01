import React, { useState,useEffect } from 'react';
// import { GrNote,GrAddCircle } from 'react-icons/gr';
import { MdDeleteOutline, MdLibraryAdd, MdEdit, MdFileDownloadDone} from 'react-icons/md';
import { CgNotes} from 'react-icons/cg';
import '../../styles/ToDoList.css';

const getLocalItems = ()=>{
    let list = localStorage.getItem('lists');
    console.log(list);

    if(list){
        return JSON.parse(list);
    }
    else{
        return [];
    }
}

function ToDoList() {
    let [content,setContent] = useState(getLocalItems);
    let [val,setVal] = useState("");
    let [cIndex,setIndex] = useState(-1);


    const AddItem = () =>{
        if(val === ""){
            alert("Add Some Data");
        }
        else{
            let newId = new Date().toLocaleTimeString();
            const str = {id: newId,name:val};
            setContent([...content,str]);
            setVal("");
        }

    }

    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(content));
    });

    const DeleteItem = (idx) =>{
        let newContent = content.filter((ele) =>{
            return ele.id !== idx;
        });

        setContent(newContent);
    }

    const Editing = (key1) =>{
        document.querySelector('.addme').style.display = 'none';
        document.querySelector('.done').style.display = 'flex';

        

        content.filter((ele)=>{
            if(ele.id === key1){
                setVal(ele.name);
            }
        });

        setIndex(key1);
    }

    const DoneWork = (key2) =>{
        document.querySelector('.done').style.display = 'none';
        document.querySelector('.addme').style.display = 'flex';

        const saveValue = val;
        setVal("");
        
        const newArr = content.filter((ele)=>{
            if(ele.id !== key2){
                return ele;
            }
            else{
                ele.name = saveValue;
                return ele;
            }
        });

        setContent(newArr);
        
    }

    


    return (
       <div className='ListApp'>
           <div className='container'>
             <CgNotes size={50} color='yellow' />
             <h2 style={{color:'white',marginTop:5,marginBottom:-10}} >ToDo List</h2>
             <input type='text' placeholder='✍️ Write what to do....'  value={val} onChange={(e)=>{setVal(e.target.value)}} />
             <button className='add' onClick={AddItem} ><MdLibraryAdd className='addme' size='40' color='skyblue' /> </button>
             <MdFileDownloadDone className='done' size={40} onClick={()=>{DoneWork(cIndex)}}  />
           </div>

           <div className='allData'>
              {
                  content.map((ele)=>{
                      return(
                            <div className='element' key={ele.id}>
                              <span id='eleSpan'> {ele.id} </span>
                              <span>{ele.name}</span>
                              <MdEdit size={30} className='editText' onClick={()=>{Editing(ele.id)}} />
                              <MdDeleteOutline size={30}  className='DelIcon' onClick={()=>{DeleteItem(ele.id)}} />
                            </div>
                      )
                  })
              }
           </div>
       </div>

    )
}

export default ToDoList
