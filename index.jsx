//dependencies
const app = express();
const cors =require('cors')
const express = require('express');

//port
const PORT = process.env.PORT ?? 5050;

// register middlewares
app.use(cors());
app.use(express.json());

//check check
app.get('/', (req, res) => {
    res.send(`Welcome to Swift`);
});

//and we're live
app.listen(PORT, () => {
   console.log(`🚀 we are live on port ${PORT} 🚀`)
});