const { Router } = require('express');
const AuthComponent = require('.');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving a signing up users
 * @name /v1/auth/signUp
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/signUp', AuthComponent.signUp);

/**
 * Route serving a signing in users
 * @name /v1/auth/signIn
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/signIn', AuthComponent.signIn);

/**
 * Route serving for refreshing token
 * @name /v1/auth/refresh-token
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/refresh-token', AuthComponent.refreshToken);

module.exports = router;
