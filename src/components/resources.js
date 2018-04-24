import React from 'react';
import requireAuth from './require_authentication';

const resources = () => {
  return (
      <div>
        Some confidential recipe
        <ul>
          <li>1 cup sugar</li>
          <li>1 cup chocolate</li>
          <li>1 cup salt</li>
        </ul>
      </div>
  )
}

export default requireAuth(resources);