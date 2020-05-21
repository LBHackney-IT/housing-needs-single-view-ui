import React, { useEffect, useState } from 'react';
import findSharedPlans from '../../../../../Gateways/FindSharedPlans';
import styles from './SharedPlansList.module.scss';

const SharedPlansList = ({ customerId }) => {
  const [state, setState] = useState({
    plans: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const plans = await findSharedPlans({ customerId });
        setState({ plans, loading: false });
      } catch (error) {
        setState({ plans: [], error, loading: false });
      }
    };

    fetch();
  }, [customerId]);

  if (state.plans.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>Existing plans</h4>
      <ul>
        {state.plans.map(({ id, location }) => (
          <li key={id}>
            <a href={location}>{id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SharedPlansList;
