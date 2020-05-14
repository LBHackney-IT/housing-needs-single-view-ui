import { hackneyToken } from '../lib/Cookie';

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
    const { id } = response.json();

    return {
      id,
      location: `${process.env.SINGLE_VIEW_PLAN_URL}/${id}`
    };
  }

  throw new Error(`Failed to create plan, status: ${response.status}`);
};
