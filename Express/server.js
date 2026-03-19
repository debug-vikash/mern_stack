const express = require('express')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const app = express()

//Custom middleware for logging requests
//-->
const userMiddleware = (req, res, next) => {
    // Middleware logic for user authentication or other checks
    console.log("User middleware executed", req.query.skip);
    if(req.query.skip === "true") {
        next();
    }else{
        res.send("Unortherised user");
    }

    //If fails authentication, you can send a response like this:
    //res.send("Unauthorized access");

    // If successful, call next() to proceed to the next middleware or route handler
    //next();
};


app.use(userMiddleware);
app.use(express.json())

app.use("/", userRoutes)
app.use("/", productRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

