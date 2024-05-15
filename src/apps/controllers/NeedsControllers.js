const NeedsServices = require('../services/NeedsServices');



class NeedsController{


    async createNeeds(req,res){

        try {


            const create = await NeedsServices.createNeeds(req.body);
            
            res.status(200).json({ message: 'Needs Created'});

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }

    async listAllNeeds(req, res) {
        try {
            
            const allNeeds = await NeedsServices.getAllNeeds();
            res.status(200).json({ Needs: allNeeds });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async listNeedById(req, res) {
        try {
            const id = req.params.id;
            const need = await NeedsServices.getNeeds(id);
            res.status(200).json({ Needs: need });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }


    async updateNeed(req,res){

        try {

            const id = req.params.id;

            const update = await NeedsServices.updateNeeds(req.body , id);
            
            res.status(200).json({message: 'Needs updated'});

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }


    async deleteNeeds(req, res){

        try {

            const id = req.params.id;
            const deleted = await NeedsServices.deleteNeeds(id);

            res.status(200).json({ message:'Need Deleted'});

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }

    










}

module.exports= new NeedsController()