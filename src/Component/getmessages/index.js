import React, {useEffect, useState} from 'react'
import { db, storage } from '../../firebase';
import MessageSend from '../messageSend';

export const Messageing = () => {
    const [messageing, setMessageing] = useState([]);

    useEffect(() => {
        db.collection("messages").onSnapshot((snapshot)=>
        {
            setMessageing(snapshot.docs.map((doc)=>({id:doc.id, messageing: doc.data()})));
        })
    }, [])
    return (
        <div className='box'>
        {messageing.map(({id, messageing})=>{
        return <MessageSend
        key={id}
        name={messageing.name}
        message={messageing.message}
        />
        })}
            
        </div>
    )
}
export default Messageing