"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getCart_1 = require("./apis/getCart");
const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(getCart_1.router);
app.listen(3000, () => {
    return console.log('Running on port 3000');
});
