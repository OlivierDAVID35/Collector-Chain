require('dotenv').config();
const jwt = require('jsonwebtoken');
const generateJwt = require('./generateJWT');

let refreshTokens = [];

module.exports = {
    createToken(user) {
        const expiresIn = process.env.EXPIRES_TOKEN;
        const accessToken = generateJwt.generateAccessToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        return {
            accessToken, refreshToken, expiresIn,
        };
    },
    authenticateToken(req, res, next) {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (token !== undefined) {
            try {
                jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                return next();
            } catch (error) {
                return next(error.message);
            }
        }
        return next('Token is undefined');
    },
    refreshToken(req, res, next) {
        const refreshToken = req.body.token;
        const expiresIn = process.env.EXPIRES_TOKEN;
        if (refreshToken !== '') {
            if (refreshTokens.includes(refreshToken)) {
                try {
                    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                    delete user.iat;
                    const accessToken = generateJwt.generateAccessToken(user);
                    return res.json({ accessToken, expiresIn });
                } catch (error) {
                    return next(error.message);
                }
            } else {
                return next('refreshToken not existed');
            }
        } else {
            return next('Token is null');
        }
    },
    deleteRefreshToken(req, res, next) {
        refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
        return next('Refresh token deleted');
    },
};
