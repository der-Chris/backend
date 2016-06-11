import * as proxy from 'express-http-proxy';
import { couchUrl } from '../config';

module.exports = proxy(couchUrl, {
	// Intercept requests
	decorateRequest(req) {
		return req;
	},
	//filter here, either true or false
	// Intercept responses
	intercept(rsp, data, req, res, callback) {
	//	data = JSON.parse(data.toString('utf8'));
		data=data.toString('utf8');
		console.log(data);		
		callback(null, data);
	}
});
