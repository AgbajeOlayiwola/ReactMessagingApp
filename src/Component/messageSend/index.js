import React from 'react'
import './style.css'

export const MessageSend = ({message, name}) => {

    return (
        <div className='messagesend'>
            <div className="messagesend_Message">
            <p>{name}</p>
                <p>{message}</p>
            </div>
        </div>
    )
}
export default  MessageSend 