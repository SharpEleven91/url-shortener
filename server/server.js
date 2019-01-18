// module imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const db = require('./config/db');
const PORT = 8000;
const connectionOps = {
    keepAlive: true, 
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
}

app.use(bodyParser.json);
mongoose.Promise = global.Promise;
mongoose.connect(db.url, connectionOps, (err, database) => {
    if (err) return console.log(`Error: ${err}`);
    console.log('Database connected');
    require('./models/ShortUrl');
    require('./routes/shortenUrl')(app);
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`)
    });
});

