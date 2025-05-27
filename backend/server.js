const http = require("http");
const fs = require("fs");
const getRequest = require("./methods/get");
const deleteRequest = require("./methods/delete");
const optionsRequest = require("./methods/options");
const postRequest = require("./methods/post");
const defaultRequest = require("./methods/default");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    switch(req.method){
        case "GET":
            return getRequest(req, res);
        case "POST":
            return postRequest(req, res);
        case "DELETE":
            return deleteRequest(req, res);
        case "OPTIONS":
            return optionsRequest(req, res);
        default:
            return defaultRequest(req, res);
    }
});

server.listen(3572, () => {
    console.log("server basarili bir sekilde calisti");
});