const { where, Model } = require('sequelize');
const Needs = require('../models/Needs');
const Institution = require('../models/instituition');
const DonationsTypes = require('../models/DonationTypes');


class NeedsServices{

    async getNeeds(id){
        const needs = await Needs.findOne({
            attributes: ['id', 'name', 'quantity'],
            where: {
                id: id
            },
            include: [
                {
                    model: Institution,
                    as: 'institution',
                    required: true,
                    attributes: ['cnpj', 'name']
                },
                {
                    model:DonationsTypes,  
                    as: 'donationType',  
                    required: true,
                    attributes: ['name']
                }
            ]
        });
    
        if (!needs) {
            throw new Error('Needs Not Found');
        }
    
        return needs;
    }


    async getAllNeeds(){

        const allNeeds = await Needs.findOne({
            attributes:['id', 'name', 'quantity'],
            include: [
                {
                    model: Institution,
                    as: 'institution',
                    required: true,
                    attributes: ['cnpj', 'name']
                },
                {
                    model: DonationsTypes,  // Certifique-se de que o nome do modelo está correto
                    as: 'donationType',  // Verifique a consistência com a definição da associação
                    required: true,
                    attributes: ['name']
                }
            ]
        });

        if (!allNeeds) {
            throw new Error('Needs Not Found');
        }

        return allNeeds;



    }


    async createNeeds(data){
        const create = await Needs.create(data);

        if(!create){
            throw new Error('Failed in create needs');
        }
    }


    async updateNeeds(data, id){
        console.log(id);
        const need = await Needs.findOne({
            where:{
                id:id,
            }
        })

        if(!need){
            throw new Error('Need Not Found');
        }

        const update = await Needs.update(data,{ where: { id: id } });
        if(!update){
            throw new Error('Failed in updated Needs');
        }
    }


    async deleteNeeds(id){
        const need = await Needs.findOne({
            where:{
                id:id,
            }
        });

        const deleted = await Needs.destroy({
            where:{
                id:id,
            }
        })

        
        if(!deleted){
            throw new Error('Failed in deleted Needs');
        }


    }





}


module.exports = new NeedsServices();