require('dotenv').config();
const client = require('./app/clients/pg');
const { User } = require('./app/models');

(async () => {
    const result = await User.findUserByEmail('user@user.com');
    console.log(result);
    client.end();
})();
