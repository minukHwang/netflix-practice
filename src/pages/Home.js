import React, { useEffect } from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Movieslide from "../components/Movieslide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const { popularMovies, topRatedMovies, upComingMovies, loading } =
        useSelector((state) => state.movie);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);

    if (loading) {
      return(
        <ClipLoader color="#ffff" loading={loading} size={150} />
      )
    }
    return (
        <div>
            <Banner movie={popularMovies.results[0]} />
            <h1>Popular Movie</h1>
            <Movieslide movies={popularMovies} />
            <h1>Top Rated Movie</h1>
            <Movieslide movies={topRatedMovies} />
            <h1>Upcoming Movie</h1>
            <Movieslide movies={upComingMovies} />
        </div>
    );
};

export default Home;
