import React from 'react'
import {MdClose} from 'react-icons/md';
import './MessageListItem.scss'

const MessageListItem = ({message, onRemove}) => {
    const {id, text} = message;
 return (
    <div className="messageWrap">
        <div className="remove" onClick={() => onRemove(id)} ><MdClose/></div>
        <div className="message">{text}</div>        
    </div>       
 )
};
export default MessageListItem;