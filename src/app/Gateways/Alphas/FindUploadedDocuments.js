import { hackneyToken } from '../../lib/Cookie';
import getUploadedDocumentUrl from './GetUploadedDocumentUrl';

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
        // minimumMatchTerms is currently set at 3 to match firstName, lastName, and 1 more
        body: JSON.stringify({ metadata, minimumMatchTerms: 3 })
      }
    );

    if (!response.ok) {
      return fail();
    }

    const { documents } = await response.json();
    const uploadedDocuments = documents.filter(d => d.metadata.filename);

    // eslint-disable-next-line
    for (const [i, d] of uploadedDocuments.entries()) {
      const docUrlResult = await getUploadedDocumentUrl(d.documentId);
      if (docUrlResult.success) {
        uploadedDocuments[i].docUrl = docUrlResult.downloadUrl;
      }
    }

    return success(uploadedDocuments);
  } catch (err) {
    console.log('Error finding uploaded documents', err);
    return fail();
  }
};
