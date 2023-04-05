//dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')

//env variables
const PORT = process.env.PORT ?? 5050;

// register middlewares
app.use(cors());
app.use(express.json());

//check check
app.get('/', (req, res) => {
    res.send(`Welcome to Swift`);
});

//register route
const employeeRoutes = require('./routes/route_employees');
const shiftRoutes = require('./routes/route_shift');
const loginRoutes=require('./routes/route_login')

//routes
app.use('/employee', employeeRoutes);
app.use('/shift', shiftRoutes);
app.use('/login', loginRoutes);

//and we're live
app.listen(PORT, () => {
    console.log(`🚀 we are live on port ${PORT}`)
});