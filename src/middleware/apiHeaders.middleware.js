function setHeaders(req, res, next) {
	const origin = req.header.origin || '*';
	res.setHeader('Access-Control-Allow-Origin', origin);
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Authentication');
	res.setHeader('Access-Control-Expose-Headers', 'Authentication');
	res.setHeader('Cache-Control', 'max-age=0, must-revalidate');
	/* res.setHeader('content-encoding', 'gzip'); */
	res.setHeader('Connection', 'close');
	next();
}

module.exports = setHeaders;