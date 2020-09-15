import styles from './index.module.scss';
import React from 'react';

const CautionaryAlerts = ({ label, alert }) => {
  return (
    <div className={styles['alert-item']}>
      <h3>{label}</h3>
      <ul>
        <li>{alert.description}</li>
        <li>Added: {alert.startDate}</li>
      </ul>
    </div>
  );
};

export default CautionaryAlerts;
