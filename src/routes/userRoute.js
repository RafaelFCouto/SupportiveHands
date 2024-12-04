const { Router } = require('express');
const UserController = require('../apps/controllers/UserControllers');
const createUserSchema = require('../apps/validators/user-validators/createUserValidator');
const updateUserSchema = require('../apps/validators/user-validators/updateUserValidator');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const AuthMiddleware = require('../apps/middlewares/authentication');

const router = Router();

router.post('/create', ValidateMiddleware(createUserSchema), UserController.createUser);
router.use(AuthMiddleware);
router.put('/update', ValidateMiddleware(updateUserSchema), UserController.updateUser);
router.delete('/delete', UserController.deleteUser);
router.get('/:id', UserController.listUser);

module.exports = router;
