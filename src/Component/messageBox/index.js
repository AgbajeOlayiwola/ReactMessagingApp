import React from 'react'
import MessageRec from '../messageRec';
import MessageSend from '../messageSend';
import './style.css'

export const Messagearea = () => {
    return (
        <div className='messageArea'>
                <div className='messageArea_div'>
                    <MessageSend/>
                </div>
        </div>
    )
}
export default Messagearea