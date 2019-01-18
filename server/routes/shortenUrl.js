const validUrl = require('valid-url');
const shortid = require('shortid');
const mongoose = require('mongoose');
const ShortUrl = mongoose.model("ShortUrl");
module.exports = (app) => {
    // route redirects to the original URL given a short url 
    app.get("urls/:shortId", async (req, res) => {
        const hashedUrl = req.params.shortId;                                   // extract the hashed shortID from the request
        const query = await ShortUrl.findOne({ hashedUrl: hashedUrl });         // make a query on the databased to see hashedUrl exists
        if (query) return res.redirect(query.originalUrl);                      // redirect the user to the hasedUrls original URL 
        else res.redirect(errorUrl);                                            // else throw error
    });

    // create new hash URL and place in database
    app.post("urls", async (req, res) => {
        const { originalUrl, baseUrl } = req.body;                              //
        if (!validUrl.isUri(baseUrl)) {
            return res.status(401).json("Bad Base URL");
        }
        const hashedUrl = shortid.generate();
        const updatedDate = new Date();
        if (validUrl.isUri(originalUrl)) {
            try {
                const query = await ShortUrl.findOne({ originalUrl : originalUrl });
                if (query) {
                    res.status(200).json(item);
                } else {
                    shortUrl = baseUrl + "/" + hashedUrl;
                    const creator = req.getRemoteAddr();
                    const newEntry = new ShortUrl({
                        originalUrl,
                        shortUrl,
                        hashedUrl,
                        creator,
                        updatedDate
                    })
                    await newEntry.save();
                    res.status(200).json(newEntry);
                }
            } catch (err) {
                res.status(401).json("Invalid");
            }
        }
    })
}