const { Router } = require('express');
const ValidateMiddleware = require('../apps/middlewares/validate-middleware');
const createDonnationTypeSchema = require('../apps/validators/donnation-type-validators/createDonnationTypeValidator');
const updateDonnationTypechema = require('../apps/validators/donnation-type-validators/updateDonnationTypeValidator');
const AuthMiddleware = require('../apps/middlewares/authentication');

const router = Router();

router.use(AuthMiddleware);

routes.get('/donationTypes/:id', DonationTypesController.listDonationTypesById);
routes.get('/donationTypes/listAll', DonationTypesController.listAllDonationTypes);
routes.post('/donationTypes/create', ValidateMiddleware(createDonnationTypeSchema), DonationTypesController.createDonationType);
routes.put('/donationTypes/update/:id', ValidateMiddleware(updateDonnationTypechema), DonationTypesController.updateDonationType);
routes.delete('/donationTypes/delete/:id', DonationTypesController.deleteDonationTypes);
module.exports = router;