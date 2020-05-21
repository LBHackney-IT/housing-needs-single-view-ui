import React from 'react';
import CreatePlanButton from './CreatePlanButton';
import SharedPlansList from './SharedPlansList';

const SharedPlanQuickBox = ({ customerId }) => (
  <div className="quick-access__item" data-testid="shared-plan-quickview">
    <h3>Shared Plans</h3>
    <SharedPlansList customerId={customerId} />
    <CreatePlanButton customerId={customerId} />
  </div>
);

export default SharedPlanQuickBox;
