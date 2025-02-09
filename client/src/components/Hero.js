import React from 'react';
import { Box, Typography, Button, Stack, useTheme } from '@mui/material';

const HeroSection = (props) => {
  const theme = useTheme();

  if (!props.movie) return null;
  return (
    <Box
      sx={{
        height: '85vh',
        position: 'relative',
        bgcolor: theme.palette.background.default, // Uses theme background
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
            zIndex: 1
          }
        }}
      >
        <img 
          // src="https://syncflix.s3.us-east-1.amazonaws.com/thumbnail/1_default.jpg"
          src={props.movie.image}  
          alt="Hero Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ height: '100%', position: 'relative', zIndex: 2, pl: { xs: 4, md: 6, lg: 8 } }}>
        <Stack
          spacing={3}
          justifyContent="flex-end"
          height="100%"
          maxWidth="600px"
          pb={20}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            The Avengers
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{
              fontSize: '1.1rem', 
              opacity: 0.7,
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }}
          >
            Earth's mightiest heroes, including Iron Man, Captain America, Thor, and Hulk, team up to stop the mischievous Loki and his alien army from conquering Earth.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: theme.palette.common.white,
                color: theme.palette.common.black,
                px: 4,
                '&:hover': { 
                  bgcolor: theme.palette.grey[100]
                },
                fontWeight: 'bold'
              }}
            >
              ▶ Play
            </Button>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: 'rgba(158, 158, 158, 0.9)', 
                px: 4,
                '&:hover': { 
                  bgcolor: 'rgba(109, 109, 110, 0.9)'
                },
                fontWeight: 'bold'
              }}
              onClick={() => {props.setSelectedID(props.movie.id)}}
            >
              ℹ More Info
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;