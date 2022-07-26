DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

-- Table for movies
DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100) NOT NULL
);

-- Table for reviews
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    movie_id INT,
    review TEXT,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
    ON DELETE SET NULL
)