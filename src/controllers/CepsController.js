const Ceps = require('../model/Ceps')

module.exports = {

    async index(req, res){
        const { 
            cep
        } = req.params

        const result =  await Ceps.findOne({where: {cep: cep}})
        if (result)
            return res.status(200).json(result)
        else
            return res.status(400).json({message: "Nenhum cadastro para cep informado"})
    },

    async store(req, res){
        const { 
            cep, 
            logradouro,
            complemento,
            bairro,
            localidade,
            uf,
        } = req.body 

        await Ceps.create({ 
            cep, 
            logradouro,
            complemento,
            bairro,
            localidade,
            uf
        })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


