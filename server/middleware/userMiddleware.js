const jwt = require('jsonwebtoken');
const verifyToken = function(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== undefined){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) =>{
            if(err){
                res.sendStatus(403); //403 is forbidden
            }
            else{
                req.user = authData
                next();
            }
        })       
    }
    else{
        res.sendStatus(403);
    }
}

module.exports = verifyToken;