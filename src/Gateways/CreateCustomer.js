import { AuthHeader } from '.';

function CreateCustomer(data, cb) {
  const req = {
    ...{
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ customers: data })
    },
    ...AuthHeader
  };

  fetch(`${process.env.REACT_APP_HN_API_URL}/customers`, req)
    .then(async function(response) {
      const json = await response.json();
      return json;
    })
    .then(function(myJson) {
      cb(null, myJson);
    });
}

export default CreateCustomer;
