const { Client } = require('pg');

const dbConfig = {
    connectionString: process.env.DATABASE_URL,
};

dbConfig.ssl = { rejectUnauthorized: false };

const client = new Client(dbConfig);

client.connect();

module.exports = client;
