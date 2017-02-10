var Note = require('../models/note'),
    Notes = {
        create: (req, res) => {
          console.log("running notes create!")
          console.log("The notes req.body", req.body)
            new Note(req.body).save((err, note) => {
                if(!Notes.error(err, res)) {
                    Note.populate(note, 'user', (err, note) => {
                        if(!Notes.error(err, res)) {
                            res.send(note);
                        }
                    });
                }
            });
        },
        error: (err, res) => {
            if(err) {
                console.error('Could not create note:', err);
                res.status(500).send(err);
                return true;
            }
        }
    };

module.exports = Notes
