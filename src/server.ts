/// <reference path="../typings/main.d.ts" />

import 'source-map-support/register';
import * as express from 'express';
import { Request, Response } from 'express';

import * as couchProxy from './couch-proxy';

// Set up express
let app = express();
app.use('/couch', couchProxy);
app.use(express.static('./static'));
app.get('*', (req: Request, res: Response) => {
	res.sendFile('./static/index.html', { root: '.' });
});

// Connection established -> start webserver
const port: number = process.env.PORT || 8080;
app.listen(port, () => {
	console.log('Listening on port '+port+'...');
});
