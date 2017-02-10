var checkForExt = /(?:\.([^.]+))?$/;

module.exports = {
    session: (req, res, next) => {
        var matches = checkForExt.exec(req.path),
            fileExt;

        if( !matches || matches.shift() !== '.html' ) {
            return next();
        }

        var path = req.path.slice(1);

        if( path.indexOf('.html') !== -1 ) {
            return res.render(path, { session: req.session });
        } else if( path.slice(-1) === '/' ) {
            path = path.slice(0,-1);
        }

        res.render(`${path}/index.html`, { session: req.session });
    }
};
