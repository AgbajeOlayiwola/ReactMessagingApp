import React,{useContext} from 'react'
import './style.css'
import UserContext from '../cont'

export const MessageSend = (props) => {
    const [user, setUser] = useContext(UserContext).user;
    const {message,name} =props.message

    return (
        <div className='messagesend'>
            <div className="messagesend_Message">
                <p className="message_text">{message}</p>
                <p className='message_Name'>{name}</p>
            </div>  
        </div>
    )
}
export default  MessageSend 