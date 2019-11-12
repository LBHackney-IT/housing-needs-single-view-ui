import { AuthHeader } from '.';

function FetchCustomerRecord(id) {
  return fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${id}/record`,
    AuthHeader
  ).then(function(response) {
    return response.json();
  });
}

export default FetchCustomerRecord;
