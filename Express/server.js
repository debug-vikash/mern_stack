const express = require('express')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(express.json())

app.use("/", userRoutes)
app.use("/", productRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

