const{Router} = require('express');

const AuthMiddleware = require('./apps/middlewares/authentication');
const ValidateMiddleware = require('./apps/middlewares/validate-middleware');

const AuthController = require('./apps/controllers/AuthControllers');
const AuthValidator = require('./apps/validators/authValidator');

const UserController = require('./apps/controllers/UserControllers');
const UserValidator = require('./apps/validators/user-validators/userValidator');

const DonationTypesController = require('./apps/controllers/DonationTypesControllers');
const DonationTypesValidator = require('./apps/validators/donnation-type-validators/donnationTypeValidator');

const InstitutionController = require('./apps/controllers/InstitutionControllers');
const InstitutionValidator = require('./apps/validators/institution-validators/institutionValidator');

const NeedsController = require('./apps/controllers/NeedsControllers');
const NeedsValidator = require('./apps/validators/needs-validators/needsValidator');

const database = require('./database/index');


const routes = new Router();
//Health
routes.get('/health', (req,res)=>{
    try{
        return res.send({message:'Connected with success!'});
    }
    catch (error) {
        res.status(500).json({ status: 'ERROR', message: 'App connection failed', error: error.message });
      }
});

routes.get('/health-db', async (req, res) => {
    try {
      const sequelize = database.getConnection();
      await sequelize.authenticate();
      res.status(200).json({ status: 'OK', message: 'Database connection is healthy!' });
    } catch (error) {
      res.status(500).json({ status: 'ERROR', message: 'Database connection failed', error: error.message });
    }
});

//Routes for Register and login, don't require auth
routes.post('/users/create', ValidateMiddleware(UserValidator.createUser()), UserController.createUser);
routes.post('/auth', ValidateMiddleware(AuthValidator), AuthController.authenticate);
//Middleware for Auth, all routes bellow this Middleware require JWT auth
routes.use(AuthMiddleware);

//Routes for Users
routes.put('/users/update', ValidateMiddleware(UserValidator.updateUserSchema()), UserController.updateUser);
routes.delete('/users/delete', UserController.deleteUser);
routes.get('/users',ValidateMiddleware(UserValidator.getUserSchema()), UserController.listUser);

//Routes for Donations Type
routes.post('/donationTypes/create', ValidateMiddleware(DonationTypesValidator.createDonnationTypeSchema()), DonationTypesController.createDonationType);
routes.put('/donationTypes/update/:id', ValidateMiddleware(DonationTypesValidator.updateDonnationTypeSchema()), DonationTypesController.updateDonationType);
routes.get('/donationTypes/listAll', DonationTypesController.listAllDonationTypes);
routes.get('/donationTypes/:id', ValidateMiddleware(DonationTypesValidator.getDonnationTypeSchema()), DonationTypesController.listDonationTypesById);
routes.delete('/donationTypes/delete/:id', DonationTypesController.deleteDonationTypes);

//Routes for institutions
routes.post('/institutions/create', ValidateMiddleware(InstitutionValidator.createInstitutionSchema()), InstitutionController.createInstitution);
routes.put('/institutions/update/:id', ValidateMiddleware(InstitutionValidator.updateInstitutionSchema()), InstitutionController.updateInsitution);
routes.get('/institutions/:id', InstitutionController.listInstitutionById);
routes.get('/getAllInstitutions', InstitutionController.listAllInstitutions);
routes.delete('/institutions/delete/:id', InstitutionController.deleteInstitution);

//Routes for needs
routes.post('/needs/create', ValidateMiddleware(NeedsValidator.createNeedsSchema()), NeedsController.createNeeds);
routes.put('/needs/update/:id', ValidateMiddleware(NeedsValidator.createNeedsSchema()), NeedsController.updateNeed);
routes.get('/needs/:id', ValidateMiddleware(NeedsValidator.getNeedsSchema()), NeedsController.listNeedById);
routes.get('/getAllNeeds', NeedsController.listAllNeeds);
routes.delete('/needs/delete/:id', NeedsController.deleteNeeds);

module.exports = routes;