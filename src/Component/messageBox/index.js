import React from 'react'
import MessageRec from '../messageRec';
import MessageSend from '../messageSend';

export const Messagearea = ({name, message}) => {
    return (
        <div>
                <div className='messageArea'>
                    <p>{name}</p>
                    <p>{message}</p>
                </div>
        </div>
    )
}
export default Messagearea