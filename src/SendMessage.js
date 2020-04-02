import React, { useState, useCallback } from 'react';
import './SendMessage.scss';

const SendMessage = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  const onClick = useCallback(() => {
    onInsert(value);
    setValue(''); // value값 초기화
    
  }, [onInsert, value],);

  const handleUserKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onClick();
    }
  };

  return (
    <form className="SendInsert" >
      <textarea
        name="write"
        id="write"
        cols="20"
        rows="10"
        value={value}
        onChange={onChange}
        placeholder="당신의 이야기를 써주세요."
        onKeyPress={handleUserKeyPress}
      ></textarea>
      <button className="submit" type="button" onClick={onClick}>
        Send
      </button>
    </form>
  );
};
export default SendMessage;
