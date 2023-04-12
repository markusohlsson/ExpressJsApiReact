import axios from "axios";

export interface IMovie {
  id: number;
  title: string;
  year: string;
  poster: string;
  plot: string;
}

export async function movieSearch() {
  let response = await axios.get<IMovie[]>(`http://localhost:8000/movies/`);
  console.log(response.data);
  return response.data;
}

export async function movieSearchbyId(id: string) {
  let response = await axios.get<IMovie>(`http://localhost:8000/movies/${id}`);
  console.log(response.data);
  return response.data;
}
