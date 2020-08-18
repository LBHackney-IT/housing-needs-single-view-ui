import getUploadedDocumentUrl from './GetUploadedDocumentUrl';
import { enableFetchMocks } from 'jest-fetch-mock';
import { hackneyToken } from '../../lib/Cookie';
jest.mock('../../lib/Cookie');

describe('GetUploadedDocumentUrl', () => {
  beforeEach(() => {
    enableFetchMocks();
    hackneyToken.mockImplementation(() => 'token');
    process.env.REACT_APP_EVIDENCE_STORE_API_URL = 'http://evidencestore';
  });

  it('can get document url', async () => {
    const documentId = '123';
    const expectedUrl = 'a_secure_url';
    fetch.mockResponse(
      JSON.stringify({
        downloadUrl: expectedUrl
      })
    );

    const result = await getUploadedDocumentUrl(documentId);

    expect(fetch).toHaveBeenCalledWith(
      `http://evidencestore/${documentId}/contents?redirect=false`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer token',
          'Content-Type': 'application/json'
        }
      }
    );
    expect(result.downloadUrl).toEqual(expectedUrl);
    expect(result.success).toEqual(true);
  });

  it('fails if get fails', async () => {
    fetch.mockImplementationOnce(() => ({ ok: false, status: 500 }));
    const result = await getUploadedDocumentUrl('123');
    expect(result.success).toEqual(false);
  });

  it('fails if error thrown', async () => {
    console.log = jest.fn();
    fetch.mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await getUploadedDocumentUrl('123');
    expect(result.success).toEqual(false);
  });
});
