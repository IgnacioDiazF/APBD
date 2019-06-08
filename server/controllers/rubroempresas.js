const rubroempresas = require('../db_apis/rubroempresas.js');

function getRubroempresaFromRec(req){
    const rubroempresa = {
        nombrerubroempresa: req.body.nombrerubroempresa
    };

    return rubroempresa;
}

async function get(req, res, next){
    try{
        const context = {};
        context.id = parseInt(req.params.id, 10);

        const rows = await rubroempresas.find(context);

        if(req.params.id){
            if(rows.length === 1){
                res.status(200).json(rows[0]);
            }else{
                res.status(404)
                .json({mensaje: 'El rubro de la empresa no existe'})
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
        let rubroempresa = getRubroempresaFromRec(req);
        rubroempresa = await rubroempresas.create(rubroempresa);
        res.status(201).json(rubroempresa);
    }catch(err){
        next(err);
    }
}

async function put(req, res, next){
    try{
        let rubroempresa = getRubroempresaFromRec(req);

        rubroempresa.idrubroempresa = parseInt(req.params.id, 10);

        rubroempresa = await rubroempresas.update(rubroempresa);
        res.json({mensaje: 'Rubro de empresa n° ' + req.params.id + ' actualizado'});
        if(rubroempresa !== null){
            res.status(200).json(rubroempresa);
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
        const success = await rubroempresas.delete(id);
        res.json({mensaje: `Rubro de empresa n° ${req.params.id} eliminado`});
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
