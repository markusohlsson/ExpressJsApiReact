import express from "express";
import { movies, IMovie } from "./movies";

const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Movies");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((b) => b.id === id);
  res.send(movie);
});

function getMovieId() {
  const lastMovie = movies.slice(-1)[0];
  let id = lastMovie?.id;
  return id + 1;
}

app.post("/movies", (req, res) => {
  const id = getMovieId();

  const newMovie: IMovie = {
    id,
    title: req.body.title,
    year: req.body.year,
    poster: req.body.poster,
    plot: req.body.plot,
  };
  const response = JSON.stringify(id);
  movies.push(newMovie);

  res.send(response);
});
