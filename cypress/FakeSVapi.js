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

app.post('/customers/:id/shared-plans', (req, res) => {
  res.status(201).send({ id: '1' });
});

app.get('/customers/:id/shared-plans', (req, res) => {
  res.status(200).send({ planIds: ['1'] });
});

app.get('/customers/:id/vulnerabilities', (req, res) => {
  if (req.params.id === '5') {
    return res.status(200).send(JSON.stringify({ snapshots: [] }));
  }

  res.status(200).send(require('./fixtures/snapshot.json'));
});

app.post('/customers/:id/vulnerabilities', (req, res) => {
  res.status(201).send(
    JSON.stringify({
      snapshotId: '10',
      firstName: 'Wednesday',
      lastName: 'Adams'
    })
  );
});

app.listen(port, () => console.log(`Fake SV API listening on port ${port}!`));
