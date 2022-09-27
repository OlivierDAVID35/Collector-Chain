const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('../Auth/jwt');
const ApiError = require('../errors/apiError');
const nodemailer = require('../services/nodeMailer');
const randomPassword = require('../services/randomPassword');

require('dotenv').config();

module.exports = {
    /**
     * User controller for add a new user
     * @param {object} request - Express request object
     * @param {object} respobse - Express response object
     * @returns Roue API JSON response
     */
    // On vérifie si les champs sont vides
    // Sign up
    async insertNewUser(req, res) {
        const newUser = {
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
        };
        const user = await User.findUserByEmail(newUser.email);
        if (user) throw new ApiError('email already use!', { statusCode: 400 });
        /* Password encryption */
        const hashedPassword = await bcrypt.hash(newUser.password, 12);
        newUser.password = hashedPassword;
        const addUser = await User.create(newUser);
        // on teste si le nouvel utilisateur existe déjà
        if (newUser === addUser) throw new ApiError('user already exists!', { statusCode: 400 });

        return res.json(addUser);
    },
    /**
     * User controller to login user
     * @param {object} request - Express request object
     * @param {object} response - Express response object
     * @returns Route API JSON response
     */
    // Login
    async loginUser(req, res) {
        const { email, password } = req.body;
        const user = await User.findUserByEmail(email);

        if (!user) return res.json({ error: 'user not exist' });

        const userPassword = await bcrypt.compare(password, user.password);

        if (!userPassword) return res.json({ error: 'bad password' });

        delete user.password;
        const isLogged = {
            isLogged: true,
        };
        const token = jwt.createToken(user);
        const userLog = Object.assign(user, token, isLogged);

        return res.json(userLog);
    },

    async getUser(req, res) {
        const user = await User.findById(req.params.id);
        if (!user) throw new ApiError('user not exist', { statusCode: 404 });
        return res.json(user);
    },

    // Pour supprimer le profil user
    async deleteProfilUser(req, res) {
        await User.deleteById(req.params.id);
        return res.json('User deleted !!');
    },

    // pour modifier ses infos perso sur la page profil
    async updateUserProfile(req, res) {
        const user = await User.findById(req.params.id);
        if (!user) throw new ApiError('user not exist', { statusCode: 404 });
        const newUser = req.body;
        Object.entries(user).forEach(([key]) => {
            if (!newUser[key]) newUser[key] = user[key];
        });
        if (!await bcrypt.compare(newUser.password, user.password)) throw new ApiError('bad password', { statusCode: 401 });
        if (newUser.newPassword) {
            const hashedPassword = await bcrypt.hash(newUser.newPassword, 12);
            newUser.password = hashedPassword;
        } else {
            newUser.password = user.password;
        }
        const updateProfil = await User.update(newUser);
        return res.json(updateProfil);
    },

    async resetMail(req, res) {
        const userEmail = req.body.email;
        // console.log(userEmail);
        const setTemporaryPassword = await User.recoveryPassword(randomPassword, userEmail);
        console.log(setTemporaryPassword);

        nodemailer(userEmail, randomPassword);

        return res.json(setTemporaryPassword);
    },

};
