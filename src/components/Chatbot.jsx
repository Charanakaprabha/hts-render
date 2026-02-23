import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
    // Toggle state
    const [isOpen, setIsOpen] = useState(false);

    // 1. State to hold the chat history
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" }
    ]);

    // 2. State to hold the current text input
    const [inputValue, setInputValue] = useState('');

    // 3. State to show a loading indicator
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Function to handle sending the message
    const handleSendMessage = async (e) => {
        if (e) e.preventDefault();
        if (!inputValue.trim() || isLoading) return; // Prevent sending empty messages

        // Add the user's message to the chat
        const userMessage = { text: inputValue, sender: "user" };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        const messageToSend = inputValue; // Capture locally
        setInputValue(''); // Clear the input field
        setIsLoading(true);

        try {
            // Send the request to your local Node.js backend
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageToSend })
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            const data = await response.json();

            // Add the bot's reply to the chat
            if (data.reply) {
                setMessages([...newMessages, { text: data.reply, sender: "bot" }]);
            } else {
                setMessages([...newMessages, { text: "Error: No response from server.", sender: "bot" }]);
            }

        } catch (error) {
            console.error("Chatbot connection error:", error);
            setMessages([...newMessages, { text: "Sorry, I couldn't connect to the server.", sender: "bot" }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Allow sending by pressing the "Enter" key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="status-dot"></div>
                    <Bot size={24} color="var(--c-primary)" />
                    <h3>Halftone AI Assistant</h3>
                </div>

                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message message-${msg.sender === 'bot' ? 'assistant' : 'user'}`}>
                            <div className="message-content">{msg.text}</div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="typing-indicator">Assistant is thinking...</div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-area">
                    <form className="chat-input-form" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type your message..."
                            disabled={isLoading}
                        />
                        <button type="submit" className="send-btn" disabled={isLoading || !inputValue.trim()}>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>

            <button
                className={`chatbot-fab ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
            </button>
        </div>
    );
};

export default Chatbot;
