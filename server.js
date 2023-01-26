const express = require('express');
const app = express();

// require("./config/mongoose.config")
const connectDB = require("./config/mongoose.config");
connectDB();
//both above do same thing. require() isn't pronounced or easy to read

app.use(express.json());

const jokeRouter = require("./routes/joke.routes");
app.use('/api/jokes', jokeRouter)

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));