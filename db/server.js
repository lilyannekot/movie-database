const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "movie_db",
  },
  console.log(`Connected to the movie_db database`)
);

//get route for retrieving movie data from db.json file
app.get("/api/movies", (req, res) => {
  db.query("SELECT * FROM movies", function (err, results) {
    console.log(results);
    return res.json(results);
  });
  console.info(`${req.method} request received to get movies`);
});

// POST route for sending movie data from db.json file
// app.post("/api/movies", (req, res) => {
//   res.json(reviews);
// });

// app.post("/api/add-movie", (req, res) => {
//     const newMovie = {
//         title: ,
//         text: ,
//     }
// });

// app.post("/api/update-review", (req, res) => {
//   const newReview = {
//     text: ,
//     id: Math.floor(Math.random() * 1000000),
//   };
// });

// Delete
// db.query("DELETE FROM movie_db WHERE id = ?");

// Default for request not found
app.use((req, res) => {
  res.status(404).end;
});

// Listener
app.listen(PORT, function () {
  console.log(`App listening at http://localhost:${PORT}`);
});
