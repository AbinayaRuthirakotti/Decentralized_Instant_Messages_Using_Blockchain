import { useEffect, useState } from "react";
import socket from "../services/socket";
import "./chat.css";

export default function ChatBox({ wallet }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (!message) return;

    socket.emit("sendMessage", {
      from: wallet,
      text: message,
    });

    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">WhatsApp Chat</div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.from === wallet ? "message sent" : "message received"
            }
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
