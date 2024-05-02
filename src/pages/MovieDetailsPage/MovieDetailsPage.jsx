import {useParams} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import css from "./MovieDetailsPage.module.css";


const MovieDetailsPage = () => {
    const {movieid} = useParams;
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [location, setLocation] = useLocation;
    const comeBack = useRef(location.state ?? "/");
    console.log(comeBack.current);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchMoviebyId(movieId);
                setInfo(response);
                setLoading(false);

            }
            catch(error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
}, [movieId]);

useEffect(() => {
    console.log(info), [info]);

    if(loading) {return <div>Loading...</div>;}
    if(error) {return <div>Error: {error.message}</div>;}

    return (
        if(info !== null) &&
        <div>
            <div className={css.container}>
                <div>
                    <Link to={comeBack.current}>
                        <button>Go back</button>
                    </Link>
                </div>
                <img 
                style= {{width: "300px"}}
                src={`https://image.tmdb.org/t/p/w500/${info.poster_path} alt={info.title}`}
                />

            </div>

<div className={css.baseInfo}>
    <h1>{info.title}</h1>
    <p>User Score: {info.average_percent}</p>
    <h2>Overview</h2>
    <p>{info.short_review}</p>
    <h3>Genres</h3>
    <p className={genresList}>
        {info.genres.map((genre) => genre.name).join(",")}</p>

</div>
        </div>
    )
}
