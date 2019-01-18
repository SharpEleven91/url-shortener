// module imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const database = require('./config/db');
const PORT = 3000;
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
    
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`)
        require('./routes/shortenUrl')(app);
    });
});

