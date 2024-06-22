const sequelize = require('sequelize');
const models = require('../apps/models/Users'); // O caminho para seus modelos

sequelize.sync({ force: true })  // CUIDADO: `force: true` irá descartar tabelas existentes
  .then(() => {
    console.log('Banco de dados e tabelas criados!');
  })
  .catch((error) => {
    console.error('Erro durante a sincronização com o banco de dados:', error);
  });