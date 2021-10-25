import React, { useState } from 'react';
import './ChatWindow.css';
import { RiSendPlaneFill } from "react-icons/ri";

const ChatWindow = () => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState([]);

    const onButtonClick = () => {     
        setMessage(msg => [...msg, text]); 
        console.log(message)
        setText('');
    }

    const getMessages = () => {
       return message.map(msg => msg && <div key={`${Math.random()*1000+1}`}>{msg}</div>)
    }

    return(
        <div className='main-container'>
            <div className='container-header'>
                Web Sockets with Spring Boot Chat
            </div>
            <div className="container-body">
                { getMessages()}
            </div>
            <div className='container-footer'>
                <div className='footer-inner-container'>
                    <textarea id='text' rows='2' 
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        placeholder='Type your message...'></textarea>
                    <RiSendPlaneFill id='send'
                    onClick = { onButtonClick}
                      size='30px'/>
                </div>
            </div>
        </div>
    )
};

export default ChatWindow;