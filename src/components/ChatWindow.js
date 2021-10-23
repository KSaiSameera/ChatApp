import React from 'react';
import './ChatWindow.css';
//import {MdRiSendPlaneLine} from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
const ChatWindow = () => {
    return(
        <div className='main-container'>
            <div className='container-header'>
                Web Sockets with Spring Boot Chat
            </div>
            <div className="container-body">
            </div>
            <div className='container-footer'>
                <div className='footer-inner-container'>
                    <textarea id='text' rows='2' placeholder='Type your message...'></textarea>
                   <RiSendPlaneFill id='send' size='30px'/>
                </div>
            </div>
        </div>
    )
};

export default ChatWindow;