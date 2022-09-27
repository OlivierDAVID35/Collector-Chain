const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const path = require('path');
const cors = require('cors');
const errorHandler = require('./helper/errorHandler');
const ApiError = require('./errors/apiError');

const corsOptions = {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://collector-chain.herokuapp.com', 'http://localhost:5000'],
};

const router = require('./router');

const options = {
    info: {
        version: '1.0.0',
        title: 'Collector Chain',
        description: 'API permettant de collectionner, acheter et vendre des NFT',
        license: {
            name: 'MIT',
        },
    },
    // Base directory which we use to locate your JSDOC files
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.js',
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/api-docs',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: true,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/v3/api-docs',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
};

const app = express();

expressJSDocSwagger(app)(options);

app.use(cors(corsOptions));

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../cc-front/dist')));

app.use(router);

app.use((req, res, next) => {
    next(new ApiError('endpoint not found', { statusCode: 404 }));
});

app.use(errorHandler);

module.exports = app;
