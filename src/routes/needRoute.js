
const { Router } = require('express');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const createNeedsSchema = require('../apps/validators-validators/createNeedsValidator');
const updateNeedsSchema = require('../apps/validators-validators/updateNeedsValidator');
const AuthMiddleware = require('../apps/middlewares/authentication');

const router = Router();

router.use(AuthMiddleware);

router.get('/:id', NeedsController.listNeedById);
router.get('/getAllNeeds', NeedsController.listAllNeeds);
router.post('/create', ValidateMiddleware(createNeedsSchema), NeedsController.createNeeds);
router.put('/update/:id', ValidateMiddleware(updateNeedsSchema), NeedsController.updateNeed);
router.delete('/delete/:id', NeedsController.deleteNeeds);

module.exports = router;