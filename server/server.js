const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Routes
app.use("/api/todos", todosRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
