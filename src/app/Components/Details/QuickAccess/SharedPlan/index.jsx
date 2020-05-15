import React from 'react';
import CreatePlanButton from './CreatePlanButton';

const SharedPlanQuickBox = ({ customerId }) => (
  <div className="quick-access__item">
    <h3>Shared Plans</h3>
    <CreatePlanButton customerId={customerId} />
  </div>
);

export default SharedPlanQuickBox;
