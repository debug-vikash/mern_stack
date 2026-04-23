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

exports.createUsers = async (req, res) => {
    const {name, isActive} = req.body;
    console.log("name: ", name, "isActive: ", isActive);
    const newUser = new userModule({
        name: name,
        isActive: isActive
    });
    await newUser.save();
    res.json({message: "User created successfully", user: newUser});
}