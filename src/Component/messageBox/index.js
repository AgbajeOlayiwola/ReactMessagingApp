import React from 'react'
import MessageRec from '../messageRec';
import MessageSend from '../messageSend';
import './style.css'
import Messageing from '../getmessages';

export const Messagearea = ({name, message}) => {
    return (
        <div className='messageArea'>
                <div className='messageArea_div'>
                <MessageSend/>
                <MessageRec/>
                </div>
        </div>
    )
}
export default Messagearea