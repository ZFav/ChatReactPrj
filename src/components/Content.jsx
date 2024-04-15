import { useState } from "react";
import "../assets/css/content.css";
import Avatar from "./Avatar";
import Message from "./Message";
import { SeedMessages } from "../data/Messages";
import InfoContainer from "./InfoContainer";
import UpNav from "./UpNav";

export default function Content({ chat, setChat }) {
  const [onMenu, setOnMenu] = useState(false);
  const [messages, setMessages] = useState(SeedMessages);

  return (
    <div className={chat ? "content active" : "content"}>
      <UpNav />
      {chat ? (
        <div className="wrapper">
          <div className="top">
            <Avatar username={"Tizio Prova"} height={45} width={45} />
            <div
              className="app-icon menu-icon"
              onClick={() => setOnMenu((prev) => !prev)}
            >
              <i className="fa-solid fa-ellipsis"></i>
              {onMenu && (
                <div className="menu-wrapper">
                  <span className="menu-item" onClick={() => setChat(false)}>
                    Chiudi Chat
                  </span>
                  <span className="menu-item">Deleta i messagi</span>
                  <span className="menu-item">Deleta la Chat</span>
                </div>
              )}
            </div>
          </div>

          <div className="center">
            <div className="messages-wrapper">
              {messages.map((msg) => (
                <Message
                  key={msg?.id}
                  msg={msg}
                  owner={msg?.owner}
                  
                />
              ))}
            </div>

          </div>

          <div className="bottom">
            <div className="app-icon">
              <i className="fa-solid fa-image"></i>
            </div>
            <textarea placeholder="Scrivi" />
            <div className="app-icon">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      ) : (
        <InfoContainer />
      )}
    </div>
  );
}
