import React,{useContext} from 'react'
import './style.css'
import UserContext from '../cont'
import Messageing from '../getmessages';

export const MessageSend = ({message, name}) => {
    const [user, setUser] = useContext(UserContext).user;
    return (
        <div className='messagesend'>
            <div className="messagesend_Message">
                <p className="message_text">hello Welcome to my Chat room</p>
                <p className='message_Name'>{user.displayName}</p>
            </div>
        </div>
    )
}
export default  MessageSend 