const notesdb = require('../db/inmemory')("notes")

notesdb.add({
    id: 0,
    test: "This is note zero"
});

module.exports = function(app, db) {
    app.get('/api/notes', (req, res) => {
        res.json(notesdb.all());
    });

    app.get('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const notes = notesdb.all();
        res.send(notes.find((note) => { return note.id == id } ));
    });

    app.post('/api/notes', (req, res) => {
        notesdb.add(req.body);
        res.send();
    });

    app.put('/api/notes/:id', (req, res) => {
        const note = notesdb.update(req.params.id);
        res.send(note);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const deletedNote = notesdb.remove(req.params.id);
        res.send(deletedNote);
    });

    app.get('/api/notes/:id/word-count', (req, res) => {
        res.send(notesdb.count(req.params.id));
    });
};