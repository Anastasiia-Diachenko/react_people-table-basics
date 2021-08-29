import React from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css';

export const MainNavigation = () => (
  <div className="tabs is-boxed">
    <nav>
      <ul>
        <Link to="/">Home Page</Link>
        <Link to="/people">People Page</Link>
      </ul>
    </nav>
  </div>
);
