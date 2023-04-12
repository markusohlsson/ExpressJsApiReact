import axios from "axios";
import React, { useState } from "react";
import "./AddMovie.css";
import { Link } from "react-router-dom";

export const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [plot, setPlot] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/movies", {
        title: title,
        year: year,
        poster: poster,
        plot: plot,
      })
      .then((response) => {
        console.log("Movie added successfully", response);
        setConfirmation(true);
      });
  };

  return (
    <div className="addMovieContainer">
      <h3 className="addmovietitle">Add a Movie</h3>
      <Link to={"/movies"} className="startbutton">
        <button className="startbuttonbutton">Tillbaka till listan</button>
      </Link>
      {confirmation ? <h4 className="confirmation">Movie Added</h4> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="year">Year</label>
        <input
          required
          type="text"
          placeholder="Year"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label htmlFor="poster">Poster</label>
        <input
          required
          type="text"
          placeholder="Poster"
          name="poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <label htmlFor="plot">Plot</label>
        <input
          required
          type="text"
          placeholder="Plot"
          name="plot"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
