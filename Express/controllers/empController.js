const { name } = require('ejs');
const EmployeesModel = require('../models/empModules');

exports.createEmployees = (req, res) => {
    const department = ["IT", "HR", "Finance", "Marketing"];
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            id: i,
            name: "users" + i,
            department: department[i%4],
            salary: Math.floor(Math.random() * 90000) + 10000,
            age: Math.floor(Math.random() * 43) + 18
        });
    }
    EmployeesModel.insertMany(data)
        console.log("Data inserted successfully");
        res.json({message: "Data inserted successfully"});
};

exports.aggSample = async (req, res) => {
    const aggregatedData = await EmployeesModel.aggregate([
        {$match: {department: "IT"}},
        {$group: {_id: "$department", totalSalary: {$sort: "$salary"}, avgAge: {$avg: "$age"}}},
        {$sort: {totalSalary: -1}},
        {$project: {_id: 0, department: "$_id", totalSalary: 1, avgAge: 1}}
    ]);
    res.json(aggregatedData);
};