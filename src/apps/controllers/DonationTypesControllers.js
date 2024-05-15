const DonationTypesService = require('../services/DonationTypesServices');


class DonationTypesController{

    async createDonationType(req,res){
        try {

            const create = await DonationTypesService.createDonationTypes(req.body);
            
            res.status(200).json({ message: 'Donation Type Created'});

        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }


    async updateDonationType(req,res){
        try {

            const id = req.params.id;
            const update = await DonationTypesService.updateDonationType(req.body, id);
            
            res.status(200).json({message: 'Donation Type updated'});

        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async listAllDonationTypes(req,res){


        try {

            const allDonationTypes = await DonationTypesService.listAllDonationTypes();
            
            res.status(200).json({donationTypes: allDonationTypes});

        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
        

    }


    async listDonationTypesById(req, res){
        try {

            const id = req.params.id;
            const donationType = await DonationTypesService.verifyDonationTypes(id);
            
            res.status(200).json({ donationType: donationType});

        } catch (error) {
            return res.status(401).json({ error: error.message });
        }

    }

    async deleteDonationTypes(req, res){
        try {

            const id = req.params.id;
       

            const donationType = await DonationTypesService.deleteDonationType(id);
            
            res.status(200).json({ message:'Donation Type Deleted'});

        } catch (error) {
            return res.status(401).json({error: error.message });
        }

    }

}

module.exports = new DonationTypesController();



