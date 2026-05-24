import { useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';

function App() {
    const [chatMessages, setChatMessages] = useState([]); /* [
            currentState, (the actual data/state)
            functionToUpdateState (the function React provides to change that state)
        ]
        */
    return (
    <div className="app-container">
        <ChatMessages 
        chatMessages={chatMessages}
        />  
        {chatMessages.length === 0 && (
        <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below.
        </p>
        )}
        <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        />
    </div>
    );
}

export default App
