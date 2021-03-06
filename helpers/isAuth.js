const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    // if(process.env.NODE_ENV === 'production')
    if (!token) {
        res.status(500).send({msg: 'Auth token is not supplied'});
    } else {

        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            // console.log(token)
            token = token.slice(7, token.length);
        }

        // console.log(token)

        jwt.verify(token.replace('Bearer ', ''), 'secretkey', (err, decoded) => {
            if (err) {
                console.log(err)
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                return next();
            }
        });
    }
};
