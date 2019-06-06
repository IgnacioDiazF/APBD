const oracledb = require("oracledb");
const database = require("../services/database.js");

const baseQuery = 
    `select idinvento "idinvento",
    idpatente "idpatente",
    idtipoinvento "idtipoinvento",
    nombreinvento "nombreinvento"
    from invento`;

async function find(context){
    let query = baseQuery;
    const binds = {};
    if(context.id){
        binds.idinvento = context.id;
        query+="\nwhere idinvento = :idinvento";
    }
    const result = await database.simpleExecute(query, binds);

    return result.rows;
}
module.exports.find = find;

const createSql =
    `insert into invento(
        idinvento,
        idpatente,
        idtipoinvento,
        nombreinvento
    ) values (
        :idinvento,
        :idpatente,
        :idtipoinvento,
        :nombreinvento
    ) returning idinvento
    into :idinvento`;

async function create(inv){
    const invento = Object.assign({}, inv);

    invento.idinvento = {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
    };

    const result = await database.simpleExecute(createSql, invento);

    invento.idinvento = result.outBinds.idinvento[0];

    return invento;
}

module.exports.create = create;

const updateSql = 
    `update invento
    set idinvento = :idinvento,
    idpatente = :idpatente,
    idtipoinvento = :idtipoinvento,
    nombreinvento = :nombreinvento`;

async function update(inv){
    const invento = Object.assign({}, inv);
    const result = await database.simpleExecute(updateSql, invento);

    if(result.rowsAffected && result.rowsAffected === 1){
        return invento;
    }else{
        return null;
    }
}

module.exports.update = update;

const deleteSql = 
    `begin
    delete from invento
    where idinvento = :idinvento;
    
    :rowcount := sql%rowcount;
    end;`;

async function del(id){
    const binds = {
        idinvento: id,
        rowcount: {
            dir: oracledb.BIND_OUT,
            type: oracledb.NUMBER
        }
    };
    const result = await database.simpleExecute(deleteSql, binds);

    return result.outBinds.rowcount === 1;
}

module.exports.delete = del;