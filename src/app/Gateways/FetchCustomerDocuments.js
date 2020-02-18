import { AuthHeader } from '.';

function FetchCustomerDocuments(id) {
  return fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${id}/documents`,
    AuthHeader
  ).then(function(response) {
    return response.json();
  });
}

export default FetchCustomerDocuments;
