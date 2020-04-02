import React, {useState, useRef, useCallback} from 'react';
import MessageTemplate from './MessageTemplate';
import SendMessage from './SendMessage';
import MessageList from './MessageList';

const App = () => {
  const [messages,setMessages] = useState([
    {
      id:1,
      text: '만나서 반갑습니다!',
    },
  ])
  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기 

  const nextId = useRef(2);
  const onInsert = useCallback(
    text => {
      const message = {
        id : nextId.current,
        text,
      };
      setMessages(messages.concat(message));
      nextId.current += 1;
    },
    [messages],
  );
  const onRemove = useCallback(
    id => {
      setMessages(messages.filter(message => message.id !== id));
    },
    [messages],
  );
  return (
    <MessageTemplate>
      <MessageList messages={messages} onRemove={onRemove}/>
      <SendMessage onInsert={onInsert}/>      
    </MessageTemplate>
  )
}

export default App;
