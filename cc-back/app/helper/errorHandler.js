// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    let statusCode;
    let message;
    if (err.name === 'ApiError') {
        statusCode = err.infos?.statusCode ?? 400;
        message = err.message;
    } else if (err.name === 'ValidationError') {
        // console.log(err);
        if (err.details[0].type === 'string.pattern.base') {
            statusCode = 400;
            message = `bad pattern for ${err.details[0].context.label}`;
        } else if (err.details[0].type === 'string.empty') {
            statusCode = 400;
            message = `${err.details[0].context.label} is empty`;
        } else if (err.details[0].type === 'any.only') {
            statusCode = 400;
            message = `${err.details[0].context.label} is not like ${err.details[0].context.valids[0].key}`;
        } else if (err.details[0].type === 'string.min') {
            statusCode = 400;
            message = `the ${err.details[0].context.label} must contain at least ${err.details[0].context.limit} characters`;
        } else if (err.details[0].type === 'number.positive') {
            statusCode = 400;
            message = `the ${err.details[0].context.label} must be a positive number`;
        } else {
            statusCode = 400;
            message = err;
        }
    } else if (err.code === '23505') {
        statusCode = 400;
        message = `${err.table} already exist`;
    } else {
        console.log('err 1');
        statusCode = 500;
        // message = 'Internal server error';
        message = err.message;
    }

    res.status(statusCode).json({ message });
};
