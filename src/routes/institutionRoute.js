const { Router } = require('express');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const createInstitutionSchema = require('../apps/validators/needs-validators/createNeedsValidator');
const updateInstitutionSchema = require('../apps/validators/needs-validators/updateNeedsValidator');
const AuthMiddleware = require('../apps/middlewares/authentication');

const router = Router();

router.use(AuthMiddleware);

routes.get('/institutions/:id', InstitutionController.listInstitutionById);
routes.get('/getAllInstitutions', InstitutionController.listAllInstitutions);
routes.post('/institutions/create', ValidateMiddleware(createInstitutionSchema), InstitutionController.createInstitution);
routes.put('/institutions/update/:id', ValidateMiddleware(updateInstitutionSchema), InstitutionController.updateInsitution);
routes.delete('/institutions/delete/:id', InstitutionController.deleteInstitution);

module.exports = router;