const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8090;

app.use(cors());

app.use(bodyParser.json());

app.post('/metadata', (req, res) => {
  if (req.body['systemId.sv'] === '99') {
    return res.sendStatus(500);
  }
  res.status(201).send({ url: 'http://doc-upload/my-new-dropbox' });
});

app.listen(port, () =>
  console.log(`Fake Info Evidence API listening on port ${port}!`)
);
