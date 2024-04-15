import "../assets/css/upnav.css";
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from "react-icons/hi2";
import Avatar from "./Avatar";


export default function UpNav() {

  return (
    <div className="upnav">

      <div className="provas">

        <ul className="listNav">
        <li><a href="#"> <HiOutlineCalendarDays /></a></li>
          <li><a href="#"> <HiOutlineHomeModern /></a></li>
          <li><a href="#"> <HiOutlineHome /></a></li>

          <li><a href="#"> <Avatar  height={45} width={45} /></a></li>
        </ul>
      </div>

    </div>
  );
}
