const jwt = require('jsonwebtoken');

//=========================
// Verificacion de Token
//=========================

let verificarToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEMILLA, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'El token es invalido o expiro'
                }
            })
        }
        req.usuario = decoded.usuario;

    });
    next();
}

//=========================
// Verificacion de Token
//=========================
let verificarUser_Role = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Usted no es un administrador'
            }
        })
    }



}
module.exports = {
    verificarToken,
    verificarUser_Role
}