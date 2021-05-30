'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Ceps', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            cep: Sequelize.STRING,
            logradouro: Sequelize.STRING,
            complemento: Sequelize.STRING,
            bairro: Sequelize.STRING,
            localidade: Sequelize.STRING,
            uf: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Ceps')
      }
};
