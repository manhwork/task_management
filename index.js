const express = require("express");
const app = express();

// config env
require("dotenv").config();
const port = process.env.PORT;
// End config env

// Config database
const database = require("./configs/database");
database.connect();
// End Config database

const Task = require("./models/task.model");

app.get("/tasks", async (req, res) => {
    try {
        const task = await Task.find({
            deleted: false,
        });

        res.json(task);
    } catch (error) {
        res.json("Not fould!");
    }
});

app.listen(port, () => {
    console.log("App is running at http://localhost:3000");
});
