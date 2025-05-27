const defaultRequest = (req, res) => {
    res.writeHead(404);
    return res.end(JSON.stringify({
        success: false,
        message: "Route not found"
    }));
}

module.exports = defaultRequest;