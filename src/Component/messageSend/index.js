import React,{useContext,useRef} from 'react'
import './style.css'
import UserContext from '../cont'
import { auth } from '../../firebase';

export const MessageSend = (props) => {
    const [user, setUser] = useContext(UserContext).user;
    const {message,name, uid} =props.message
const messageClass = user.uid === auth.currentUser.uid? 'sent':'received';
console.log('messageSend user.', user.uid)
console.log('messageSend auth.', auth.currentUser.uid)
    return (
        <div className={`messagesend`}>
            <div className="messagesend_Message">
                <p className={`message_text  ${messageClass}`}>{message}</p>
                <p className='message_Name'>{name}</p>
            </div>  
        </div>
    )
}
export default  MessageSend 