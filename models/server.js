const express = require('express')
const dbConnect = require('../database/config')
require('../database/config')
const {getProv, putProv, deleteProv, postProv} = require('../controller/provController')
class Server{
    constructor(){
        this.app = express()
        this.dbConnection()
        this.pathExport = '/build'
        this.route()
        this.listen()
    }
    async dbConnection(){
        await dbConnect();
    }

        route(){
            this.app.use(express.json());
            this.app.get(this.pathExport, getProv)
            this.app.post(this.pathExport, postProv)
            this.app.put(this.pathExport, putProv)
            this.app.delete(this.pathExport+'/:id', deleteProv)

    }


    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running');
        })
    }}

module.exports = Server 
