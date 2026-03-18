const users = require('../modules/userModules')

exports.getUsers = (req, res) => {

    res.json(users);
};

exports.getUserById = (req, res) => {
    const id = req.params.id;

}

exports.addUsers = (req, res) => {
    const students = req.body;
    console.log("students:", students);
    res.json(
        {message: "User added successfully",
        students: students
    });
};