DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

-- Table for movies
DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100) NOT NULL
);

-- Table for reviews
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id INT NOT NULL,
    movie_id INT,
    review TEXT,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
    ON DELETE SET NULL
);