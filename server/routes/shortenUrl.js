const validUrl = require("valid-url");
const shortid = require("shortid");
const mongoose = require("mongoose");
const ShortUrl = mongoose.model("ShortUrl");
module.exports = function(app) {

  // route redirects to the original URL given a short url
  app.get("/:shortId", async (req, res) => {
    const hashedUrl = req.params.shortId; // extract the hashed shortID from the request
    const query = await ShortUrl.findOne({ urlID: hashedUrl }); // make a query on the databased to see hashedUrl exists
    if (query)
      return res.redirect(query.originalUrl); // redirect the user to the hasedUrls original URL
    else res.redirect(errorUrl); // else throw error
  });

  // create new hash URL and place in database
  app.post("/api/url-shortener", async (req, res) => {
    const { originalUrl, baseUrl } = req.body; // extract originalUrl and baseUrl from request body
    if (!validUrl.isUri(baseUrl)) { // if the baseUrl is invalid throw an error
      return res.status(401).json("Bad Base URL");
    }
    const urlID = shortid.generate(); // generate hash id 
    const updatedAt = new Date(); // create new date
    if (validUrl.isUri(originalUrl)) {
      try {
        const query = await ShortUrl.findOne({ originalUrl: originalUrl }); // query database to see if the url has already been shortened before
        if (query) {
          return res.status(200).json(query); // if original has already been shortened and is within the database return it
        } else {
          const shortUrl = baseUrl + "/" + urlID; // construct short url format
          let newEntry = new ShortUrl({  // creates a new entry conforming to ShortUrl schema
            originalUrl,
            shortUrl,
            urlID,
            updatedAt
          });
          await newEntry.save(); // saves entry in database
          res.status(200).json(newEntry); // return new entry
        }
      } catch (err) {
        res.status(401).json(err); // throw error if anything fails 
      }
    }
  });
};
