require('colors');

var models = {
    actions: require('../models/action'),
    components: require('../models/component'),
    materials: require('../models/material'),
    methods: require('../models/method')
};

// require('../database')(require('../package'), populate);
require('../database')(require('../package'), ()=>{
    models.actions.find()
        .populate([
            { path: 'methods', select: 'label' },
            { path: 'materials', select: 'label' },
            { path: 'components', select: 'label' },
        ])
        .exec((err, doc) => {
            console.log(doc);
            process.exit(0);
        });
});
