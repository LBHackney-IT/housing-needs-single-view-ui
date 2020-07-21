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

  Object.entries(customer.systemIds).map(
    ([k, v]) => (metadata[`systemId.${k}`] = v)
  );

  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${customerId}/document-request`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${hackneyToken()}` },
      body: JSON.stringify(metadata)
    }
  );

  if (!response.ok) {
    return fail();
  }

  const { dropboxUrl } = await response.json();
  return success(dropboxUrl);
};
