const oracledb = require("oracledb");
const database = require("../services/database.js.js");
const baseQuery = `select idtipoinvento "idtipoinvento",
    nombretipoinvento "nombretipoinvento"
    from tipoinvento`;

async function find(context) {
  let query = baseQuery;
  const binds = {};
  if (context.id) {
    binds.idtipoinvento = context.id;
    query += "\nwhere idtipoinvento = :idtipoinvento";
  }
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql = `insert into tipoinvento(
        idtipoinvento,
        nombretipoinvento
    ) values (
        :idtipoinvento,
        :nombretipoinvento
    ) returning idtipoinvento
    into :idtipoinvento`;
async function create(tinv) {
  const tipoinvento = Object.assign({}, tinv);

  tipoinvento.idtipoinvento = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  };

  const result = await database.simpleExecute(createSql, tipoinvento);

  tipoinvento.idtipoinvento = result.outBinds.idtipoinvento[0];

  return tipoinvento;
}

module.exports.create = create;

const updateSql = `update tipoinvento
    set nombretipoinvento = :nombretipoinvento
    where idtipoinvento = :idtipoinvento`;

async function update(tinv) {
  const tipoinvento = Object.assign({}, tinv);
  const result = await database.simpleExecute(updateSql, tipoinvento);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return tipoinvento;
  } else {
    return null;
  }
}

module.exports.update = update;

const deleteSql = `begin
        delete from tipoinvento
        where idtipoinvento = :idtipoinvento;
        
        :rowcount := sql%rowcount;
    end;`;

async function del(id){
    const binds = {
        idtipoinvento: id,
        rowcount: {
            dir: oracledb.BIND_OUT,
            type: oracledb.NUMBER
        }
    };
    const result = await database.simpleExecute(deleteSql, binds);

    return result.outBinds.rowcount ===1;
}

module.exports.delete = del;