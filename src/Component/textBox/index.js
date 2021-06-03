import React,{useState, useContext} from 'react'
import './style.css'
import { MessageRec, MessageSend, Login, Messagearea } from '..';
import { db} from '../../firebase';
import firebase from 'firebase';
import UserContext from '../cont'
import 'firebase/firestore'

const MessageBox = ({messages}) => {

    const [message, setMessage] = useState('')
    const [user, setUser] = useContext(UserContext).user;


    const [messageArray, setMessageArray] = 
    useState(messages ? messages: []);

        const addMessage=()=>{
            if(message != ''){
                db.collection("messages").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    message: message,
                    name: user.displayName
            })
            }
            setMessage('')
        }
    return (
        <div className='messageBox'>
        {user ?
            (<div className='messageBox_Div'>
            <Messagearea/>
                    <input type='text' 
                    className='messageBox_Text'
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)} />
                    <button onClick={addMessage} className='messageBox_Send'>Send</button>
                    <div className='messageBox_Box'>
                    <div className='messageBox_DisplayName'><p className='messageBox_P'>{user.displayName}</p></div>
                    </div>

    </div>):
            (
        <div className='login_Box'>
            <Login/>
        </div>
        )}
        </div>

        
    )
}

export default MessageBox
