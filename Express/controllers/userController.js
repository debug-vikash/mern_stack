const users = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    res.json({
        users,
    });
};