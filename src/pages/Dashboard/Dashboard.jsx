import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data';
import './Dashboard.css';
import { GrFormAdd } from "react-icons/gr";
import React from 'react';
const Dashboard = () => {
  return (
    <>
    <div className="dasboard-container">

      <div className="dashboard">

        <div className="dashboardHead theme-container">
          <div className="head">
            <span>Overall Portfolio</span>


            <div >
              <button className="Button"style={{backgroundColor: "grey", color: 'white', position: 'relative', left: 200} }>
                Withdraw
              </button>
            </div>


            <div>

              <button  className="Button">
                <span>Deposite</span>
                <GrFormAdd size={10} />
              </button>
            </div>



          </div>
          <div className="cards">
            {
              cardsData.map((card, index) => (
                <div key={index} className="card">
                  <div className="cardHead">

                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                    <span>%{card.percentage}</span>

                  </div>

                  <div className="cardAmount">
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <Statistics />

      </div>


      <Orders />
    </div>
    </>
  );
}

export default Dashboard;