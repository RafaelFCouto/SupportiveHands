const { Router } = require('express');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const createDonnationTypeSchema = require('../apps/validators/donnation-type-validators/createDonnationTypeValidator');
const updateDonnationTypechema = require('../apps/validators/donnation-type-validators/updateDonnationTypeValidator');
const AuthMiddleware = require('../apps/middlewares/authentication');

const router = Router();

router.use(AuthMiddleware);

router.get('/:id', DonationTypesController.listDonationTypesById);
router.get('/listAll', DonationTypesController.listAllDonationTypes);
router.post('/create', ValidateMiddleware(createDonnationTypeSchema), DonationTypesController.createDonationType);
router.put('/update/:id', ValidateMiddleware(updateDonnationTypechema), DonationTypesController.updateDonationType);
router.delete('/delete/:id', DonationTypesController.deleteDonationTypes);

module.exports = router;