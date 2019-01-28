# URL MiNiFy
[![Build Status](https://travis-ci.org/SharpEleven91/url-shortener.svg?branch=master)](https://travis-ci.org/SharpEleven91/url-shortener)

A URL Shortening Microservice ala Goo.gl or Bit.ly

## Hosted at [URL MiNiFy](https://umini.herokuapp.com)
## Built With

* [React](https://reactjs.org/)
* [Mongoose](https://mongoosejs.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Validator](https://www.npmjs.com/package/validator)
* [MongoDB](https://www.mongodb.com/) via [mLab](https://mlab.com/)
* [React Testing Library](https://github.com/kentcdodds/react-testing-library)
## Installation

First clone the repo 
```git clone https://github.com/SharpEleven91/url-shortener
   cd url-shortener
```
Add your own config folder to root

Create your own db.js within config

``` 
// example config/db.js
module.exports = {
    url: // database access point 
}
```

* Navigate to Client/src/Components/URLMinify.js
* Change baseUrl
```
   const baseUrl = "https://localhost:8000"
```

Finally starting in the root folder
```
   npm install
   cd client && npm install
   npm build
   cd .. 
   npm start
```

Navigate to https://localhost:8000