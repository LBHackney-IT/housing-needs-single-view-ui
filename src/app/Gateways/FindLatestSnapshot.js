import { hackneyToken } from '../lib/Cookie';

export default async ({ customerId }) => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${customerId}/vulnerabilities/latest`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${hackneyToken()}` }
    }
  );

  if (response.ok) {
    const data = await response.json();
    return {
      data,
      success: true
    };
  } else if (response.status === 404) {
    return {
      data: null,
      success: true
    };
  }

  return { data: null, success: false };
};
