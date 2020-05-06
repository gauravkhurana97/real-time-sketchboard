// server side
const express = require("express");
// express server
const app = express();
//  nodejs
const server = require("http").Server(app);

// nodejs server
const port = process.env.PORT || 3000;
server.listen(port, function (req, res) {
    console.log("Server has started at port 3000");
});