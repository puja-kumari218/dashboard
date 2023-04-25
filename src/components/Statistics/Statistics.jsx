import './Statistics.css'
import {AiFillPlayCircle } from 'react-icons/ai'
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import React from 'react';

const Statistics = () => {
    return (
        <div className="statistics-container theme-container">
            <span className="title">Overview Statistic</span>

            <div className="cards grey-container">

                <div>
                    <div className="arrowIcon">
                        <AiFillPlayCircle />
                    </div>

                    <div className="card">
                        <span>Origin Game EA inc.(OREA)</span><span>$28,089.00</span>


                    </div>
                </div>

            </div>


            <StatisticsChart/>
        </div>
    )
}

export default Statistics