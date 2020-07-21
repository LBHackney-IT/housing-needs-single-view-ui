import createDocumentRequest from './CreateDocumentRequest';
import { enableFetchMocks } from 'jest-fetch-mock';
import { hackneyToken } from '../lib/Cookie';
jest.mock('../lib/Cookie');

describe('CreateDocumentRequest', () => {
  beforeEach(() => {
    enableFetchMocks();
    hackneyToken.mockImplementation(() => 'token');
    process.env.REACT_APP_HN_API_URL = 'http://svapi';
  });

  const customer = {
    systemIds: {
      jigsaw: ['263272'],
      academyBenefits: ['60940760', '60940888'],
      academyCouncilTax: ['333333399', '399999999'],
      uhtHousingRegister: ['DIR0148754/1'],
      uhw: ['334351']
    },
    dob: ['1969-02-01 12:00:00'],
    name: [{ first: 'Sarah', last: 'Smith', title: 'Miss' }]
  };

  it('can create a document request', async () => {
    const expectedMetadata = {
      firstName: [customer.name[0].first],
      lastName: [customer.name[0].last],
      dob: customer.dob,
      'systemId.jigsaw': customer.systemIds.jigsaw,
      'systemId.academyBenefits': customer.systemIds.academyBenefits,
      'systemId.academyCouncilTax': customer.systemIds.academyCouncilTax,
      'systemId.uhtHousingRegister': customer.systemIds.uhtHousingRegister,
      'systemId.uhw': customer.systemIds.uhw
    };
    const dropboxUrl = 'http://doc-upload/my-new-dropbox';
    fetch.mockResponse(JSON.stringify({ dropboxUrl }));

    const result = await createDocumentRequest({ customerId: 1, customer });

    expect(fetch).toHaveBeenCalledWith(
      'http://svapi/customers/1/document-request',
      {
        method: 'POST',
        headers: { Authorization: 'Bearer token' },
        body: JSON.stringify(expectedMetadata)
      }
    );
    expect(result).toEqual({
      success: true,
      dropboxUrl: 'http://doc-upload/my-new-dropbox'
    });
  });

  it('fails if no customer id', async () => {
    const result = await createDocumentRequest({ customer });
    expect(result).toEqual({
      success: false
    });
  });

  it('fails if customer record is invalid', async () => {
    const result = await createDocumentRequest({ customerId: 1 });
    expect(result).toEqual({
      success: false
    });
  });

  it('fails if create fails', async () => {
    fetch.mockImplementationOnce(() => ({ ok: false, status: 500 }));
    const result = await createDocumentRequest({ customerId: 1, customer });
    expect(result).toEqual({
      success: false
    });
  });
});
