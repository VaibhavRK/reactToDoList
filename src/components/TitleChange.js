import {useEffect} from 'react'

const TitleChange = (count) => {
    useEffect(()=>{
        if(count === 0){
            document.title = `Chat`;
        }
        else{
            document.title = `Chat (${count})`;
        }
        
    },[count]);
}

export default TitleChange;
