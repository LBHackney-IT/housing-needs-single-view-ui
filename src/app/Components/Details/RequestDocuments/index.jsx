import React, { useState, useCallback } from 'react';
import CreateDocumentRequest from '../../../Gateways/CreateDocumentRequest';

const RequestDocuments = ({ customer }) => {
  const [state, setState] = useState({
    requestUrl: '',
    loading: false,
    error: null
  });

  const createDocumentRequest = useCallback(async () => {
    const created = requestUrl => {
      setState({
        ...state,
        loading: false,
        requestUrl
      });
    };

    const failed = () => {
      setState({
        ...state,
        loading: false,
        error: 'Error creating document request url'
      });
    };

    setState({ ...state, loading: true, requestUrl: '', error: '' });

    try {
      const { requestUrl, success } = await CreateDocumentRequest(customer);
      if (!success) return failed();
      created(requestUrl);
    } catch (error) {
      console.log(error);
      failed();
    }
  }, [state, customer]);

  return (
    <div className="details__left-column__item">
      <button
        className="govuk-button lbh-button"
        onClick={createDocumentRequest}
        disabled={state.loading}
        data-testid="create-document-request-button"
        style={{ marginTop: 0, marginBottom: '10px' }}
      >
        Create Doc Upload Url
      </button>
      {state.requestUrl && (
        <>
          <br />
          <div data-testid="create-document-request-result">
            <strong>Upload url:</strong>{' '}
            <a
              href={state.requestUrl}
              data-testid="create-document-request-url"
            >
              {state.requestUrl}
            </a>
          </div>
        </>
      )}
      {state.error && (
        <div data-testid="create-document-request-error">{state.error}</div>
      )}
    </div>
  );
};

export default RequestDocuments;
