import React from 'react';
import './MessageTemplate.scss'

const MessageTemplate = ({children}) => {
    return (
        <div className="MessageTemplate">
            <div className="app-titbox">
                <div className="app-titimg"></div>
                <div className="app-tit">나에게 쓰는 편지</div>
            </div>            
            <div className="content">{children}</div>
        </div>
    );
};

export default MessageTemplate;
