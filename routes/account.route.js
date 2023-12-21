const express = require('express');
const router = express.Router();

const accountSchemaValidators = require('../schemaValidators/accounts.schema'); 
const Role = require('../_helpers/role');
const accountController = require('../controller/accounts.controller');
const authorize = require('../_middleware/authorize');

router.post('/authenticate', accountSchemaValidators.authenticateSchema, accountController.authenticate);
router.post('/refresh-token', accountController.refreshToken);
router.post('/revoke-token', authorize(), accountSchemaValidators.revokeTokenSchema, accountController.revokeToken);
router.post('/register', accountSchemaValidators.registerSchema, accountController.register);
router.post('/verify-email', accountSchemaValidators.verifyEmailSchema, accountController.verifyEmail);
router.post('/forgot-password', accountSchemaValidators.forgotPasswordSchema, accountController.forgotPassword);
router.post('/validate-reset-token', accountSchemaValidators.validateResetTokenSchema, accountController.validateResetToken);
router.post('/reset-password', accountSchemaValidators.resetPasswordSchema, accountController.resetPassword);
router.get('/', authorize(Role.Admin), accountController.getAll);
router.get('/:id', authorize(), accountController.getById);
router.post('/', authorize(Role.Admin), accountSchemaValidators.createSchema, accountController.create);
router.put('/:id', authorize(), accountSchemaValidators.updateSchema, accountController.update);
router.delete('/:id', authorize(), accountController._delete);

module.exports = router;