const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('./cors');
const routers = require('./src/config/routers');

const app = express();

app.options('*', cors);

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

routers(app);

module.exports = app;
