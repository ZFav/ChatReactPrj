import { useState } from "react";
import "../assets/css/sidebar.css";
import ChatItem from "./ChatItem";
import ContactItem from "./ContactItem";

export default function Sidebar({ setChat }) {
  const [newChat, setNewChat] = useState(false);

  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="top">
          <div onClick={() => setOnProfile(true)}>
            <h2>Messagges</h2>
          </div>
          <div
            className={newChat ? "app-icon active" : "app-icon"}
            onClick={() => setNewChat((prev) => !prev)}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>

        <div className="center">
          
          <div className="search-wrapper">
            <div className="input-wrapper">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text"  placeholder= "Search"/>
            </div>
          </div>

          <div className="center-wrapper">
            {newChat ? (
              <div className="items-wrapper">
                {[...Array(10)].map((contact, index) => (
                  <ContactItem key={index} />
                ))}
              </div>
            ) : (
              <div className="items-wrapper">
                {[...Array(10)].map((chat, index) => (
                  <ChatItem setChat={setChat} key={index} />
                ))}
              </div>
            )}
          </div>

        </div>
        
      </div>
    </div>
  );
}
