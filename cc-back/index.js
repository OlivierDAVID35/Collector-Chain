require('dotenv').config();
const { createServer } = require('http');
const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = createServer(app);

/**
 * Initialize the web server
 * @param {number} (port - http port)
 * @param {string} (message - set a text to the main route)
 */
server.listen(PORT, () => {
    // console.log(`http://localhost:${PORT}`);
});
