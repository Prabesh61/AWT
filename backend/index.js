const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database("./quotes.db", (err) => {
  if (err) return console.error(err.message);
  console.log("Connected to SQLite database.");
});
db.run(`CREATE TABLE IF NOT EXISTS quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT
)`);


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/quotes", (req, res) => {
  db.all("SELECT * FROM quotes", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/addquote", (req, res) => {
  const { text } = req.body;
  db.run("INSERT INTO quotes (text) VALUES (?)", [text], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, text });
  });
});

// Server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
