import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Chip from '@mui/material/Chip';
import '../App.css';

function Experience() {
  return (
    <Box>
      <Typography variant="h2" className="bold">EXPERIENCE</Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="left"
        justifyContent="center"
      >
        <Grid item xs={0}>
          <Typography variant="h2">Software Engineer @ Vertex</Typography>
          <Typography variant="h4">June '25 - Current</Typography>
        </Grid>

        <Grid item xs={0}>
          <Typography variant="h2">Software Engineer Intern @ Mobials</Typography>
          <Typography variant="h4">May '23 - Aug '24</Typography>
        </Grid>

        <Grid item xs={0}>
          <Typography variant="h2">Software Engineer Intern @ Surf</Typography>
          <Typography variant="h4">Jan '22 - Aug '22</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
