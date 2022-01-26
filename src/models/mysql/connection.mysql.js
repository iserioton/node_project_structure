'use strict';

/* REQUIRES ===================================================================== */
const mysql = require('mysql');
const { mysqlCredentials } = require('../../config');

/* CONNECTION ==================================================================== */
let pool = new mysql.createPool(mysqlCredentials);

/* EXPORTS ==================================================================== */
exports.mysqlPool = pool;