import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RequestDocuments from './index';
import CreateDocumentRequest from '../../../Gateways/CreateDocumentRequest';
jest.mock('../../../Gateways/CreateDocumentRequest');

describe('RequestDocuments', () => {
  const docRequestButton = 'create-document-request-button';

  it('can show the request documents pane', () => {
    const { queryByTestId } = render(<RequestDocuments />);
    expect(queryByTestId(docRequestButton)).toBeInTheDocument();
  });

  it('can request documents', async () => {
    const dropboxUrl = 'url';
    CreateDocumentRequest.mockResolvedValue({
      dropboxUrl,
      success: true
    });

    const { queryByTestId, findByText } = render(
      <RequestDocuments
        customerId="1"
        customer={{ name: [{ first: 'Frank' }] }}
      />
    );
    fireEvent.click(queryByTestId(docRequestButton));

    expect(CreateDocumentRequest).toHaveBeenCalledWith({
      customerId: '1',
      customer: { name: [{ first: 'Frank' }] }
    });
    expect(await findByText(`Upload url: ${dropboxUrl}`)).toBeInTheDocument();
  });

  it('displays an error if request fails', async () => {
    CreateDocumentRequest.mockResolvedValue({
      success: false
    });

    const { queryByTestId, findByText } = render(
      <RequestDocuments customerId="1" customer={{ firstName: 'Frank' }} />
    );

    fireEvent.click(queryByTestId(docRequestButton));

    expect(
      await findByText('Error creating document upload url')
    ).toBeInTheDocument();
  });
});
