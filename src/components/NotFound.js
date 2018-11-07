import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    404 Not Found<br />
    <Link to="/">Go to Dashboard</Link>
  </div>
);

export default NotFound;