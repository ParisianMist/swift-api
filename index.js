//dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')

//port
const PORT = process.env.PORT ?? 5050;

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
app.use('/employees', employeesRoutes);
app.use('/shift', shiftRoutes);

//and we're live
app.listen(PORT, () => {
    console.log(`🚀 we are live on port ${PORT} 🚀`)
});