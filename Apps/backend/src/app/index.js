const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const config = require('./config')();
const database = require('./database')(config);
const routes = require('./routes')(config, database);

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(cookieParser(config.secret));
app.use(express.static(path.join(__dirname, '..', 'assets')));

app.use('/', routes);

const server = http.createServer(app);

server.listen(config.port);