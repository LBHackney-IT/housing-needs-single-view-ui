import { hackneyToken } from '../lib/Cookie';

export default async (tag_ref, person_no) => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/tenancies/${tag_ref}/${parseInt(
      person_no
    )}/alerts`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${hackneyToken()}`
      }
    }
  );
  return response.json();
};
