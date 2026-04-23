const express = require('express')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes')
const { name } = require('ejs')
const app = express()
const jwt = require('jsonwebtoken');
const jwtToken = "your_secret_key";
const connectDB = require('./config/db')
const internalInitialize = require('./utils/initialTreeSync')
const userModule = require('./modules/userModules')
const validate = require('./MiddleWare/userMiddleWare')
const schemavalidate = require('./validations/userValidation')


app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

app.set("view engine", "ejs");

const student = {
    header:{title: "Student Information"},
    content: {cource: "Computer Science"},
    footer:{createdBy: "Vikash"}
};

app.get("/homepage", (req, res) => {
    res.render("homepage", { 
        collage: "GLA University",
        ...student  
    });
});

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization?.split(' ')[1];
    console.log("User middleware executed", authHeader);

    if (!authHeader) {
        return res.status(401).send("Unauthorized user");
    }

    try {
        const decoded = jwt.verify(authHeader, jwtToken);
        req.user = decoded;
        console.log("Decoded token:", decoded);

        next(); 

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};


// Custom middleware for logging requests
// -->Part of req ,res server

// const authMiddleware = (req, res, next) => {
//     // Middleware logic for user authentication or other checks
//     const authHeader = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token
//     console.log("User middleware executed", authHeader);
//     if(!authHeader){
//         res.send("Unauthorized user");
//     }try {
//         const decoded = jwt.verify(authHeader, jwtToken);
//         req.user = decoded; // Attach user info to the request object
//         console.log("Decoded token:", decoded);
//         next(); // Proceed to the next middleware or route handler
//     } catch (err) {
//         return res.status(401).json({ message: "Invalid token" });
//     }

//     //If fails authentication, you can send a response like this:
//     //res.send("Unauthorized access");

//     // If successful, call next() to proceed to the next middleware or route handler
//     //next();
// };
// app.use(authMiddleware);

const startServer = async () => {
    await connectDB();
    
    try {
        const stats = await internalInitialize();
        console.log(`Employee Data Created: ${stats.count} records processed.`);
    } catch (err) {
        console.error('Initial Tree Sync Failed:', err.message);
    }

    const PORT = process.env.PORT || 5050;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

app.use(express.json())
app.use("/admin",authMiddleware, userRoutes)
app.use("/", productRoutes)
app.use("/", authRoutes)

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});