import React from "react";
import Avatar from "./Avatar";

export default function ChatItem({ setChat }) {
  return (
    <div className="chat-item" onClick={() => setChat(true)}>
      <Avatar src="" height={55} width={55} />
      <div className="chat-item-infos">
        <div className="avatar-infos">
          <span className="username">Tizio Prova</span>
          <span className="timeline">12 Minuti fa</span>
        </div>
        <p >Prova prova ciao</p>
      </div>
    </div>
  );
}
