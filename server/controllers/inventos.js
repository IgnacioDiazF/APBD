const inventos = require('../db_apis/inventos.js');

function getInventosFromRec(req){
    const invento = {
        idpatente: req.body.idpatente,
        idtipoinvento: req.body.idtipoinvento,
        nombreinvento: req.body.nombreinvento
    };
    return invento;
}

async function get(req, res, next){
    try{
        const context = {};
        context.id = parseInt(req.params.id, 10);
        const rows = await inventos.find(context);
        if(req.params.id){
            if(rows.length === 1){
                res.status(200).json(rows[0]);
            }else{
                res.status(404)
                .json({mensaje: 'El invento no existe'})
                .end();
            }
        }else{
            res.status(200).json(rows);
        }
    }catch(err){
        next(err);
    }
}

async function post(req, res, next){
    try{
        let invento = getInventosFromRec(req);
        invento = await inventos.create(invento);
        res.status(201).json(invento);
    }catch(err){
        next(err);
    }
}

async function put(req, res, next){
    try{
        let invento = getInventosFromRec(req);
        invento.idinvento = parseInt(req.params.id, 10);
        invento = await inventos.update(invento);
        res.json({mensaje: `Invento n° ${req.params.id} actualizado`});
        if(invento !== null){
            res.status(200).json(invento);
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
        const success = await inventos.delete(id);
        res.json({mensaje: `Invento n° ${req.params.id} eliminado`});
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