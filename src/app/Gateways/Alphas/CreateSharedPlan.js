import { hackneyToken } from '../../lib/Cookie';

export default async ({ customerId }) => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${customerId}/shared-plans`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${hackneyToken()}`
      }
    }
  );

  if (response.ok) {
    const { planId } = await response.json();

    return {
      id: planId,
      location: `${process.env.REACT_APP_SHARED_PLAN_URL}/plans/${planId}`
    };
  }

  throw new Error(`Failed to create plan, status: ${response.status}`);
};
