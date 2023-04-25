import './Sidebar.css';
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillPieChartFill } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar-container">

            <img src="./logo.png" alt="logo" className="logo" />


            <div className="menu">
                    <MdSpaceDashboard size={12} />
                
                    <BsFillPieChartFill size={12} />
                    <FaUserAlt size={12}/>

                    <FaTasks size={12} />

                     <AiOutlineLineChart size={12} />
            </div>
        </div>
    )
}

export default Sidebar