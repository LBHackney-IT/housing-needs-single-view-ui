import { AuthHeader } from '.';

function SearchCustomers(query, cb) {
  let queryString = Object.entries(query)
    .map(([k, v]) => {
      return `${k}=${v}`;
    })
    .join('&');

  fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers?${queryString}`,
    AuthHeader
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      cb(myJson);
    });
}

export default SearchCustomers;
