import React,{useContext, useRef} from 'react'
import MessageSend from '../messageSend';
import UserContext from '../cont'
import './style.css'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { db, auth } from '../../firebase';

export const Messagearea = (props) => {
    const messageRef = db.collection('messages')
    const query = messageRef.orderBy('timestamp').limit(25)
    const [user, setUser] = useContext(UserContext).user;
    const stat = useRef()

    const [messages] = useCollectionData(query, {idField: 'id'}) 
console.log('messagearea', user.displayName)
    return (
        <div className='messageArea'>
                <div className='messageArea_div'>
                <div className='box'>
                    {messages && messages.map(msg => <MessageSend key={msg.id} message={msg}/>)}
                </div>
                <div ref={stat}></div> 
                </div>
        </div>
    )
}
export default Messagearea