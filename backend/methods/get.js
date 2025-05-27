const fs = require("fs");

const getRequest = (req, res) => {

    const id = req.url.split("/")[3];
    
    if(req.url === "/api/movies"){
        const movieData = fs.readFileSync("./data/movies.json", "utf-8");
        return res.end(movieData);
    }
    else if(req.url === "/api/movies/" + id){
        const movieData = fs.readFileSync("./data/movies.json", "utf-8");
        const movie = JSON.parse(movieData).find((movie) => movie.id === id);
        if(movie){
            return res.end(JSON.stringify(movie));
        }
        res.writeHead(404);
        return res.end(JSON.stringify({success: false, message: "Movie not found"}));
    }
    else{
        res.writeHead(404);
        return res.end("Not found");
    }
}

module.exports = getRequest;  