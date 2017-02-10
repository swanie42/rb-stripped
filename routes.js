var Request = require('request'),
    express = require('express'),
    multiparty = require('connect-multiparty')(),
    Notes = require('./controllers/notes'),
    Users = require('./controllers/users'),
    Auth = require('./controllers/auth'),
    CRUD = require('./controllers/crud'),
    Render = require('./controllers/render'),
    Middlewares = require('./controllers/middlewares'),
    Images = require('./controllers/images');

module.exports = (app) => {
    // FORCE HTTPs
    app.get('*', Middlewares.forceTLS);
    // AUTH
    app.get('/logout', Auth.logout); // route for logging out
    app.get('/session', Auth.protect, Auth.session); // route for logging out
    app.post('/login', Auth.login); // form request emdpoint for loggin in
    app.post('/register', Auth.admin, Auth.register); // form request endpoint for user registration
    app.get('/register/:id', Auth.updatePassword);
    app.get('/password/update/:id', Auth.passwordPage);
    app.post('/password/update/:id', Auth.updatePassword);
    app.post('/resetPassword/', Auth.resetPassword);
    // API
    app.all('/api*', Auth.protect, Middlewares.sanitize.NULL); // protect all API routes from unauthorized users
    app.get('/api/users*', Auth.admin, Users.read);
    app.post('/api/images', Middlewares.add.user, multiparty, Images.upload);
    app.post('/api/notes',  Middlewares.add.user, Notes.create);
    app.post('/api/users', Users.middlewares.create);
    app.put('/api/users/:id', Auth.admin, Users.update);
    // API :: CRUD
    app.route('/api/:model*')
        .all(CRUD.middlewares.params)
    app.route('/api/:model')
        .get(CRUD.read)
        .post(CRUD.create)
    app.route('/api/:model/:id')
        .get(CRUD.read)
        .put(CRUD.update)
        .delete(CRUD.delete);
    // DASHBOARD
    app.all('/dashboard/admin*', Auth.admin); // protect all dashboard/admin routes from unauthorized users
    app.all('/dashboard*', Auth.protect);
    // RENDER
    app.get('*', Render.session);
    // STATIC FILES
    app.use(express.static('public'));



};
