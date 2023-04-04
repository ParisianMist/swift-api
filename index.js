//dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')

//env variables
const PORT = process.env.PORT ?? 5050;
const secretKey = process.env.SECRET_KEY;

// register middlewares
app.use(cors());
app.use(express.json());

//check check
app.get('/', (req, res) => {
    res.send(`Welcome to Swift`);
});

//register route
const employeesRoutes = require('./routes/route_employees');
const shiftRoutes = require('./routes/route_shift');
const loginRoutes=require('./routes/route_login')

//routes
app.use('/employees', employeesRoutes);
app.use('/shift', shiftRoutes);
app.use('/login', loginRoutes);

//and we're live
app.listen(PORT, () => {
    console.log(`🚀 we are live on port ${PORT}`)
});