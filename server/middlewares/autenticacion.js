const jwt = require('jsonwebtoken')

//==============
//Verificar token
//==============

let verificaToken = (req, res, next) => {

    let token = req.get('token')
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }
        req.usuario = decoded.usuario
        next()
    })
}

//==============
//Verificar Admin rol
//==============
let verificaAdminRol = (req, res, next) => {

    let usuario = req.usuario

    if (usuario.role === 'ADMIN_ROLE') {
        next()
    } else {
        res.json({
            ok: false,
            error: {
                message: 'El usuario no es administrador'
            }
        })
    }
}


module.exports = {
    verificaToken,
    verificaAdminRol
}