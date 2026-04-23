const express = require('express');
const userModule = require('./modules/userModules')
const validate = require('./MiddleWare/userMiddleWare')
const schemavalidate = require('./validations/userValidation')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes')
const userMiddleware = require('./MiddleWare/userMiddleWare')


const app = express();

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


app.use(express.json());
app.use("/admin",userMiddleware, userRoutes)
app.use("/", productRoutes)
app.use("/", authRoutes)


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});