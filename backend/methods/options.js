const optionsRequest = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "GET", "POST", "PUT", "DELETE", "OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.end();
}

module.exports = optionsRequest;
