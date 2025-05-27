const express = require("express");
const { PrismaClient } = require("@prisma/client");
const path = require("path");

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // serve your frontend files from /public

// GET all quotes
app.get("/api/quotes", async (req, res) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
});

// POST a new quote
app.post("/api/quotes", async (req, res) => {
  const { text, author } = req.body;
  const newQuote = await prisma.quote.create({
    data: { text, author },
  });
  res.status(201).json(newQuote);
});

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
