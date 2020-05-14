import React, { useState, useCallback } from 'react';
import createSharedPlan from '../../../../../Gateways/CreateSharedPlan';
import styles from './index.module.css';

const CreatePlanButton = ({ customerId }) => {
  const [state, setState] = useState({
    loading: false,
    error: null
  });

  const handleClick = useCallback(async () => {
    setState({ ...state, loading: true });

    try {
      const { location } = await createSharedPlan({ customerId });
      setState({ ...state, loading: false });
      window.location.href = location;
    } catch (error) {
      setState({ loading: false, error });
    }
  }, [state, customerId]);

  return (
    <button
      disabled={state.loading}
      className={styles.button}
      onClick={handleClick}
    >
      Create new plan
    </button>
  );
};

export default CreatePlanButton;
