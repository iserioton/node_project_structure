'use strict';

/* REQUIRES ============================================================ */
const { Router } = require('express');
const { userController } = require('../controllers');
const { apiAuthMiddleware } = require('../middleware');

/* CONSTANTS =========================================================== */
const userRouter = new Router();

/* REQUEST DEFINITIONS ================================================= */
userRouter.post('/create', userController.userCreate);
userRouter.put('/login', userController.userLogin);

userRouter.use(apiAuthMiddleware); /* REQUESTS BELOW HERE REQUIRE AUTHENTICATION. */

userRouter.put('/logout', userController.userLogout);

/* EXPORTS ============================================================= */
module.exports = userRouter;
