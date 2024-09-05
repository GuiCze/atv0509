const data = (req, res, next) => {
    req.body.data =  new Date().toISOString().split("T")[0];
    next();
};

module.exports = data;