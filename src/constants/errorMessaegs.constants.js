'use strict';
/* METHOD FOR ERROR OBJECT =================================================================== */

/**
 * Method to define a new error
 * @param {*} code
 * @param {*} message
 * @param {*} type
 * @param {*} field
 * @returns
 */
function createError(code, message, type = undefined, field = undefined) {
	const error = new Error(message);
	error.code = code;
	error.type = type;
	error.field = field;
	return error;
};

/* METHOD TYPE - DYNAMIC ERRORS ============================================================= */
exports.ER_DOCUMENT_NOT_FOUND = (
	field = 'field',
	message = `does not exist.`,
	code = 'ER_DOCUMENT_NOT_FOUND',
	type = 'DOCUMENT_FILTER'
) => createError(code, `${field} ${message}`, type, field);

/* CONSTANT TYPE - STATIC ERRORS ============================================================= */
exports.ER_UNAUTHORIZED_CLIENT = createError(
	'ER_UNAUTHORIZED_CLIENT',
	'Unauthorized client access to API.',
	'AUTHORIZATION'
);
exports.ER_API_NOT_FOUND = createError(
	'ER_API_NOT_FOUND',
	'API cannot be found.',
	'REQUEST_VALIDATION'
);
exports.ER_BAD_REQUEST = createError(
	'ER_BAD_REQUEST',
	'Improper request to API call.',
	'REQUEST_VALIDATION'
);
exports.ER_USERNAME_ALREADY_EXISTS = createError(
	'ER_USERNAME_ALREADY_EXISTS',
	'Username already exists.',
	'DUPLICATE_ENTRY'
);
exports.ER_WRONG_PASSWORD = createError(
	'ER_WRONG_PASSWORD',
	'You have entered wrong password.',
	'PASSWORD_VALIDATION'
);
exports.INTERNAL_SERVER_ERROR = createError(
	'INTERNAL_SERVER_ERROR',
	'Server counter unkhmown problem',
	'SERVER_ERROR'
);