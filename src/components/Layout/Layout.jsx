import moment from "moment/moment";
import "./Layout.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import React from 'react';


const Layout = () => {



  return (
    <div className="layout-container">
      <Sidebar />

      <div className="layout-dashboard">
        <div className="topBaseGradients">
          <div className="gradient-blue"></div>
          <div className="gradient-darkblue"></div>
          <div className="gradient-purple"></div>
        </div>

        <div className="header">

        <BsFillCloudMoonFill size={20} style={{ color: "white" }} />


          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className="searchBar">
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>
          <BsFillMoonFill size={20} style={{ color: "white" }} />
          <BsFillBellFill size={20} style={{ color: "white" }}  />
          <FaMicrophone size={20} style={{ color: "white" }}  />


          <div className="profile">
          <img src="https://media.istockphoto.com/id/1419922260/photo/3d-render-of-a-cat-playing-video-games-with-a-vr-headset.jpg?s=612x612&w=0&k=20&c=kkzIscqpSWsef3ojMYB4ZGToIUSYCYHF1EVzBE7x0ac= " alt="User photo" />
            <div className="details">
              <span>Puja Kumari</span>
              <span>pujakumari@gmail.com</span>
            </div>
          </div>

        </div>


        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
