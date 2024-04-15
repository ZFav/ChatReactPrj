import "../assets/css/sidenav.css";
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from "react-icons/hi2";


export default function SideNav() {

  return (
    <div className="sidenav">

      <div className="top">
        <h2>dapprs</h2>
      </div>

      <div className="center">

        <ul className="navigation-list">
          <li><a href="#"> <HiOutlineHomeModern /></a></li>
          <li><a href="#"> <HiOutlineCalendarDays /></a></li>
          <li><a href="#"> <HiOutlineCog6Tooth /></a></li>
          <li><a href="#"> <HiOutlineHome /></a></li>
          <li><a href="#">  <HiOutlineUsers /></a></li>
          <li><a href="#">  <HiOutlineUsers /></a></li>
          <li><a href="#"> <HiOutlineHomeModern /></a></li>
          <li><a href="#"> <HiOutlineHomeModern /></a></li>
        </ul>
      </div>

    </div>
  );
}
