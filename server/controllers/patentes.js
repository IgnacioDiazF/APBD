const patentes = require('../db_apis/patentes.js.js');

function getPatenteFromRec(req){
    const patente = {
        cantidadVendida: req.body.cantidadvendida,
        precioInicial: req.body.precioinicial
    };

    return patente;
}


async function get(req, res, next){
    try{
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await patentes.find(context);
        if(req.params.id){
            if(rows.length === 1){
                res.status(200).json(rows[0]);
            }else{
                res.status(404)
                .json({mensaje: 'La patente no existe'})
                .end();
            }
        }else{
            res.status(200).json(rows);
        }
    }catch(err){
        next(err);
    }
}

async function post(req ,res ,next){
    try{
        let patente = getPatenteFromRec(req);
        patente = await patentes.create(patente);

        res.status(201).json(patente);
    }catch(err){
        next(err);
    }
}

async function put(req, res, next){
    try{
        let patente = getPatenteFromRec(req);
        patente.idpatente = parseInt(req.params.id, 10);

        patente = await patentes.update(patente);
        res.json({mensaje: 'Patente '+ req.params.id + ' actualizada'});
        if(patente !== null){
            res.status(200).json(patente);
        }else{
            res.status(400).end();
        }
    }catch(err){
        next(err);
    }
}

async function del(req, res, next){
    try{
        const id = parseInt(req.params.id, 10);
        const success = await patentes.delete(id);
        res.json({mensaje: 'Patente '+ req.params.id + ' eliminada'});
        if(success){
            res.status(204).end;
        }else{
            res.status(404).end;
        }
    }catch(err){
        next(err);
    }
}
module.exports.get = get;
module.exports.delete = del;
module.exports.put = put;
module.exports.post = post;