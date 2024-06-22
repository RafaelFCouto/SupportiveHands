const{Router} = require('express');

const AuthMiddleware = require('./apps/middlewares/authentication');

const UserController = require('./apps/controllers/UserControllers');
const AuthController = require('./apps/controllers/AuthControllers');
const DonationTypesController = require('./apps/controllers/DonationTypesControllers');
const InstitutionController = require('./apps/controllers/InstitutionControllers');
const NeedsController = require('./apps/controllers/NeedsControllers');


const routes = new Router();

routes.post('/users/create', UserController.createUser);
routes.post('/auth', AuthController.authenticate);


routes.use(AuthMiddleware);



routes.put('/users/update', UserController.updateUser);
routes.delete('/users/delete', UserController.deleteUser);
routes.get('/users', UserController.listUser);


routes.post('/donationTypes/create', DonationTypesController.createDonationType);
routes.put('/donationTypes/update/:id', DonationTypesController.updateDonationType);
routes.get('/donationTypes/listAll', DonationTypesController.listAllDonationTypes);
routes.get('/donationTypes/:id', DonationTypesController.listDonationTypesById);
routes.delete('/donationTypes/delete/:id', DonationTypesController.deleteDonationTypes);



routes.get('/institutions/:id', InstitutionController.listInstitutionById);
routes.get('/getAllInstitutions', InstitutionController.listAllInstitutions);
routes.post('/institutions/create', InstitutionController.createInstitution);
routes.put('/institutions/update/:id', InstitutionController.updateInsitution);
routes.delete('/institutions/delete/:id', InstitutionController.deleteInstitution);


routes.get('/needs/:id', NeedsController.listNeedById);
routes.get('/getAllNeeds', NeedsController.listAllNeeds);
routes.post('/needs/create', NeedsController.createNeeds);
routes.put('/needs/update/:id', NeedsController.updateNeed);
routes.delete('/needs/delete/:id', NeedsController.deleteNeeds);


routes.get('/health', (req,res)=>{
    return res.send({message:'Connected with success!'});
});



module.exports = routes;