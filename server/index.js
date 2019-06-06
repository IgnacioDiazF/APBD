const webServer = require("./services/web-server.js");
const database = require('./services/database.js');
const dbConfig = require('./config/database.js');
const defaultThreadPoolSize = 4;

process.env.UV_THREADPOOL_SIZE = dbConfig.hrPool.poolMax + defaultThreadPoolSize;

async function startup() {
  console.log("Iniciando aplicacion");
  try{
      console.log('Iniciando modulo de base de datos');
      await database.initialize();
  }catch(err){
      console.error(err);
      process.exit(1);
  }
  try {
    console.log("Iniciando modulo web");
    await webServer.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}
async function shutdown(e){
    let err = e;

    console.log('Apagando..');
    try{
        console.log('Modulo web cerrado');
        await webServer.close();
    }catch(e){
        console.log('Error encontrado en ',e);
        err = err || e;
    }
    try{
        console.log('Cerrando modulo de base de datos');
        await database.close();
    }catch(err){
        console.log('Error encontrado ',e);

        err = err | e;
    }
    console.log('Proceso cerrado');
    if(err){
        process.exit(1);
    }else{
        process.exit(0);
    }
}
process.on('SIGTERM', () => {
    console.log('SIGTERM recibido');
    shutdown();
});
process.on('SIGINT', () =>{
    console.log('SIGINT recibido');
    shutdown();
});

process.on('uncaughtException', err =>{
    console.log('Uncaught exception');
    console.error(err);
    shutdown(err);
});

startup();
