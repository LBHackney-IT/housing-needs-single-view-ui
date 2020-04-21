import { hackneyToken } from '../lib/Cookie';

export default async id => {
  return await fetch(`${process.env.REACT_APP_HN_API_URL}/customers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${hackneyToken()}`
    }
  });
};
