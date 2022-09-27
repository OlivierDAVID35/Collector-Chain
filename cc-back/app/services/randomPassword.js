const randomPassword = require('generate-password');

const generatedPassowrd = randomPassword.generate({
    length: 12,
    numbers: true,
});

module.exports = generatedPassowrd;
