const jwt = require('jsonwebtoken')

//secret key
const secretKey = process.env.SECRET_KEY;

module.exports.auth = (req, res, next) => {
    try {
        // get token from request headers
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretKey);
        console.log(decoded)
        req.id = decoded.employeeID;
        next()
    }
    catch (error) {
        return res.status(401).json({ message: 'auth failed' })
    }

}



