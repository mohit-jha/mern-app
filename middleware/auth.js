const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' })
    try {

        const decode = jwt.verify(token, config.get('jwtSecret'));
        res.user = decode;
        next();

    }
    catch (error) {
        res.status(400).json({ msg: "Token is not valid" });
    }
}
module.exports = auth;