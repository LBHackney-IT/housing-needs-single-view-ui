import { hackneyToken } from '../lib/Cookie';

export default async query => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/tenancies${query}`,
    {
      headers: {
        Authorization: `Bearer ${hackneyToken()}`
      }
    }
  );
  if (response.status >= 400) {
    return new Error('Error searching');
  }
  return response.json();
};
