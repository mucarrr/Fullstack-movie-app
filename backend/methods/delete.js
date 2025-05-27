const fs = require('fs');

const deleteRequest = (req, res) => {
    const id = req.url.split("/")[3];
    const path = req.url.substring(0, req.url.lastIndexOf("/"));
    
    if(path === "/api/movies" && id){
        const movieData = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));
        const foundMovie = movieData.find((movie) => String(movie.id) === String(id));
        
        if(!foundMovie){
            res.writeHead(404);
            return res.end(JSON.stringify({success: false, message: "Movie not found"}));
        }
        
        const filteredMovies = movieData.filter((movie) => String(movie.id) !== String(id));
        fs.writeFileSync("./data/movies.json", JSON.stringify(filteredMovies));
        
        res.writeHead(200);
        return res.end(JSON.stringify({success: true, message: "Movie deleted successfully"}));
    }
    if(!id){
        res.writeHead(400);
        return res.end(JSON.stringify({success: false, message: "Movie ID is required"}));
    }
    
    res.writeHead(404);
    return res.end(JSON.stringify({success: false, message: "Movie cannot be deleted"}));
};

module.exports = deleteRequest;