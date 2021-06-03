import React, {useEffect, useState} from 'react'
import './style.css'
import { MessageRec, MessageSend, MessageBox } from '../../Component';
import { db, storage } from '../../firebase';

export const Box = () => {
    const [messageing, setMessageing] = useState([]);

    useEffect(() => {
        db.collection("messages").onSnapshot((snapshot)=>
        {
            setMessageing(snapshot.docs.map((doc)=>({id:doc.id, messageing: doc.data()})));
        })
    }, [])
    return (
        <div className='box'>
            <MessageRec/>
            {messageing.map(({id, messageing})=>{
            <MessageSend
            key={id}
            name={messageing.name}
            message={messageing.message}
            />
            })}
            <MessageBox/>
            
        </div>
    )
}

export default Box
