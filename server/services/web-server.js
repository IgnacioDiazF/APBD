const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const webServerConfig = require('../config/web-server.js');
const database = require('./database.js');
const router = require('./router.js');
let httpServer;

function initialize(){
    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);
        app.use(morgan('dev'));
        app.use(cors());
        app.use(express.json({
            reviver: reviveJson
        }));
        app.use('/api', router);
        app.get('/', async (req,res) => {
            const result = await database.simpleExecute('select user, systimestamp from dual');
            const user = result.rows[0].USER;
            const date = result.rows[0].SYSTIMESTAMP;
            res.end(`DB user: ${user}\nDate:${date}`);
        });

        httpServer.listen(webServerConfig.port)
        .on('listening', ()=> {
            console.log(`Servidor web conectado a localhost:${webServerConfig.port}`);

            resolve();
        }).on('error', err =>{
            reject(err);
        });
    });
}
function close(){
    return new Promise((resolve, reject) => {
        httpServer.close((err) => {
            if(err){
                reject(err);
                return;
            }
            resolve();
        });
    });
}

const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function reviveJson(key, value){
    if(typeof value === 'string' && iso8601RegExp.test(value)){
        return new Date(value);
    }else{
        return value;
    }
}

module.exports.initialize = initialize;
module.exports.close = close;
