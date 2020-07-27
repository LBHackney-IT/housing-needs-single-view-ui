import { hackneyToken } from '../lib/Cookie';

const success = dropboxUrl => ({ dropboxUrl, success: true });
const fail = () => ({ success: false });

export default async ({ customerId, customer }) => {
  if (!customerId) return fail();
  if (!customer) return fail();

  const metadata = {
    firstName: customer.name.map(n => n.first),
    lastName: customer.name.map(n => n.last),
    dob: customer.dob
  };

  Object.entries(customer.systemIds).forEach(
    ([k, v]) => (metadata[`systemId.${k}`] = v)
  );

  const response = await fetch(
    `${process.env.REACT_APP_INFO_EVIDENCE_API_URL}/metadata`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${hackneyToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(metadata)
    }
  );

  if (!response.ok) {
    return fail();
  }

  const { url } = await response.json();
  return success(url);
};
