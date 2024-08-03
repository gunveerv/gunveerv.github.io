import { Link, Typography } from '@mui/material';
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
          <Link href="https://github.com/gunveerv/budget.app" underline="none">
            <Typography variant="h2">budget.app</Typography>
            <Typography variant="h4">Track expenses, visualize budgets anytime, anywhere</Typography>
            <Typography variant="h5">
              Built with
              <span style={{ fontWeight: 'bold' }}> React</span>
              ,
              <span style={{ fontWeight: 'bold' }}> Node.js</span>
              ,
              <span style={{ fontWeight: 'bold' }}> Express.js</span>
              <span style={{ fontWeight: 'bold' }}> MongoDB</span>
              , and
              <span style={{ fontWeight: 'bold' }}> Docker</span>
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={0}>
          <Link href="https://github.com/gunveerv/8080-Emulation" underline="none">
            <Typography variant="h2">8080 CPU</Typography>
            <Typography variant="h4">A simulator for the intel 8080</Typography>
            <Typography variant="h5">
              Built in
              <span style={{ fontWeight: 'bold' }}> C++</span>
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={0}>
          <Link href="https://github.com/gunveerv/WAI-October_Event" underline="none">
            <Typography variant="h2">CycleGAN Image Translator</Typography>
            <Typography variant="h4">Transforms images using the CycleGAN algoritm</Typography>
            <Typography variant="h5">
              Built with
              <span style={{ fontWeight: 'bold' }}> PyTorch </span>
              on
              <span style={{ fontWeight: 'bold' }}> Google Colab</span>
              , for Western AI
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={0}>
          <Link href="https://github.com/gunveerv/asteroids-2.0" underline="none">
            <Typography variant="h2">asteroids 2.0</Typography>
            <Typography variant="h4">Replay Asteroids with a modern twist</Typography>
            <Typography variant="h5">
              Built in
              <span style={{ fontWeight: 'bold' }}> C++ </span>
              and
              <span style={{ fontWeight: 'bold' }}> Raylib</span>
              , in a group of 4
            </Typography>
          </Link>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Projects;
