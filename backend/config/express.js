const configUtil = require("./configUtil.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

/****** Import Routes Here: ******/
const loginRoutes = require("../routes/testRoutes.js")
/********************************/

module.exports.init = () => {
    const app = express();

    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors());

    /****** Place Routes Here: ******/
    app.use("/login", loginRoutes)
    /********************************/

    if (process.env.NODE_ENV === "production") {
        // Serve any static files
        app.use(express.static(path.join(__dirname, "../../src/build")));
        // Handle React routing, return all requests to React app
        app.get("*", function (req, res) {
            res.sendFile(path.join(__dirname, "../../src/build", "index.html"));
        });
    }

    return app;
};