import React from 'react';
import './SendMessage.scss'

const SendMessage = () => {
    return (
        <form className="SendInsert">
            <textarea name="write" id="write" cols="20" rows="10"></textarea>
            <button className="submit" type="submit">Send</button>
        </form>
    )
}
export default SendMessage;