import { useEffect, useState } from "react";
import socket from "../services/socket";
import "./chat.css";

export default function ChatBox({ wallet }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("userTyping", (wallet) => {
      setTypingUser(wallet);
    });

    socket.on("stopTyping", () => {
      setTypingUser("");
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("userTyping");
      socket.off("stopTyping");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      from: wallet,
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    socket.emit("sendMessage", data);
    setMessage("");
    socket.emit("stopTyping");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">AnyBuzz</div>

      <div className="chat-messages">
        {messages.map((msg, index) => {
          const isMe = msg.from === wallet;

          return (
            <div
              key={index}
              className={`message ${isMe ? "sent" : "received"}`}
            >
              <small className="user-label">
                {isMe ? "You" : msg.from.slice(0, 6)}
              </small>
              <p>{msg.text}</p>
              <span className="time">{msg.time}</span>
            </div>
          );
        })}

        {typingUser && typingUser !== wallet && (
          <div className="typing">
            {typingUser.slice(0, 6)} is typing...
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          className="text-input"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (e.target.value) {
              socket.emit("typing", wallet);
            } else {
              socket.emit("stopTyping");
            }
          }}
          placeholder="Type a message"
        />
        <button className="send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
