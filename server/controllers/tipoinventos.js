const tipoinventos = require('../db_apis/tipoinventos.js');

function getTipoInventosFromRec(req){
    const tipoinvento = {
        nombretipoinvento: req.body.nombretipoinvento
    };
    return tipoinvento;
}

async function get(req, res, next){
    try{
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await tipoinventos.find(context);
        if(req.params.id){
            if(rows.length === 1){
                res.status(200).json(rows[0]);
            }else{
                res.status(404)
                .json({mensaje: 'El tipo de invento no existe'})
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
        let tipoinvento = getTipoInventosFromRec(req);
        tipoinvento = await tipoinventos.create(tipoinvento);
        res.status(201).json(tipoinvento);
    }catch(err){
        next(err);
    }
}

async function put(req, res, next){
    try{
        let tipoinvento = getTipoInventosFromRec(req);
        tipoinvento.idtipoinvento = parseInt(req.params.id, 10);

        tipoinvento = await tipoinventos.update(tipoinvento);
        res.json({mensaje: 'Tipo de Invento n° '+ req.params.id+ ' actualizado'});
        if(tipoinvento !== null){
            res.status(200).json(tipoinvento);
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
        const success = await tipoinventos.delete(id);
        res.json({mensaje: 'Tipo de Invento n° '+ req.params.id + ' eliminado'});
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
