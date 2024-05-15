const { where } = require('sequelize');
const DonationTypes = require('../models/DonationTypes');



class DonationTypesService{


    async verifyDonationTypes(id){
        const donationTypes = await DonationTypes.findOne({
            where:{
                id:id,
            },
        });

        if (!donationTypes) {
            throw new Error('DonationType Not Found');
        }

        return donationTypes;

    }

    async listAllDonationTypes(){
        const all = await DonationTypes.findAll({
            attributes:['id','name']
        });

        if(!all){
            throw new Error('DonationsTypes Not Found');
        }

        return all;
    }




    async createDonationTypes(data){
        const create = await DonationTypes.create(data);

        if(!create){
            throw new Error('Failed in create DonationType');
        }
    }


    async updateDonationType(data, id){

        const update = await DonationTypes.update(data, id);
            
        if(!update){
            throw new Error('Failed in updated DonationType');
        }

    }


    async deleteDonationType(id){

        const donationType = await this.verifyDonationTypes(id);


        const deleted = await DonationTypes.destroy({
            where:{
                id:id,
            },
        });

        if(!deleted){
            throw new Error('Failed in deleted DonationType');
        }

    }


        
    


}


module.exports = new DonationTypesService();
