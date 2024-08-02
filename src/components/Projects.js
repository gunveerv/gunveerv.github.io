import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../App.css';

function Projects() {
  return (
    <Box>
      <Typography variant="h2" className="bold">PROJECTS</Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="left"
        justifyContent="center"
      >
        <Grid item xs={0}>
          <Typography variant="h2">budget.app</Typography>
          <Typography variant="h4">Track expenses, visualize budgets anytime, anywhere</Typography>
          <Typography variant="h5">Built with React, Node.js, Express.js, MongoDB, and Docker</Typography>
        </Grid>

        <Grid item xs={0}>
          <Typography variant="h2">8080 CPU</Typography>
          <Typography variant="h4">A simulator for the intel 8080</Typography>
          <Typography variant="h5">Built in C++</Typography>
        </Grid>

        <Grid item xs={0}>
          <Typography variant="h2">CycleGAN Image Translator</Typography>
          <Typography variant="h4">Transforms images using the CycleGAN algoritm</Typography>
          <Typography variant="h5">Built with PyTorch on Google Colab, for Western AI</Typography>
        </Grid>

        <Grid item xs={0}>
          <Typography variant="h2">asteroids 2.0</Typography>
          <Typography variant="h4">Replay Asteroids with a modern twist</Typography>
          <Typography variant="h5">Built in C++, Raylib, in a group of 4</Typography>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Projects;
