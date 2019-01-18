// module imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const db = './config/db.js';
const PORT = 8000;
const connectionOps = {

}
mongoose.connect(db.url, connectionOps, (err, database) => {
    if (err) console.log(`Error: ${err}`);
    else console.log(`Connected to Database`);
});

app.use(bodyParser.json);
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});