
import React from 'react';
import SpendingCard from './SpendingCard';
import SummaryCard from './SummaryCard';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard" style={{ background: "red" }} >
            <SpendingCard />
            <SummaryCard />
        </div>
    );
}

export default Dashboard;