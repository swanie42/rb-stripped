'use script';

require('colors');

var fs = require('fs'),
    argv = require('yargs').argv,
    async = require('async'),
    CSVtoJSON = require('csvjson'),
    seedData = require('../data/attributes'),
    Models = require('../../models');

var Script = {
    seed: () => {
        Script.drop(() => {
            let Activities = {}, key;

            for (key in seedData) {
                Activities[key] = seedData[key].map((row) => { return { label: row } });
            }

            async.series([
                (callback) => Models['actions'].collection.insert(Activities['actions'], callback),
                (callback) => Models['components'].collection.insert(Activities['components'], callback),
                (callback) => Models['materials'].collection.insert(Activities['materials'], callback),
                (callback) => Models['methods'].collection.insert(Activities['methods'], callback),
            ], (err, results) => {
                if(err) {
                    console.error('[FAILURE:BATCH.INSERT]', err);
                    process.exit(1);
                } else {
                    Script.populate();
                }
            })
        });
    },
    populate: function() {
        async.series([
            (callback) => Models.activities.find({}, callback),
            (callback) => Models.actions.find({}, callback),
            (callback) => Models.methods.find({}, callback),
            (callback) => Models.components.find({}, callback),
            (callback) => Models.materials.find({}, callback)
        ], (err, results) => {
            const ID_MAP = {};

            results.forEach((collection) => {
                for(let key in collection) {
                    ID_MAP[ collection[key].label ] = collection[key]._id;
                }
            });

            // console.log( ID_MAP );
            // process.exit(0);

            let TASKS = CSVtoJSON
                .toObject(
                    fs.readFileSync(`${__dirname}/../data/tasks.csv`, { encoding : 'utf8' })
                )
                .map((task) => {
                    return {
                        action:    ID_MAP[task.action],
                        material:  ID_MAP[task.material],
                        component: ID_MAP[task.component],
                        method:    ID_MAP[task.method]
                    };
                });

            // console.log(TASKS.length);
            // process.exit(0);

            Models.tasks.collection.insert(TASKS, (err, results) => {
                console.log('Task insert results:', results);
                process.exit(0);
            });
        });
    },
    drop: (dropCallback) => {
        async.series([
            (callback) => Models.activities.remove(callback),
            (callback) => Models.actions.remove(callback),
            (callback) => Models.methods.remove(callback),
            (callback) => Models.components.remove(callback),
            (callback) => Models.materials.remove(callback),
            (callback) => Models.tasks.remove(callback)
        ], (err, transactions) => {
            if(err) {
                console.error('[FAILURE:DROP]:', err)
                process.exit(1);
            }

            console.log('[SUCCESS:DROP]');

            if( dropCallback && dropCallback.constructor === Function) {
                dropCallback(null, transactions);
            } else {
                process.exit(0);
            }
        });
    },
    patch: () => {
        Models.tasks.update(
            { method: null },
            { $set: { method: '588fce886dff3b6502879298' } },
            { multi: true },
        (err, results) => {
            console.log(err, results);
            process.exit(0);
        });
    }
};

function start() {
    //--run populate
    if (Script[argv.run]) {
        console.log('[activities.script][running]:'.cyan, argv.run);
        Script[argv.run](argv);
    } else {
        console.log('Unknown command for --run:', argv.run);
        process.exit(0);
    }
}

require('../../database')(require('../../package'), start);
