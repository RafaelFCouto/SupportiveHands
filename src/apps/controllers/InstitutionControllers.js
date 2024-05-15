const InstitutionService = require('../services/InstitutionServices');


class InstitutionController{

    async createInstitution(req,res){

        try {

            const create = await InstitutionService.createInsitution(req.body);
            
            res.status(200).json({ message: 'Insitution Created'});

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }


    async updateInsitution(req,res){

        try {

            const id = req.params.id;

            
            const update = await InstitutionService.updateInstitution(req.body, id);
            
            res.status(200).json({message: 'Institution Type updated'});

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }

    async listAllInstitutions(req, res) {
        try {
            
            const allInstitutions = await InstitutionService.listAllInstitution();
            res.status(200).json({ institutions: allInstitutions });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    


    async listInstitutionById(req,res){
        try {

            const id = req.params.id;
            const institution = await InstitutionService.getInsitution(id); 
            res.status(200).json({ institution: institution});

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }


    async deleteInstitution(req, res){

        try {

            const id = req.params.id;
            const deleted = await InstitutionService.deleteInsitution(id);

            res.status(200).json({ message:'Institution Type Deleted'});

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }
}

module.exports = new InstitutionController();