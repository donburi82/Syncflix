import React, { useState } from 'react';
import { Card, CardMedia, Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const MovieCard = ({ movie, setSelectedID }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card
      onClick={()=>{setSelectedID(movie.id)}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: 220,
        position: 'relative',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)',
          zIndex: 2
        },
        bgcolor: 'transparent'
      }}
    >
      <CardMedia
        component="img"
        height="125"
        image={movie.image || "/api/placeholder/220/125"}
        alt={movie.title}
        sx={{
          borderRadius: 1
        }}
      />
      
      {/* Overlay that appears on hover */}
      {isHovered && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            p: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4
          }}
        >
          <IconButton 
            size="small" 
            sx={{ 
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton 
            size="small" 
            sx={{ 
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            <InfoIcon />
          </IconButton>
        </Box>
      )}
    </Card>
  );
};

export default MovieCard;