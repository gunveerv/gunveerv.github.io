import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
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
          <Typography variant="h2">Software Engineer Intern @ Mobials</Typography>
          <Typography variant="h4">May '23 - Aug '24</Typography>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="padding-grid"
          >
            { ['PHP', 'Vue.js', 'SQL', 'Docker', 'AWS EC2'].map((technology) => <Grid item xs={0}><Chip label={technology} className="text-align chip" size="small" /></Grid>) }
          </Grid>
        </Grid>

        <Grid item xs={0}>
          <Typography variant="h2">Software Engineer Intern @ Surf</Typography>
          <Typography variant="h4">Jan '22 - Aug '22</Typography>
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="left"
            className="padding-grid"
          >
            { ['Node.js', 'React', 'DynamoDB', 'AWS Lambda', 'Docker'].map((technology) => <Grid item xs={0}><Chip label={technology} className="text-align chip" size="small" /></Grid>) }
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
