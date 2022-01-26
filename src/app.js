'use strict';
/**
 * Requires
 */
const http = require('http');
const express = require('express');
const cors = require('cors');
const compression = require('compression')
const helmet = require('helmet');
const { appConfg } = require('./config');
const routes = require('./routes');
const logger = require('./helpers/logger');
const {
	apiResponseMiddleware,
	apiNotFoundMiddleware,
	errorHandlerMiddleware,
	responceSetHeaders
} = require('./middleware');


/**
 * Routes and middlewares
 */
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(responceSetHeaders);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(apiResponseMiddleware);
app.use(`/${appConfg.apiVersion}`, routes);
app.use(apiNotFoundMiddleware);
app.use(errorHandlerMiddleware);

/**
 * Server Initiation
 */
server.listen(appConfg.port, () => {
	logger.info(
		`${appConfg.project} service is listening to the port ${appConfg.port}.`
	);
});

/** Catch process level error and generate log for forther. */
process.on('uncaughtException', (err) => {
	/* create log */
	logger.error(err)
})

process.on('unhandledRejection', () => {
	/* create log */
	logger.error(err)
})