import React from 'react'
import MessageRec from '../messageRec';
import MessageSend from '../messageSend';
import './style.css'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { db } from '../../firebase';

export const Messagearea = () => {
    const messageRef = db.collection('messages')
    const query = messageRef.orderBy('timestamp').limit(25)

    const [messages] = useCollectionData(query, {idField: 'id'}) 
    return (
        <div className='messageArea'>
                <div className='messageArea_div'>
                <div className='box'>
                    {messages && messages.map(msg => <MessageSend key={msg.id} message={msg}/>)}
                </div>
                <MessageRec/>
                </div>
        </div>
    )
}
export default Messagearea