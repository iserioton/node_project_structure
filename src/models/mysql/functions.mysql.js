'use strict';

/* REQUIRES ===================================================================== */
const common = require('common-utils'),
	mysqlPool = require('./connection.mysql');

/* FUNCTIONS ===================================================================== */
/**
 * Select Single Row
 * @param {*} table_name
 * @param {*} fields
 * @param {*} where
 * @param {*} order_by
 * @param {*} group_by
 */
function selectRow(table_name, fields = '*', where = null, order_by = null, group_by = null) {
	return [];
}


/* EXPORTS ==================================================================== */
module.exports = {
	selectRow
};