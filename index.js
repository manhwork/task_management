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

// Config routes 1
const routeApiVer1 = require("./api/v1/routes/index.route");
routeApiVer1(app);
// end Config routes 1

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
