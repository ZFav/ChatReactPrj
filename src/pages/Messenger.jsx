import { useState } from "react";
import "../assets/css/messenger.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import SideNav from "../components/SideNav";
import UpNav from "../components/UpNav";



export default function Messenger() {
  const [chat, setChat] = useState(false);
  return (
    <div className="messenger"> 
      <SideNav />
      <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} />
    </div>
  );
}
