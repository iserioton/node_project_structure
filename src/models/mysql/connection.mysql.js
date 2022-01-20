'use strict';

/* REQUIRES ===================================================================== */
const mysql = require('mysql');
const { mysql } = require('../config');

/* CONNECTION ==================================================================== */
let pool = new mysql.createPool(mysql);

/* EXPORTS ==================================================================== */
exports.mysqlPool = pool;