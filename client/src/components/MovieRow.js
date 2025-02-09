import React from 'react';
import { Box, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const MovieRow = ({ title, movies, setSelectedID }) => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Row Title */}
      <Typography
        variant="h5"
        sx={{
          px: { xs: 4, md: 6, lg: 8 },
          mb: 2,
          fontWeight: 'bold'
        }}
      >
        {title}
      </Typography>

      {/* Scrollable Movie Cards Container */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          px: { xs: 4, md: 6, lg: 8 },
          gap: 2,
          '&::-webkit-scrollbar': {
            height: 8
          },
          '&::-webkit-scrollbar-track': {
            bgcolor: 'background.paper'
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: 'grey.700',
            borderRadius: 2
          }
        }}
      >
        {movies.map((movie) => (
          <Box key={movie.id} sx={{ flexShrink: 0 }}>
            <MovieCard
              movie={movie}
              setSelectedID={setSelectedID}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const MovieSection = (props) => {
  const l = props.movies.length
  const trendingMovies = props.movies.slice(0, Math.floor(l/2));
  const popularMovies = props.movies.slice(Math.floor(l/2), 10);

  return (
    <Box sx={{ mt: 4 }}>
      <MovieRow title="Trending Now" movies={trendingMovies} setSelectedID={props.setSelectedID}/>
      <MovieRow title="Popular on Netflix" movies={popularMovies} setSelectedID={props.setSelectedID}/>
    </Box>
  );
};

export default MovieSection;