import { AuthHeader } from '.';

function CreateCustomer(data, cb) {
  fetch(`${process.env.REACT_APP_HN_API_URL}/customers`, {
    ...{
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ customers: data })
    },
    ...AuthHeader
  })
    .then(async function(response) {
      const json = await response.json();
      json.customer.id = response.url.split('/').pop();
      return json;
    })
    .then(function(myJson) {
      cb(null, myJson);
    });
}

export default CreateCustomer;
