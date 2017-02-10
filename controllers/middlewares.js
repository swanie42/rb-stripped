module.exports = {
    forceTLS: ( req, res, next ) => {
        if( req.protocol === 'http' ) {
            res.set('X-Forwarded-Proto','https');
            res.redirect('https://'+ req.headers.host + req.url);
        } else {
            next();
        }
    },
    add: {
        user: (req, res, next) => {
            req.body.user = req.session.user._id;
            console.log('Middlewares, add user:', req.path, req.body);
            next();
        }
    },
    sanitize: {
        NULL: (req, res, next) => {
            for (let param in req.query) {
                if (req.query[param] === 'null') {
                    req.query[param] = null;
                }
            }
            next();
        }
    }
};
