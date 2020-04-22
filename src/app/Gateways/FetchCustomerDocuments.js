import { hackneyToken } from '../lib/Cookie';

export default async id => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${id}/documents`,
    {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${hackneyToken()}`
      }
    }
  );
  return response.json();
};
