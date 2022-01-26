'use strict';
/* REQUIRES ============================================================== */
const { userService } = require('../services');

/* CONTROLLERS =========================================================== */
/**
 * Create User controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function userCreate(req, res, next) {
	try {
		const data = await userService.userCreate(req.body);
		return res.send(data);
	} catch (error) {
		return next(error);
	}
};

/**
 * User login controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
async function userLogin(req, res, next) {
	try {
		const ip = req.headers['x-real-ip'] || req.socket.remoteAddress;
		const data = await userService.userLogin(req.body, ip);
		return res.send(data);
	} catch (error) {
		return next(error);
	}
};

/**
 * User logout controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function userLogout(req, res, next) {
	try {
		const data = await userService.userLogout(req._userId);
		return res.send(data);
	} catch (error) {
		return next(error);
	}
};

/* EXPORTS ================================================================ */
module.exports = {
	userCreate,
	userLogin,
	userLogout
};
