const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtToken = process.env.jwtToken;

exports.getToken = (req, res) => {
    const { id, name } = req.query;
    const token = jwt.sign({ id, name }, jwtToken);
    res.json({ token });
};
 
