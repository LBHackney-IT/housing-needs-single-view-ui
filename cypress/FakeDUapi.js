const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8090;

app.use(cors());

app.use(bodyParser.json());

app.post('/requests', (req, res) => {
  if (req.body.metadata['systemId.sv'] === '99') {
    return res.sendStatus(500);
  }
  res.status(201).send({ requestId: 'my-new-request' });
});

app.listen(port, () =>
  console.log(`Fake Doc Upload API listening on port ${port}!`)
);
