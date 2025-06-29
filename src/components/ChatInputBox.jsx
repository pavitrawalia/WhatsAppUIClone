import React from 'react'
import sendIcon from '../assets/send.svg'

export default function ChatInputBox({ message, setMessage, pushMessage }) {
    function handleKeyDown(e) {
        if (e.key === 'Enter' && message) {
            pushMessage()
        }
    }
    return (
        <div className="chat-input-box">
            <div className="icon"></div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Please enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className="icon send" onClick={() => {
                if (message)
                    pushMessage()
                }}>
                <img src={sendIcon} alt="" />
            </div>
        </div>
    )
}
