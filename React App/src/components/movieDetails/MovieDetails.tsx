import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { IMovie, movieSearchbyId } from "../../services/movieSearch";
import "./moviedetails.css";

export const MovieDetails = () => {
  const { id } = useParams<string>();
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const fetchedMovie = await movieSearchbyId(id ?? "");
        setMovie(fetchedMovie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);
  return (
    <div className="selectedmovieContainer">
      <div className="selectedmovieTitle">
        <h1>Detaljer</h1>
      </div>
      <div className="selectedmovieInformation">
        <h2>{movie?.title}</h2>
        <p>IMDB Ranking: {id}</p>

        <p>{movie?.year}</p>
        <p className="plot">{movie?.plot}</p>
        <Link to="/movies">
          <button className="startButtonButton">Tillbaka till filmerna</button>
        </Link>
      </div>
      <img src={movie?.poster} alt={movie?.title}></img>
    </div>
  );
};
