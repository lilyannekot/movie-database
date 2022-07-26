const express = require ("express")
const fs = require ("fs")
const path = require ("path")
const reviews = require ("./db/db.json")

const app = express ();
const PORT = process.env.PORT || 3002;



//get route to get the page started
app.get ("/", function (req, res) {
res.sendFile(path.join(__dirname, reviews))
});

//get route for retrieving movie data from db.json file
app.get ("/api/movies", function (req, res){
    res.json (reviews)
});


app.post ("/api/add-movie", function (req, res){
    res.
});