import React from 'react'
import { groupNumber } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import  './Orders.css';
import { CgShapeCircle } from "react-icons/cg";


const Orders = () => {
    return (
        <div className="container theme-container">
            <div className="head">
            <CgShapeCircle size={30} color='orange'/>
                <span>Origin Game Inc</span>
            </div>

            <div className="grey-container stat">
                <span>My portfolio</span>
                <span>${groupNumber(8089000)}</span>
            </div>

            <div className="orderChart">
                <OrdersPieChart/>
            </div>

           
         
        </div>
    )
}

export default Orders