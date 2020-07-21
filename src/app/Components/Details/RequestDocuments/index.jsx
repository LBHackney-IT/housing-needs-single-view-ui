import React, { useState, useCallback } from 'react';
import CreateDocumentRequest from '../../../Gateways/CreateDocumentRequest';

const RequestDocuments = ({ customerId, customer }) => {
  const [state, setState] = useState({
    dropboxUrl: '',
    loading: false,
    error: null
  });

  const createDocumentRequest = useCallback(async () => {
    const created = dropboxUrl => {
      setState({
        ...state,
        loading: false,
        dropboxUrl
      });
    };

    const failed = () => {
      setState({
        ...state,
        loading: false,
        error: 'Error creating document upload url'
      });
    };

    setState({ ...state, loading: true, dropboxUrl: '', error: '' });
    try {
      const { dropboxUrl, success } = await CreateDocumentRequest({
        customerId,
        customer
      });
      if (!success) return failed();
      created(dropboxUrl);
    } catch (error) {
      console.log(error);
      failed();
    }
  }, [state, customerId, customer]);

  return (
    <div className="details__left-column__item">
      <button
        className="govuk-button lbh-button"
        onClick={createDocumentRequest}
        disabled={state.loading}
        data-testid="create-document-request-button"
      >
        Create Doc Upload Url
      </button>
      {state.dropboxUrl && (
        <>
          <br />
          <div>Upload url: {state.dropboxUrl}</div>
        </>
      )}
      {state.error && <div>{state.error}</div>}
    </div>
  );
};

export default RequestDocuments;
