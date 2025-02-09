import './App.css';

import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from './components/Hero';
import MovieSection from './components/MovieRow';
import MovieModal from './components/MovieModal';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/movies.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return movies;
};

function App() {

  // const [selectedMovie, setSelectedMovie] = useState(null); // display modal if user clicks movie info
  // setSelectedMovie(movie);

  const movies = useMovies();
  const [selectedID, setSelectedID] = useState(-1)
  
  return (
    <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <Navbar />
            <HeroSection movie={movies[0]} setSelectedID={setSelectedID}/>
            <MovieSection movies={movies} setSelectedID={setSelectedID}/>
            <MovieModal
              open={selectedID !== -1}
              setSelectedID={setSelectedID}
              movie={movies[selectedID-1]}
            />
        </ThemeProvider>
    </div>
  );
}

export default App;
