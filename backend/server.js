const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory storage - resets every time the server restarts
let notes = [
  { id: 1, text: "Welcome to your Notes App!" }
];
let nextId = 2;

// GET all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// POST a new note
app.post('/api/notes', (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: "Note text is required" });
  }
  const newNote = { id: nextId++, text: text.trim() };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// DELETE a note by id
app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
