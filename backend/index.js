const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let quotes = [
  { id: 1, text: "Life is what happens when you're busy making other plans." },
  { id: 2, text: "The way to get started is to quit talking and doing." },
  {
    id: 3,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  },
  {
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.",
  },
  { id: 5, text: "In the middle of difficulty lies opportunity." },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.post("/addquote", (req, res) => {
  const newQuote = { id: Date.now(), text: req.body.text };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});