import { hackneyToken } from '../lib/Cookie';

export default async ({ customerId }) => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${customerId}/vulnerabilities`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${hackneyToken()}` }
    }
  );

  if (response.ok) {
    return {
      data: await response.json(),
      success: true
    };
  } else if (response.status === 404) {
    return {
      data: [],
      success: true
    };
  }

  return { data: [], success: false };
};
