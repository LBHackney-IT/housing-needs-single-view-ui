import findUploadedDocuments from './FindUploadedDocuments';
import getUploadedDocumentUrl from './GetUploadedDocumentUrl';
import { enableFetchMocks } from 'jest-fetch-mock';
import { hackneyToken } from '../../lib/Cookie';
jest.mock('./GetUploadedDocumentUrl');
jest.mock('../../lib/Cookie');

describe('FindUploadedDocuments', () => {
  beforeEach(() => {
    enableFetchMocks();
    hackneyToken.mockImplementation(() => 'token');
    getUploadedDocumentUrl.mockImplementation(() => jest.fn());
    process.env.REACT_APP_EVIDENCE_STORE_API_URL = 'http://evidencestore';
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
    name: [
      { first: 'Sarah', last: 'Smith', title: 'Miss' },
      { first: 'Sarahh', last: 'Smithh', title: 'Miss' }
    ]
  };

  it('can find uploaded documents', async () => {
    const expectedMetadata = {
      firstName: [customer.name[0].first, customer.name[1].first],
      lastName: [customer.name[0].last, customer.name[1].last],
      dob: customer.dob,
      'systemId.jigsaw': customer.systemIds.jigsaw,
      'systemId.academyBenefits': customer.systemIds.academyBenefits,
      'systemId.academyCouncilTax': customer.systemIds.academyCouncilTax,
      'systemId.uhtHousingRegister': customer.systemIds.uhtHousingRegister,
      'systemId.uhw': customer.systemIds.uhw
    };
    const expectedDocuments = [
      { documentId: '1', metadata: { filename: '123.jpeg' } },
      { documentId: '2', metadata: { filename: '456.pdf' } }
    ];

    fetch.mockResponseOnce(
      JSON.stringify({
        documents: expectedDocuments
      })
    );

    const result = await findUploadedDocuments(customer);

    expect(fetch).toHaveBeenCalledWith('http://evidencestore/search', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ metadata: expectedMetadata, minimumMatchTerms: 3 })
    });
    expect(result.documents).toEqual(expectedDocuments);
    expect(result.success).toEqual(true);
  });

  it('filters out empty docs', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        documents: [
          { documentId: '1', metadata: {} },
          { documentId: '2', metadata: { filename: '456.pdf' } }
        ]
      })
    );

    const result = await findUploadedDocuments(customer);
    expect(result.documents.length).toEqual(1);
    expect(result.documents[0].documentId).toEqual('2');
  });

  it('gets the doc urls', async () => {
    getUploadedDocumentUrl.mockImplementationOnce(async () =>
      Promise.resolve({ success: true, downloadUrl: 'abc' })
    );
    fetch.mockResponseOnce(
      JSON.stringify({
        documents: [
          { documentId: '1', metadata: { filename: '123.jpeg' } },
          { documentId: '2', metadata: { filename: '456.pdf' } }
        ]
      })
    );

    const result = await findUploadedDocuments(customer);
    expect(getUploadedDocumentUrl).toHaveBeenCalledTimes(2);
    expect(result.documents[0].docUrl).toEqual('abc');
  });

  it('fails if customer record is invalid', async () => {
    const result = await findUploadedDocuments();
    expect(result.success).toEqual(false);
  });

  it('fails if find fails', async () => {
    fetch.mockImplementationOnce(() => ({ ok: false, status: 500 }));
    const result = await findUploadedDocuments(customer);
    expect(result.success).toEqual(false);
  });

  it('fails if error thrown', async () => {
    console.log = jest.fn();
    fetch.mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await findUploadedDocuments(customer);
    expect(result.success).toEqual(false);
  });
});
