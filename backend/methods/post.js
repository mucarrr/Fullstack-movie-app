const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");
const fs = require("fs");
    

const keys = [
    "title",
    "description",
    "rating",
    "year",
    "director",
    "duration",
    "language", 
]
const postRequest = async(req, res) => {
    if(req.url === '/api/movies'){
        const body = await bodyParser(req);
        console.log(body);
        if(body.genre.length === 0 || body.cast.length === 0){
            res.writeHead(400);
            return res.end(JSON.stringify({
                success: false,
                message: "Genre and cast must be an array"
            }));
        }
        const missingKeys = keys.filter(key => !body[key]);
        if(missingKeys.length > 0){
            res.writeHead(400);
            return res.end(JSON.stringify({
                success: false,
                message: `Missing required field: ${missingKeys}`
            }));
        }
        body.id = crypto.randomUUID();
        let data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));
        data.push(body);
        fs.writeFileSync("./data/movies.json", JSON.stringify(data));
        res.writeHead(201);
        return res.end(JSON.stringify({
            success: true,
            message: "Movie created successfully"
        }))
    }
    res.writeHead(404);
    return res.end(JSON.stringify({
        success: false,
        message: "Route not found"
    }));
}

module.exports = postRequest;