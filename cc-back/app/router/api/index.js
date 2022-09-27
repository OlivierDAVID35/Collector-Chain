const express = require('express');

const router = express.Router();
const jwtModules = require('../../Auth/jwt');
const homePageController = require('../../controllers/homePageController');

const homepageRouter = require('./homePage');
const signUpRouter = require('./sign_up');
const loginRouter = require('./login');
const profilRouter = require('./profil');
const forgetUserRouter = require('./forgetUser');
const eventsRouter = require('./events');
const collectionsRouter = require('./collections');
const categoriesRouter = require('./categories');
// const showcaseUserRouter = require('./showcaseUser');
const nftRouter = require('./nft');
const favoriteRouter = require('./favorite');
const propertyRouter = require('./property');
const tagRouter = require('./tag');
const searchRouter = require('./search');

router.use(homepageRouter);
router.use(signUpRouter);
router.use(loginRouter);
router.use(profilRouter);
router.use(forgetUserRouter);
router.use(eventsRouter);
router.use(collectionsRouter);
router.use(categoriesRouter);
// router.use(showcaseUserRouter);
router.use(nftRouter);
router.use(favoriteRouter);
router.use(propertyRouter);
router.use(tagRouter);
router.use(searchRouter);

router.get('/posts', jwtModules.authenticateToken, homePageController.displayHomePage);
router.post('/token', jwtModules.refreshToken);
router.post('/logout', jwtModules.deleteRefreshToken);

module.exports = router;
