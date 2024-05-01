import {useState, useEffect} from "react";
import MovieList from "../components/MovieList/MovieList";
import {fetchMovie} from "../services/api";

const HomePage = () => {
    const [movies, setMovies] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const { results } = await fetchMovie();
        setMovies(results);
      };
  
      fetchData();
    }, []);
    return (
      <>
        <MovieList movies={movies} />
      </>
    );
  };
export default HomePage;