const {Schema, model}= require('mongoose')

const RolesShema = Schema({
    idrol:{
        type: Number
    },
    Rol:{
        type: String
    },
    Fecha:{
        type: String
    }
})

module.exports = model('Roles', RolesShema)