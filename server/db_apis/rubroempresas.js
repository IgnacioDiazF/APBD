const oracledb = require("oracledb");
const database = require("../services/database.js");


const baseQuery = 
    `select idrubroempresa "idrubroempresa",
    nombrerubroempresa "nombrerubroempresa"
    from rubroempresa`;

async function find(context){
    let query = baseQuery;
    const binds = {};

    if(context.id){
        binds.idrubroempresa = context.id;
        query += `\nwhere idrubroempresa = :idrubroempresa`;
    }
    const result = await database.simpleExecute(query, binds);

    return result.rows;
}
module.exports.find = find;


const createSql = 
    `insert into rubroempresa(
        idrubroempresa,
        nombrerubroempresa
    ) values (
        :idrubroempresa,
        :nombrerubroempresa) returning idrubroempresa
        into :idrubroempresa`;

async function create(rub){
    const rubroempresa = Object.assign({}, rub);

    rubroempresa.idrubroempresa = {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
    };

    const result = await database.simpleExecute(createSql, rubroempresa);

    rubroempresa.idrubroempresa = result.outBinds.idrubroempresa[0];

    return rubroempresa;
}

module.exports.create = create;

const updateSql = 
    `update rubroempresa
    set nombrerubroempresa = :nombrerubroempresa
    where idrubroempresa = :idrubroempresa`;

async function update(rub){
    const rubroempresa = Object.assign({}, rub);
    const result = await database.simpleExecute(updateSql, rubroempresa);

    if(result.rowsAffected && result.rowsAffected === 1){
        return rubroempresa;
    }else{
        return null;
    }
}

module.exports.update = update;

const deleteSql = 
    `begin
    delete from rubroempresa
    where idrubroempresa = :idrubroempresa;
    :rowcount := sql%rowcount;
    end;`;

async function del(id){
    const binds = {
        idrubroempresa: id,
        rowcount: {
            dir: oracledb.BIND_OUT,
            type: oracledb.NUMBER
        }
    };

    const result = await database.simpleExecute(deleteSql, binds);
    return result.outBinds.rowcount === 1;
}
module.exports.delete = del;