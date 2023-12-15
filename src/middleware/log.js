const logs = (req, res, next) => {
    const clientIP = req.ip || req.connection.remoteAddress;
    console.log(clientIP, ' ', req.method, ' ', req.path, ' ', req.body);
    next();
};

module.exports = logs;