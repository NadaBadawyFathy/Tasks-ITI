import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = '7a1c19ea3c361a4d3cc53eb70ef8298c';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [page, apiKey]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div className=' bg-light' >
      <ul  >
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={page === 1}>
        Previous
      </button >
      <button  onClick={handleNextPage}>Next</button>
    </div>
  );
}
