const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

const searchCustomerResponse = require('./fixtures/searchCustomer');

const generateResponse = props => {
  const q = Object.entries(props.query).map(([k, v]) => {
    return `${v}`;
  });

  if (q[0].toLowerCase() === 'wednesday') return searchCustomerResponse;
  return {
    grouped: [],
    ungrouped: [],
    connected: []
  };
};

app.get('/customers', (req, res) => {
  res.send(generateResponse({ query: req.query }));
});

app.post('/customers', (req, res) => {
  res.send({ customer: { id: 946 } });
});

const customerRecord = require('./fixtures/customerRecord');
app.get('/customers/:id/record', (req, res) => {
  res.send(customerRecord);
});

const customerNotes = require('./fixtures/customerNotes');
app.get('/customers/:id/notes', (req, res) => {
  res.send(customerNotes);
});

const customerDocuments = require('./fixtures/customerDocuments');
app.get('/customers/:id/documents', (req, res) => {
  res.send(customerDocuments);
});

app.listen(port, () => console.log(`Fake SV API listening on port ${port}!`));
