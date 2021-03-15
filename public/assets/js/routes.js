const router = require('express').Router();
const store = require('./store');
const path = require('path');

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
