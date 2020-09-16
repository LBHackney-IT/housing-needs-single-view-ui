import styles from './index.module.scss';
import React from 'react';

const CautionaryAlerts = ({ label, alert }) => {
  return (
    <div className={styles['alert-item']}>
      <h3>{label}</h3>
      <ul>
        <li data-testid="alert-description">{alert.description}</li>
        <li data-testid="alert-date">Added: {alert.startDate}</li>
      </ul>
    </div>
  );
};

export default CautionaryAlerts;
