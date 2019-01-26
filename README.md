# URL MiNiFy
[![Build Status](https://travis-ci.org/SharpEleven91/url-shortener.svg?branch=master)](https://travis-ci.org/SharpEleven91/url-shortener)
A URL Shortening Microservice ala Goo.gl or Bit.ly

## Hosted at [URL MiNiFy](https://umini.herokuapp.com)
## Built With

* React
* Mongoose
* Node.js
* Express

## Installation

Add your own config folder to root

Create your own db.js within config
``` 
// example db.js
modules.export = {
    url: // database access point 
}
```

* Navigate to Client/src/Components/URLMinify.js
* Change baseUrl
```
   const baseUrl = "https://localhost:8000"
```

Finally

```git clone url
   cd url-shortener
   npm install
   cd client && npm install
   npm build
   cd .. 
   npm start
```

Navigate to https://localhost:8000