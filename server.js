require('colors') // awesome colors in your console logs!

var HTTPS = require('https'),
    fs = require('fs'),
    ejs = require('ejs'),
    config = require('./package'),
    database = require('./database')(config),
    express = require('express'), // our framework!
    bodyParser = require('body-parser'), // used for POST routes to obtain the POST payload as a property on `req`
    logger = require('morgan')('dev'), // log the routes being accessed by the frontend
    sessions = require('client-sessions')({ // session cookie
        cookieName : '_readyboard-scoping-tool', // cookie name (within document.cookies on the Frontend)
        secret: 'My$uP3R@W3$0M3$3CR3+', // encryption secret
        requestKey: 'session', // stores the session cookie in req.session
        duration: (86400 * 1000) * 7, // one week in milliseconds (86400 * 1000) * 7,
        cookie: {
            ephemeral: true,   // when true, cookie expires when the browser closes
            httpOnly: true,     // when true, cookie is not accessible from javascript
            secure: false       // when true, cookie will only be sent over SSL;
        }
    }),
    routes = require('./routes'),
    app = express(), // initialize express
    ports = {
        http:  process.env.PORT || 80,      // default HTTP port
        https: process.env.PORT_SSL || 443  // default HTTPS port
    };


// server setup
app.use(
    logger,    // mounting dev logging
    sessions,  // mounting HTTPs session cookies
    bodyParser.json({limit: '5mb'}), // mount the body-parsing middleware (parse payloads into req.body)
    bodyParser.urlencoded({ extended:true, limit: '5mb' })
);

// enable server-side rendering
app.set('views', 'public');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// do all the routing stuff in a separate file by passing a reference of the app!
routes( app );

// start the server
app.listen( ports.http, () => {
    console.log('HTTP Server Started on port:', ports.http.toString().cyan);
});

HTTPS.createServer({
    key:  fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}, app ).listen( ports.https,  () => {
    console.log('HTTPS Server Started on port:', ports.https.toString().cyan);
});
