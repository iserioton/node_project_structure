'use strict';

const ENV_VARS = {
	MODE: process.env.NODE_ENV,
	appConfg: {
		port: process.env.PORT,
		apiVersion: process.env.API_VERSION,
		project: process.env.PROJECT_NAME
	},
	jwtConfig: {
		jwtSecret: process.env.JWT_SECRET,
		expiresIn: '1440s'
	},
	mysqlCredentials: {
		host: process.env.DB_HOST,
		dbName: process.env.DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD
	}
};

module.exports = ENV_VARS;
