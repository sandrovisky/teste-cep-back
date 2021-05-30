const { Model, DataTypes } = require('sequelize')

class Ceps extends Model {
    static init (sequelize) {
        super.init({
            cep: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            localidade: DataTypes.STRING,
            uf: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "Ceps"
        })
    }
} 

module.exports = Ceps