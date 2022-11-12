const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('./cors');
const routers = require('./src/config/routers');

const app = express();

app.options('*', cors);

app.use(express.static('public'));
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

routers(app);

module.exports = app;
