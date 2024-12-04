
const { Router } = require('express');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const createNeedsSchema = require('../apps/validators/needs-validators/createNeedsValidator');
const updateNeedsSchema = require('../apps/validators/needs-validators/updateNeedsValidator');
const AuthMiddleware = require('../apps/middlewares/authentication');

const router = Router();

router.use(AuthMiddleware);

routes.get('/needs/:id', NeedsController.listNeedById);
routes.get('/getAllNeeds', NeedsController.listAllNeeds);
routes.post('/needs/create', ValidateMiddleware(createNeedsSchema), NeedsController.createNeeds);
routes.put('/needs/update/:id', ValidateMiddleware(updateNeedsSchema), NeedsController.updateNeed);
routes.delete('/needs/delete/:id', NeedsController.deleteNeeds);

module.exports = router;