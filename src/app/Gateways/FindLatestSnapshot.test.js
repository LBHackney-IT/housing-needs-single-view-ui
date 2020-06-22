import findLatestSnapshot from './FindLatestSnapshot';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('FindLatestSnapshot', () => {
  beforeEach(() => enableFetchMocks());

  it('can find the latest snapshot', async () => {
    const expectedSnapshot = {
      id: 'snap1',
      vulnerabilities: [],
      assets: ['Passes the test!']
    };

    fetch.mockResponse(JSON.stringify({ snapshots: [expectedSnapshot] }));
    const result = await findLatestSnapshot({ customerId: 1 });

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
