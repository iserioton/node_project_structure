'use strict';

/**
 * Config env according to app mode
 */
require('dotenv').config({ path: './src/config/.env_' + process.env.NODE_ENV });

/**
 * Requires
 */
const express = require('express');
const compression = require('compression')
const helmet = require('helmet');
const config = require('./config');
const routes = require('./routes');


/**
 * Routes and middlewares
 */
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.set('port', config.port);

app.use(`/${config.apiVersion}`, routes);

/** 404 API */
app.use('/', (req, res) => {
	res.status(404).send('You are looking for page is not found');
})

/** Catch process level error and generate log for forther. */
process.on('uncaughtException', (err) => {
	/* create log */
	console.error(err)
})

process.on('unhandledRejection', () => {
	/* create log */
	console.error(err)
})

module.exports = app;