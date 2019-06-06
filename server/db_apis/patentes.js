const oracledb = require("oracledb");
const database = require("../services/database.js.js");
const baseQuery = `select idPatente "idPatente",
    cantidadvendida "cantidadvendida",
    precioinicial "precioinicial"
    from patente`;
async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.idpatente = context.id;

    query += `\nwhere idpatente = :idpatente`;
  }
  const result = await database.simpleExecute(query, binds);

  return result.rows;
}
module.exports.find = find;

const createSql = `insert into patente(
        idPatente,
        cantidadVendida,
        precioInicial
    ) values (
        :idpatente, 
        :cantidadvendida, 
        :precioinicial) returning idpatente
        into :idpatente`;
async function create(pat) {
  const patente = Object.assign({}, pat);

  patente.idpatente = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  };

  const result = await database.simpleExecute(createSql, patente);

  patente.idpatente = result.outBinds.idpatente[0];

  return patente;
}

module.exports.create = create;

const updateSql = `update patente
    set cantidadvendida = :cantidadvendida,
    precioinicial = :precioinicial
    where idpatente = :idpatente`;

async function update(pat) {
  const patente = Object.assign({}, pat);
  const result = await database.simpleExecute(updateSql, patente);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return patente;
  } else {
    return null;
  }
}
module.exports.update = update;

const deleteSql = `begin
        delete from patente
        where idpatente = :idpatente;
        :rowcount := sql%rowcount;
        
    end;    `;

async function del(id) {
  const binds = {
    idpatente: id,
    rowcount: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  };
  const result = await database.simpleExecute(deleteSql, binds);
  return result.outBinds.rowcount === 1;
}
module.exports.delete = del;
