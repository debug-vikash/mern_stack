const users = require('../modules/userModules')

exports.getUsers = (req, res) => {

    res.json(users);
};

exports.getUserById = async (req, res) => {
    const {id} = req.params;
    const {isActive} = req.query;
    console.log("Active or not" , isActive);
    filter = {_id : Number(id)};

    if(isActive){
        filter["isActive"] = Boolean(isActive);
    }
    console.log("filter: ", filter);

    const user = await userModule.findOne(filter);
    res.json(user);

};

exports.addUsers = (req, res) => {
    const students = req.body;
    console.log("students:", students);
    res.json(
        {message: "User added successfully",
        students: students
    });
};