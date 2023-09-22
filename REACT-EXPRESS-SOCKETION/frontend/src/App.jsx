import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("/");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);

  const handleSubtmit = (e) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", message);
    setTimeout(() => {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }, 50);
    setMessage("");
  };

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  return (
    <div className="app">
      <form onSubmit={handleSubtmit}>
        <h2>Chat React Socketion</h2>
        <ul ref={messageListRef}>
          {messages.map((message, i) => (
            <li key={i} className={message.from == "Me" ? "me" : "other"}>
              <span>{message.from} :</span>
              <p>{message.body}</p>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={message} 
            placeholder="  Write your message ..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default App;
