
// import
const jwt = require('jsonwebtoken');

module.exports = {
 
    authenticate
}


const secret =  process.env.JWT_SECRET || 


function authenticate(req, res, next){

    const token = req.get('auth');


    
    if(token){
    
        jwt.verify(token, secret, (err, decoded) => {
    
            if(err) return res.status(401).json(err);


            
            
            req.decoded = decoded;


            
            next();
        });

    } else {
        return res.status(401).json({
    
            error: 'token error'
    
        })
    }
}