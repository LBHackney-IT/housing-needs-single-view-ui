import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RequestDocuments from './index';
import CreateDocumentRequest from '../../../Gateways/Alphas/CreateDocumentRequest';
jest.mock('../../../Gateways/Alphas/CreateDocumentRequest');

describe('RequestDocuments', () => {
  const docRequestButton = 'create-document-request-button';

  it('can show the request documents pane', () => {
    const { queryByTestId } = render(<RequestDocuments />);
    expect(queryByTestId(docRequestButton)).toBeInTheDocument();
  });

  it('can request documents', async () => {
    const requestUrl = 'url';
    CreateDocumentRequest.mockResolvedValue({
      requestUrl,
      success: true
    });

    const { queryByTestId, findByTestId } = render(
      <RequestDocuments customer={{ name: [{ first: 'Frank' }] }} />
    );
    fireEvent.click(queryByTestId(docRequestButton));

    expect(CreateDocumentRequest).toHaveBeenCalledWith({
      name: [{ first: 'Frank' }]
    });
    expect(
      await findByTestId('create-document-request-url')
    ).toBeInTheDocument();
  });

  it('displays an error if request fails', async () => {
    CreateDocumentRequest.mockResolvedValue({
      success: false
    });

    const { queryByTestId, findByText } = render(
      <RequestDocuments customer={{ firstName: 'Frank' }} />
    );

    fireEvent.click(queryByTestId(docRequestButton));

    expect(
      await findByText('Error creating document request url')
    ).toBeInTheDocument();
  });
});
