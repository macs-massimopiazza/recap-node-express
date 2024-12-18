const express = require('express');
const app = express();
const routerQuotes = require('./routers/gerryQuotes');
app.get('/', (req, res) => {
  res.send('Magica api per gerry. Endpoints: /gerryQuotes/all , /gerryQuotes/random');
})
app.use('/gerryQuotes', routerQuotes);