import React from 'react';
import { Link } from 'react-router-dom';
import './CampaignTopBar.css';

export const CampaignTopBar = () => {
  return (
    <div className="campaign-top-bar">
      <div className="container top-bar-container">
        <Link to="/" className="back-link">
          <span className="arrow">←</span> Back to main All-Africa Students Union Website
        </Link>
      </div>
    </div>
  );
};

export default CampaignTopBar;
