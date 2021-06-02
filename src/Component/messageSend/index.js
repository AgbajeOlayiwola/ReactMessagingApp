import React from 'react'
import './style.css'

export const MessageSend = ({message}) => {

    return (
        <div className='messagesend'>
            <div className="messagesend_Message">
                <p>{message}</p>
            </div>
        </div>
    )
}
export default  MessageSend 