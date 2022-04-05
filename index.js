const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('./config/cors');
const router = require('./routes/routes');
require('./controller');

app.use(bodyParser.json());
app.use(cors);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(8181, () => {
  console.log({ sucess: "Micro service online" });
});
