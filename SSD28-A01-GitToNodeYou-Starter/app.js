/*
 * File: c:\Users\jsolomon11\JBS\Courses\SSD\Intake28\Node\Assignments\Solutions\Node-A01-GitToNodeYou\SSD28-A01-GitToNodeYou\index.js
 * Created Date: Friday, October 28th 2022, 11:56:34 am
 * Author: Josh Solomon
 * Copyright (c) 2022 Josh Solomon
 */

// Set strict mode
"use strict";
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const {loadProfile, loadStatic} = require("./utils/fileHelper");

const server = http.createServer((req, res) => {
  // branch based on the URL of the request
  switch (req.url) {
  
    case("/"):
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello Node Server");
      break;

    // Profiles Listing Page
    // * Add a case that responds to /profiles which sends "Profiles List" with a 200

    //   Individual Profile
    case"/profiles":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Profiles");
      break;

    case"/profiles/haley":
      res.statusCode = 200;
      console.log("Haley is here.  Loading profile...");
      loadProfile(req, res);
      break;
    
    case"/profiles/sam":
    res.statusCode = 200;
      console.log("Sam is here.  Loading profile...");
      loadProfile(req, res);
      break;

    case"/profiles/yuko":
    res.statusCode = 200;
      console.log("Yuko is here.  Loading profile...");
      loadProfile(req, res);
      break;


    /* Add in a cases pointing at your personal profiles below */

    //   Unhandled URL
    default:
      // Handle static requests
      const validStaticTypes = ["images", "styles", "scripts"];
      const pathSegments = req.url.split("/");
      if (validStaticTypes.includes(pathSegments[3])) {
        loadStatic(req, res);
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("File Not Find");

      }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// * Set the HTTP server to listen on port, hostname as declared above
// * Within the callback console.log  `Server running at http://${hostname}:${port}/`
