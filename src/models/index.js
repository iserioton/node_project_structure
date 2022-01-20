"use strict";

const mongoModels = require("./mongodb"),
    mysql = require('./mysql');

module.exports = {
    userModel: mongoModels.userModel,
    mysql
};
