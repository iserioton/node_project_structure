'use strict';

/**
 * Requires
 */
const config = require('./config');
const express = require('express');
const compression = require('compression')
const helmet = require('helmet');
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