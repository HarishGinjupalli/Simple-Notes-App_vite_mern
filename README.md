# Simple Notes App

A minimal full-stack project: an **Express** REST API backend and a **React** (Vite) frontend. Add and delete notes — no database required, notes are stored in memory on the server.

## Tech Stack

- **Backend:** Node.js, Express, CORS
- **Frontend:** React, Vite

## Project Structure

```
simple-notes-app/
├── backend/
│   ├── server.js       # Express API (GET/POST/DELETE /api/notes)
│   └── package.json
├── frontend/            # React app (created with Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
├── .gitignore
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notes` | Returns all notes |
| POST | `/api/notes` | Adds a note — body: `{ "text": "..." }` |
| DELETE | `/api/notes/:id` | Deletes a note by id |

## Running Locally

### 1. Start the backend
```bash
cd backend
npm install
npm start
```
Runs on `http://localhost:5000`.

### 2. Start the frontend (in a separate terminal)
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173` (Vite will print the exact URL). Open it in your browser — add and delete notes to see them hit the backend live.

## Notes

- Notes are stored in memory on the backend, so they reset every time the server restarts. Swapping in a real database (e.g. SQLite, MongoDB) would be the natural next step.
- CORS is enabled on the backend so the Vite dev server (a different port) can call the API directly.
