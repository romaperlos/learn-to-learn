import http from 'http';
import app from './app.js';
import './middleware/env.js'
const port = process.env.PORT ?? 3001;

const server = http.createServer(app);

server.listen(port, () => console.log("Listening on " + port));
