const { Router } = require('express');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const createInstitutionSchema = require('../apps/validators//institution-validators/createInstitutionValidator');
const updateInstitutionSchema = require('../apps/validators/institution-validators/updateInsititutionValidator');
const AuthMiddleware = require('../apps/middlewares/authentication');

const router = Router();

router.use(AuthMiddleware);

router.get('/:id', InstitutionController.listInstitutionById);
router.get('/getAllInstitutions', InstitutionController.listAllInstitutions);
router.post('/create', ValidateMiddleware(createInstitutionSchema), InstitutionController.createInstitution);
router.put('/update/:id', ValidateMiddleware(updateInstitutionSchema), InstitutionController.updateInsitution);
router.delete('/delete/:id', InstitutionController.deleteInstitution);

module.exports = router;