const{Router} = require('express');

const userRoutes = require('./userRoute');
const authRoutes = require('./authRoute');
const donationTypeRoutes = require('./donationTypeRoutee');
const institutionRoutes = require('./institutionRoute');
const needsRoutes = require('./needsRoute');
const healthRoutes = require('./healthRoute');

const routes = new Router();

routes.use('/health', healthRoutes);

routes.use('/auth', authRoutes);

routes.use('/users', userRoutes);

routes.use('/donationTypes', donationTypeRoutes);

routes.use('/institutions', institutionRoutes);

routes.use('/needs', needsRoutes);

module.exports = routes;