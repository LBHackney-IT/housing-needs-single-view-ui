import { AuthHeader } from '.';

function FetchCustomerNotes(id) {
  return fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${id}/notes`,
    AuthHeader
  ).then(function(response) {
    return response.json();
  });
}

export default FetchCustomerNotes;
