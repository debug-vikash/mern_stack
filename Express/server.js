const express = require('express');

const app = express();

app.get("/users", (req, res) => {
   const getuser = require('./controllers/userController');
   getuser.getAllUsers(req, res);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});