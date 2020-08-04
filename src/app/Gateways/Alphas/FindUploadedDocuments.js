import { hackneyToken } from '../../lib/Cookie';

const success = documents => ({
  documents,
  success: true
});
const fail = () => ({ success: false });

export default async customer => {
  if (!customer) return fail();

  try {
    const metadata = {
      firstName: customer.name.map(n => n.first),
      lastName: customer.name.map(n => n.last),
      dob: customer.dob
    };

    Object.entries(customer.systemIds).forEach(
      ([k, v]) => (metadata[`systemId.${k}`] = v)
    );

    const response = await fetch(
      `${process.env.REACT_APP_EVIDENCE_STORE_API_URL}/search`,
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

    const { documents } = await response.json();
    return success(documents);
  } catch (err) {
    console.log('Error finding uploaded documents', err);
    return fail();
  }
};
