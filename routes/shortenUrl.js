const valid = require('validator');
const shortid = require("shortid");
const mongoose = require("mongoose");
const ShortUrl = mongoose.model("ShortUrl");
const path = require("path");
module.exports = function(app) {
  // route redirects to the original URL given a short url
  app.get("/:shortId", async (req, res) => {
    const hashedUrl = req.params.shortId; // extract the hashed shortID from the request
    const query = await ShortUrl.findOne({ urlID: hashedUrl }); // make a query on the databased to see hashedUrl exists
    if (query)
      return res.redirect(query.originalUrl); // redirect the user to the hasedUrls original URL
    else res.status(404).json(err); // else throw error
  });

 // app.get("*", (req, res) => {
  //  res.sendFile(path.join(__dirname + "/client/build/index.html"));
 // });
  // create new hash URL and place in database
  app.post("/api/url-shortener", async (req, res) => {
    let { originalUrl, baseUrl } = req.body; // extract originalUrl and baseUrl from request body
    originalUrl = originalUrl.toLowerCase(); // normalize originalUrls so duplicates are not created in database because of case-sensitivity when search
    if (!valid.isURL(baseUrl) || originalUrl === "") {
      // if the baseUrl is invalid throw an error
      return res.status(401).json("Bad Base URL");
    }
    const urlID = shortid.generate(); // generate hash id
    const updatedAt = new Date(); // create new date
    if (valid.isURL(originalUrl)) {
      if (!originalUrl.match("^(http|https)://", "i")) { // checks the valid url for http/https prefix
        originalUrl = "http://" + originalUrl;           // if it isn't there then add it
      }
      try {
        const query = await ShortUrl.findOne({ originalUrl: originalUrl }); // query database to see if the url has already been shortened before
        if (query) {
          return res.status(200).json(query); // if original has already been shortened and is within the database return it
        } else {
          const shortUrl = baseUrl + "/" + urlID; // construct short url format
          let newEntry = new ShortUrl({
            // creates a new entry conforming to ShortUrl schema
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
    } else {
      res.status(401).json("bad url");
    }
  });
};
