import React from 'react'
import MessageRec from '../messageRec';
import MessageSend from '../messageSend';
import './style.css'

export const Messagearea = ({name, message}) => {
    return (
        <div className='messageArea'>
                <div className='messageArea_div'>
                    <p>{name}</p>
                    <p>{message}</p>
                </div>
        </div>
    )
}
export default Messagearea