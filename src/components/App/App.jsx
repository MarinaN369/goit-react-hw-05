// import css from "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import MovieCast from "../MovieCast/MovieCast";
// import MovieList from "../MovieList/MovieList";
// import MovieReviews from "../MovieReviews/MovieReviews";
// import Navigation from "../Navigation";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import MoviesPage  from "./pages/MoviesPage/MoviesPage";
// import HomePage from "../../pages/HomePage/HomePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const HomePage = lazy(() => import ("../../pages/HomePage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
// const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));
// const MovieDetailsPage = lazy(()=> import("./pages/MovieDetailsPage/MovieDetailsPage"));

function App () {
    return (
    <div>
    {/* <Navigation/> */}
    <main>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    {/* <Route path="/movies" element={<MoviesPage/>} />
    <Route path="'/movies/:movieId'" element={<MovieDetailsPage/>} />
    <Route path="*" element={<NotFoundPage/>} /> */}
    </Routes>
    </Suspense>
    </main>
    </div>
);
}

export default App;