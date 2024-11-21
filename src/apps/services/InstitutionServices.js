const { where } = require('sequelize');
const Institution = require('../models/Instituition');

class InstitutionService{

    async getInsitution(id){
        const instituition = await Institution.findOne({
            where:{
                id:id,
            },
        });

        if(!instituition){
            throw new Error('Insitution Not Found');
        }

        return instituition;
    }

    async listAllInstitution() {

        const allInstitutions = await Institution.findAll({
            attributes: ['name', 'beneficiaries', 'vacancies']
        });

        if (!allInstitutions || allInstitutions.length === 0) {
            throw new Error('Instituições não encontradas');
        }

        return allInstitutions;
    }

    async createInsitution(data){

        const create = await Institution.create(data);
        if(!create){
            throw new Error('Failed in create Institution');
        }
    }

    async updateInstitution(data, id){

        const instituition = await this.getInsitution(id);

        const update = await Institution.update(data, { where: { id: id } });

        if(!update){
            throw new Error('Failed in updated Institution');
        }
    }

    async deleteInsitution(id){
        const instituition = await this.getInsitution(id);

        const deleted = await Institution.destroy({
            where:{
                id:id,
            }
        })

        if(!deleted){
            throw new Error('Failed in deleted Intitution');
        }
    }
}

module.exports = new InstitutionService();


