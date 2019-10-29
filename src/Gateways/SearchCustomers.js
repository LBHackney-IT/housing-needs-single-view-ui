function SearchCustomers(query, cb) {
  let systems = [
    'SINGLEVIEW',
    'UHT-Contacts',
    'UHT-HousingRegister',
    'UHW',
    'JIGSAW',
    'ACADEMY'
  ].join(',');

  let queryParams = { systems };
  Object.entries(query).forEach(param => {
    const k = param[0];
    const v = param[1];
    if (v) {
      queryParams[k] = v;
    }
  });

  let queryString = Object.entries(queryParams)
    .map(([k, v]) => {
      return `${k}=${v}`;
    })
    .join('&');

  fetch(`${process.env.REACT_APP_HN_API_URL}/customers?${queryString}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      cb(myJson);
    });
}

export default SearchCustomers;
