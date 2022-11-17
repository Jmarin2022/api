const express = require("express")
const cors = require('cors')
const dbConnection = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.port
        this.rolesPath = "/api/roles"
        //
        this.middlewares()
        this.routes()
        this.dbconectar()
    }
    async dbconectar(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.rolesPath, require("../routes/roles"))
        //
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando desde http://localhost:${this.port}`)
        })
    }
}

module.exports = Server