import findSnapshots from './FindSnapshots';
import { enableFetchMocks } from 'jest-fetch-mock';
import { hackneyToken } from '../lib/Cookie';
jest.mock('../lib/Cookie');

describe('FindSnapshots', () => {
  beforeEach(() => {
    enableFetchMocks();
    hackneyToken.mockImplementation(() => 'token');
    process.env.REACT_APP_HN_API_URL = 'http://svapi';
  });

  it('can find the latest snapshot', async () => {
    const expectedSnapshots = [
      {
        id: 'snap1',
        vulnerabilities: [],
        assets: [
          { name: '', data: [{ id: 'text', value: 'Passes the test!' }] }
        ]
      }
    ];

    fetch.mockResponse(JSON.stringify({ snapshots: expectedSnapshots }));
    const result = await findSnapshots({ customerId: 1 });

    expect(fetch).toHaveBeenCalledWith(
      'http://svapi/customers/1/vulnerabilities',
      {
        method: 'GET',
        headers: { Authorization: 'Bearer token' }
      }
    );

    expect(result).toEqual({
      success: true,
      data: expectedSnapshots
    });
  });

  it('returns empty list if nothing found', async () => {
    fetch.mockImplementationOnce(() => ({ ok: false, status: 404 }));
    const result = await findSnapshots({ customerId: 1 });

    expect(result).toEqual({
      success: true,
      data: []
    });
  });

  it('sets success to false if call fails', async () => {
    fetch.mockImplementationOnce(() => ({ ok: false, status: 500 }));
    const result = await findSnapshots({ customerId: 1 });

    expect(result).toEqual({
      success: false,
      data: []
    });
  });
});
