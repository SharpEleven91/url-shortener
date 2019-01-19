// module imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const database = require('./config/db');
const PORT = 8000;
const path = require('path');
const connectionOps = {
    keepAlive: true, 
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
}


mongoose.Promise = global.Promise;
mongoose.connect(database.url, connectionOps, (err, db) => {
    if (err) return console.log(`Error: ${err}`);
    console.log('Database connected');
    app.use(bodyParser.json());
    require('./models/ShortUrl');
    app.use(express.static(path.join(__dirname + '/client/build')));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`)
        require('./routes/shortenUrl')(app);
    });
});

