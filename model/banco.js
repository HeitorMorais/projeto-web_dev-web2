const Sequelize = require("sequelize")
const sequelize = new Sequelize("projetoweb", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function () {
    console.log("conectado")
}).catch(function (erro) {
    console.log("falha ao conectar" + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


const Agendamentos = sequelize.define("agendamentos", {
    nome: { type: Sequelize.STRING },
    endereco: { type: Sequelize.STRING }, 
    bairro: { type: Sequelize.STRING },
    cep: { type: Sequelize.INTEGER } 
})

//Agendamentos.sync({ force: true })