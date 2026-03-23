const express = require('express')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes')
const app = express()

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});



// Custom middleware for logging requests
// -->Part of req ,res server

const authMiddleware = (req, res, next) => {
    // Middleware logic for user authentication or other checks
    const authHeader = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token
    console.log("User middleware executed", authHeader);
    if(!authHeader){
        res.send("Unauthorized user");
    }try {
        const decoded = jwt.verify(authHeader, jwtToken);
        req.user = decoded; // Attach user info to the request object
        console.log("Decoded token:", decoded);
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }

    //If fails authentication, you can send a response like this:
    //res.send("Unauthorized access");

    // If successful, call next() to proceed to the next middleware or route handler
    //next();
};
// app.use(authMiddleware);


app.use(express.json())

app.use("/admin",authMiddleware, userRoutes)
app.use("/", productRoutes)
app.use("/", authRoutes)

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});