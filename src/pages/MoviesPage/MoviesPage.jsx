import css from "./MoviePage.module.css";
import {fetchMovieByQuery} from "../../services/api";
import {useState, useEffect} from "react";
import {Link, useLocation, useSearchParams} from "react-router-dom";

const MoviesPage = () => {
    const [value, setValue] = useState("");
    const [movie, setMovie] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams;
const queryParams = searchParams.get("query");
const location = useLocation();

const handleSubmit = (event) => {
  event.preventDefault();

  if(value.trim === "") {return;} 
}
setSearchParams ({query: value.trim()});

const handleChange = (event) => {
  setValue(event.target.value);
};

useEffect(() => {
  if(!queryParams) return;

  const fetchMovies = async() => {
    try {
      const response = await fetchMovieByQuery(queryParams);
      console.log("API response:", response);
      setMovie(response.result);  
    }
    catch (error) {
      console.error("Error fetching movies:", error);

    }
  };
})
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              value={value}
              onChange={handleChange}
            />
            <button className={css.button} type="submit">
              Search
            </button>
          </form>
          {movies && (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <Link state={location} to={`/movies/${movie.id}`}>
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };

export default MoviePage;