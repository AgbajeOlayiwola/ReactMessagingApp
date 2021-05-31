import React,{useState} from 'react'
import './style.css'
import { MessageRec, MessageSend } from '..';

const MessageBox = () => {

    const [message, setMessage] = useState('')
        const addMessage=()=>{

        }
    return (
        <div className='messageBox'>
            <div className='messageBox_Div'>
            <div className='messageBox_Div2'>
            <MessageRec/>
            <MessageSend/>
            </div>
                <input type='text' 
                className='messageBox_Text'
                value={message}
                onChange={(e)=> setMessage(e.target.value)} />
                <button onClick={addMessage} className='messageBox_Send'>Send</button>

            </div>
        </div>
    )
}

export default MessageBox
