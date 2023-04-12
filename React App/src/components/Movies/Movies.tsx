import { IMovie, movieSearch } from "../../services/movieSearch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch movies from API using movieSearch function
        const fetchedMovies = await movieSearch();
        // Update state with fetched data
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div className="titleContainer">
        {" "}
        <Link to={"/"} className="startbutton">
          <button className="startbuttonbutton">Tillbaka till start</button>
        </Link>
        <h3 className="title">Top filmer IMDB</h3>
        <Link to={"/movies/add"} className="startbutton2">
          <button className="startbuttonbutton">Lägg till en film</button>
        </Link>
      </div>

      <div className="largeContainer">
        {movies.map((movie) => (
          <div key={movie.id} className="moviesContainer">
            <p className="rating">{movie.id}</p>
            <h4 className="moviesTitle">{movie.title}</h4>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={movie.poster}
                className="moviesImg"
                alt={movie.title}
              ></img>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
