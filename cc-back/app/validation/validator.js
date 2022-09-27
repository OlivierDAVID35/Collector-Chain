// const ValidationError = require('../errors/validationError');
/**
 * Factory which generate a data validation middleware function
 * @param {string} dataType - type of HTTP user input data source (query, body, or params)
 * @param {object} schema - Schema made with Joi.object()
 * @returns {object} express middleware function
 */
const middlewareFactory = (dataType, schema) => async (req, res, next) => {
    try {
        // DataType peut-être query, body, params…
        // Et cette information est récupérer au moment de créer le middleware côté router.
        await schema.validateAsync(req[dataType]);
        /// Si ca se passe bien on passe au controller (middleware suivant)
        next();
    } catch (err) {
        // console.log(err);
        // throw new ValidationError('test', { statusCode: 400 });
        next(err);
        // next(new ValidationError('err', { statusCode: 400, error: err }));
    }
};

module.exports = middlewareFactory;
