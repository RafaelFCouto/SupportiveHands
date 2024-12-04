const { Router } = require('express');
const database = require('./database/index');

const router = Router();

router.get('/health', (req,res)=>{
    try{
        return res.send({message:'Connected with success!'});
    }
    catch (error) {
        res.status(500).json({ status: 'ERROR', message: 'App connection failed', error: error.message });
      }
});

router.get('/health-db', async (req, res) => {
    try {
      const sequelize = database.getConnection();
      await sequelize.authenticate();
      res.status(200).json({ status: 'OK', message: 'Database connection is healthy!' });
    } catch (error) {
      res.status(500).json({ status: 'ERROR', message: 'Database connection failed', error: error.message });
    }
});

module.exports = router;