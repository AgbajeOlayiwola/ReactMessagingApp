import React from 'react'
import './style.css'
import { MessageRec, MessageSend, MessageBox } from '../../Component';

export const Box = () => {
    return (
        <div className='box'>
            <MessageRec/>
            <MessageSend/>
            <MessageBox/>
            
        </div>
    )
}

export default Box
