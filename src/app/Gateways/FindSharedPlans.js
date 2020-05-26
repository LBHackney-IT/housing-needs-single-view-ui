import { hackneyToken } from '../lib/Cookie';

export default async ({ customerId }) => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${customerId}/shared-plans`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${hackneyToken()}`
      }
    }
  );

  if (response.ok) {
    const { planIds } = await response.json();

    return planIds.map(id => ({
      id,
      location: `${process.env.REACT_APP_SHARED_PLAN_URL}/plans/${id}`
    }));
  }

  throw new Error(`Failed to find plans, status: ${response.status}`);
};
