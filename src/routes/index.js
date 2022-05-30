'use strict';

/* REQUIRES ============================================================ */
const router = require('express').Router();
const { user } = require('../controllers')

/* ROUTER USES ========================================================= */
router.use('/user', user);

/* EXPORTS ============================================================= */
module.exports = router;