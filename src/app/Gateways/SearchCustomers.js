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
      if (response.status >= 400) {
        return cb('Error searching');
      }
      return response.json();
    })
    .then(function(myJson) {
      cb(null, myJson);
    })
    .catch(err => {
      console.log(err);
      cb(err);
    });
}

export default SearchCustomers;
