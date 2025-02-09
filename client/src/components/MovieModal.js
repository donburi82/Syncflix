import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Chip,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

const MovieDetailModal = ({ open, setSelectedID, movie }) => {
  if (!movie) return null;

  return (
    <Dialog
      open={open}
      // onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          backgroundImage: 'none'
        }
      }}
    >
      {/* Header Image Section */}
      <Box sx={{ position: 'relative', height: 300 }}>
        <Box
          component="img"
          src={movie.image || "/api/placeholder/800/300"}
          alt={movie.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent 50%)'
          }}
        />
        <IconButton
          // onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.5)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
          }}
        >
          <CloseIcon onClick={() => {setSelectedID(-1)}} />
        </IconButton>
      </Box>

      <DialogContent sx={{ pt: 4, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 3 }}>
              {movie.title}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                startIcon={<PlayArrowIcon />}
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  '&:hover': { bgcolor: 'grey.100' }
                }}
              >
                Play
              </Button>
              <IconButton sx={{ color: 'white', border: 1, borderColor: 'grey.500' }}>
                <AddIcon />
              </IconButton>
            </Stack>

            <Typography sx={{ mb: 2 }}>{movie.description}</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box>
                <Typography color="grey.500" component="span">Cast: </Typography>
                <Typography component="span">{movie.cast}</Typography>
              </Box>
              
              <Box>
                <Typography color="grey.500" component="span">Genre: </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  {movie.genre.split(', ').map((genre) => (
                    <Chip
                      key={genre}
                      label={genre}
                      size="small"
                      sx={{ bgcolor: 'grey.800' }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography color="grey.500" component="span">Release Date: </Typography>
                <Typography component="span">{movie.releaseDate}</Typography>
              </Box>

              <Box>
                <Typography color="grey.500" component="span">Duration: </Typography>
                <Typography component="span">{movie.duration}</Typography>
              </Box>

              <Box>
                <Typography color="grey.500" component="span">Rating: </Typography>
                <Typography component="span">{movie.rating}</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetailModal;