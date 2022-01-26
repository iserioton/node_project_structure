'use strict';

const { appConfg, MODE } = require('../../config');
const log4js = require('log4js');

const logger = log4js.getLogger(`[${appConfg.project}]`);

if (MODE == 'production') {
	logger.level = 'production';
	console.log = function () { }
} else {
	logger.level = 'info';
}

module.exports = logger;
