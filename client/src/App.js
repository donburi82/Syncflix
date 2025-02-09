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

const userID = "67a7d3ad98407ce521f4002b";

const useMovies = () => {
  const url = "http://localhost:5050/movies?userId=" + userID;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error loading movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {movies, loading};
};

function App() {
  const {movies, loading} = useMovies();
  const [selectedID, setSelectedID] = useState(-1)

  if (loading) return <p>Loading Movies...</p>
  
  console.log(movies)

  return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <Navbar />
            <HeroSection movie={movies["data"][0]} setSelectedID={setSelectedID}/>
            <MovieSection movies={movies["data"]} setSelectedID={setSelectedID}/>
            <MovieModal
              open={selectedID !== -1}
              setSelectedID={setSelectedID}
              movie={movies["data"].find(movie => movie.id===selectedID)}
            />
        </ThemeProvider>
    </div>
  );
}

export default App;
