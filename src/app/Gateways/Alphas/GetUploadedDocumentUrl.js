import { hackneyToken } from '../../lib/Cookie';

const success = downloadUrl => ({
  downloadUrl,
  success: true
});
const fail = () => ({ success: false });

export default async documentId => {
  if (!documentId) return fail();

  try {
    const response = await fetch(
      `${process.env.REACT_APP_EVIDENCE_STORE_API_URL}/${documentId}/contents?redirect=false`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${hackneyToken()}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      return fail();
    }

    const { downloadUrl } = await response.json();
    return success(downloadUrl);
  } catch (err) {
    console.log('Error getting uploaded document url', err);
    return fail();
  }
};
