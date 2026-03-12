const users = require('../modules/userModules')

exports.getAllUsers = (req, res) => {
   // console.log("Fetching all users...");
    res.json(users);
};