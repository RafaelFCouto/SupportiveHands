const{Router} = require('express');

const AuthMiddleware = require('./apps/middlewares/authentication');
const UserController = require('./apps/controllers/UserControllers');
const AuthController = require('./apps/controllers/AuthControllers');
const DonationTypesController = require('./apps/controllers/DonationTypesControllers');
const InstitutionController = require('./apps/controllers/InstitutionControllers');
const NeedsController = require('./apps/controllers/NeedsControllers');
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
routes.post('/users/create', UserController.createUser);
routes.post('/auth', AuthController.authenticate);
//Middleware for Auth, all routes bellow this Middleware require JWT auth
routes.use(AuthMiddleware);

//Routes for Users
routes.put('/users/update', UserController.updateUser);
routes.delete('/users/delete', UserController.deleteUser);
routes.get('/users', UserController.listUser);

//Routes for Donations Type
routes.post('/donationTypes/create', DonationTypesController.createDonationType);
routes.put('/donationTypes/update/:id', DonationTypesController.updateDonationType);
routes.get('/donationTypes/listAll', DonationTypesController.listAllDonationTypes);
routes.get('/donationTypes/:id', DonationTypesController.listDonationTypesById);
routes.delete('/donationTypes/delete/:id', DonationTypesController.deleteDonationTypes);

//Routes for institutions
routes.get('/institutions/:id', InstitutionController.listInstitutionById);
routes.get('/getAllInstitutions', InstitutionController.listAllInstitutions);
routes.post('/institutions/create', InstitutionController.createInstitution);
routes.put('/institutions/update/:id', InstitutionController.updateInsitution);
routes.delete('/institutions/delete/:id', InstitutionController.deleteInstitution);

//Routes for needs
routes.get('/needs/:id', NeedsController.listNeedById);
routes.get('/getAllNeeds', NeedsController.listAllNeeds);
routes.post('/needs/create', NeedsController.createNeeds);
routes.put('/needs/update/:id', NeedsController.updateNeed);
routes.delete('/needs/delete/:id', NeedsController.deleteNeeds);

module.exports = routes;