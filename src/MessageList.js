import React from 'react'
import MessageListItem from './MessageListItem'
import './MessageList.scss'

const MessageList = ({messages, onRemove}) => {
    return (
        <div className="MessageListWrap">
            {messages.map(message => (
                <MessageListItem message={message} key={message.id} onRemove={onRemove}/>
            ))}            
        </div>
    ) 
}
export default MessageList;