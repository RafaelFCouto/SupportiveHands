const { Router } = require('express');
const AuthController = require('../apps/controllers/AuthControllers');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const authSchema = require('../apps/validators/authValidator');

const router = Router();

router.post('/', ValidateMiddleware(authSchema), AuthController.authenticate);

module.exports = router;