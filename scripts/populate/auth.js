require('colors');

var Models = require('../../models'),
    Database = require('../../database'),
    Config = require('../../package'),
    User = Models.users;

var Populate = {
    super: (args) => {
        new User({
            name: 'Superuser',
            email: 'super@user.com',
            password: 'admin',
            admin: true
        }).save((err, user) => {
            console.log(err, user);
            process.exit(0);
        });
    }
};

Database(Config, (err) => {
    if(err) {
        console.error(err);
    } else {
        var args = require('yargs').argv;

        if( args.run && Populate[args.run] ) {
            console.info('Script yargs'.bold);
            console.dir(args);
            Populate[args.run](args);
        } else {
            console.error('\n','Invalid arguments for this script!');
            process.exit(1);
        }
    }
});
