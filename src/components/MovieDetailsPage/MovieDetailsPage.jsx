import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import HorizontalLine from "../HorizonalLine/HorizontalLine";
import styles from "./MovieDetailsPage.module.css";

function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  async function fetchMovieById(id) {
    try {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ee05cb5c4e7bec8bf2cb81503e07020d`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setMovie(data);
        });
    } catch (err) {
      return console.error(err);
    }
  }

  useEffect(() => {
    fetchMovieById(movieId);
  }, [movieId, setMovie]);

  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  const userScore = vote_average * 10;

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.MoviePosterContainer}>
          {poster_path !== undefined ? (
            <img
              className={styles.MoviePoster}
              src={`http://image.tmdb.org/t/p/w500${poster_path}`}
              alt="poster"
            />
          ) : (
            `poster`
          )}
        </div>
        <div className={styles.MovieInfo}>
          <h2>
            {original_title} {release_date}
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres !== undefined
              ? genres.map(({ id, name }) => (
                  <span key={id}>
                    {name}
                    {"  "}
                  </span>
                ))
              : `No genres`}
          </p>
        </div>
      </div>
      <HorizontalLine />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <HorizontalLine />
      <Outlet />
    </>
  );
}

export default MoviesDetailsPage;
