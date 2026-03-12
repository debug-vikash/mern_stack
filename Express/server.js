const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.json({
    message: 'Hello, World!',
    status: "200" 
   });
});

app.get("/home", (req, res) => {
   res.json({
    message: 'Welcome to the Home Page!',
    status: "200" 
   });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});