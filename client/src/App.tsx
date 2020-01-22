import React, { useEffect, useState } from 'react';
import './App.css';

interface Movie {
  title: string;
  rating: number;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/movies');
      const data = await result.json();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies</h1>
        {movies.map(movie => (
          <div key={movie.title}>
            {movie.title} ({movie.rating})
          </div>
        ))}
      </header>
    </div>
  );
};

export default App;
