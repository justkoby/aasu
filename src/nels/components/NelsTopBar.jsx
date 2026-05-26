import React from 'react';
import { Link } from 'react-router-dom';

export const NelsTopBar = () => {
  return (
    <div className="nels-top-bar">
      <div className="container top-bar-container">
        <Link to="/" className="back-link">
          <span className="arrow">←</span> Back to main All-Africa Students Union Website
        </Link>
      </div>
    </div>
  );
};

export default NelsTopBar;
