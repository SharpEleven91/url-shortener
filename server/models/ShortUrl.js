const mongoose = require("mongoose");
const { Schema } = mongoose;
const shortenedUrlSchema = new Schema({
    originalUrl: String,
    shortUrl: String,
    urlID: String,
    createdAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now }
})

mongoose.model("ShortUrl", shortenedUrlSchema);