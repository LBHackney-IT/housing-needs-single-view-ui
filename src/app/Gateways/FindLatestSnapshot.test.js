import findLatestSnapshot from './FindLatestSnapshot';
import { enableFetchMocks } from 'jest-fetch-mock';
import { hackneyToken } from '../lib/Cookie';
jest.mock('../lib/Cookie');

describe('FindLatestSnapshot', () => {
  beforeEach(() => {
    enableFetchMocks();
    hackneyToken.mockImplementation(() => 'token');
    process.env.REACT_APP_HN_API_URL = 'http://svapi';
  });

  it('can find the latest snapshot', async () => {
    const expectedSnapshot = {
      id: 'snap1',
      vulnerabilities: [],
      assets: [{ text: 'Passes the test!' }]
    };

    fetch.mockResponse(JSON.stringify(expectedSnapshot));
    const result = await findLatestSnapshot({ customerId: 1 });

    expect(fetch).toHaveBeenCalledWith(
      'http://svapi/customers/1/vulnerabilities/latest',
      {
        method: 'GET',
        headers: { Authorization: 'Bearer token' }
      }
    );

    expect(result).toEqual({
      success: true,
      data: expectedSnapshot
    });
  });

  it('returns null if no snapshot is found', async () => {
    fetch.mockImplementationOnce(() => ({ ok: false, status: 404 }));

    const result = await findLatestSnapshot({ customerId: 1 });

    expect(result).toEqual({
      success: true,
      data: null
    });
  });

  it('sets success to false if call fails', async () => {
    fetch.mockImplementationOnce(() => ({ ok: false, status: 500 }));

    const result = await findLatestSnapshot({ customerId: 1 });

    expect(result).toEqual({
      success: false,
      data: null
    });
  });
});
