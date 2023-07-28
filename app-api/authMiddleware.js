const authMiddleware = (req, res, next) => {
    const authCookie = req.signedCookies.auth;
    console.log(authCookie);

    if (!authCookie) {
        res.send({ "error": "no cookie" })
    } else {
        req.userData = authCookie
        next();
    }
}
exports.authMiddleware = authMiddleware;