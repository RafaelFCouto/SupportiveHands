const { Router } = require('express');
const UserController = require('../apps/controllers/UserControllers');
const createUserSchema = require('../apps/validators/user-validators/createUserValidator');
const updateUserSchema = require('../apps/validators/user-validators/updateUserValidator');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');

const router = Router();

router.post('/users/create', ValidateMiddleware(createUserSchema), UserController.createUser);
router.put('/users/update', ValidateMiddleware(updateUserSchema), UserController.updateUser);
router.delete('/users/delete', UserController.deleteUser);
router.get('/users/:id', UserController.listUser);

module.exports = router;
