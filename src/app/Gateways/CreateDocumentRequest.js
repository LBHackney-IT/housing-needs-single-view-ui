import { hackneyToken } from '../lib/Cookie';

const success = requestId => ({
  requestUrl: `${process.env.REACT_APP_DOC_UPLOAD_API_URL}/requests/${requestId}`,
  success: true
});
const fail = () => ({ success: false });

export default async customer => {
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
    `${process.env.REACT_APP_DOC_UPLOAD_API_URL}/requests`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${hackneyToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ metadata })
    }
  );

  if (!response.ok) {
    return fail();
  }

  const { requestId } = await response.json();
  return success(requestId);
};
