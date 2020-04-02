import React from 'react';
import './MessageTemplate.scss'

const MessageTemplate = ({children}) => {
    return (
        <div className="MessageTemplate">
            <div className="app-titbox">
                <div className="app-titimg"><img src="/img/img.jpg" alt="이미지"/></div>
                <div className="app-tit">나에게 쓰는 편지</div>
            </div>            
            <div className="content">{children}</div>
        </div>
    );
};

export default MessageTemplate;
