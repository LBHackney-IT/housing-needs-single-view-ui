const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

const body = {
  grouped: [],
  ungrouped: [],
  connected: [
    {
      id: 10,
      firstName: 'Rick',
      lastName: 'Sanchez',
      dob: null,
      nino: null,
      address: '',
      source: 'SINGLEVIEW',
      links: [
        {
          id: 26,
          customer_id: 10,
          system_id: 5,
          remote_id: '111111/1',
          first_name: 'Rick',
          last_name: 'Sanchez',
          address: '33 address, Address, Stamford Hill, LAMAMA, ZO6 5FE',
          nino: 'SC1234565',
          dob: '1946-02-03T00:00:00.000Z',
          created_at: '2020-02-10T16:32:28.405Z',
          updated_at: '2020-02-10T16:32:28.405Z',
          system_name: 'Test-test'
        }
      ]
    }
  ]
};

app.get('/customers', (req, res) => res.send(body));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
