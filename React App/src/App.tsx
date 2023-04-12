import "./App.css";

import { Movies } from "./components/Movies/Movies";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./components/movieDetails/MovieDetails";
import { AddMovie } from "./components/AddMovie/AddMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="startContainer">
              <div className="smallerContainer">
                <h4 className="startTitle">Top filmer IMDB</h4>
                <Link to="/movies" className="startButton">
                  <button className="startButtonButton">Visa Listan</button>
                </Link>
              </div>
            </div>
          }
        ></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route
          path="/movies/:id"
          element={<MovieDetails></MovieDetails>}
        ></Route>
        <Route
          path="*"
          element={
            <>
              <p>Inget resultat</p>
              <Link to="/" className="startButton">
                <button className="startButtonButton">Återgå till start</button>
              </Link>
            </>
          }
        ></Route>
        <Route path="/movies/add" element={<AddMovie></AddMovie>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
