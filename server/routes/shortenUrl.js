const validUrl = require("valid-url");
const shortid = require("shortid");
const mongoose = require("mongoose");
const ShortUrl = mongoose.model("ShortUrl");
module.exports = function(app) {

  // route redirects to the original URL given a short url
  app.get("/api/url-shortener/:shortId", async (req, res) => {
    const hashedUrl = req.params.shortId; // extract the hashed shortID from the request
    const query = await ShortUrl.findOne({ urlID: hashedUrl }); // make a query on the databased to see hashedUrl exists
    if (query)
      return res.redirect(query.originalUrl); // redirect the user to the hasedUrls original URL
    else res.redirect(errorUrl); // else throw error
  });

  // create new hash URL and place in database
  app.post("/api/url-shortener", async (req, res) => {
    const { originalUrl, baseUrl } = req.body; //
    console.log(originalUrl)
    if (!validUrl.isUri(baseUrl)) {
      return res.status(401).json("Bad Base URL");
    }
    const urlID = shortid.generate();
    const updatedAt = new Date();
    if (validUrl.isUri(originalUrl)) {
      try {
        const query = await ShortUrl.findOne({ originalUrl: originalUrl });
        if (query) {
          return res.status(200).json(query);
        } else {
          const shortUrl = baseUrl + "/" + urlID;
          let newEntry = new ShortUrl({
            originalUrl,
            shortUrl,
            urlID,
            updatedAt
          });
          await newEntry.save();
          res.status(200).json(newEntry);
        }
      } catch (err) {
        res.status(401).json(err);
      }
    }
  });
};
