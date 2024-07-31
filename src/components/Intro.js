import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../App.css';

function Intro() {
  return (
    <div>
      <Typography variant="h1">Gunveer Vilkhu</Typography>
      <Typography variant="h2">Software Engineer</Typography>
      <Box className="margin-top">
        <Link rel="noopener" target="_blank" href="https://github.com/gunveerv">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="left"
          >
            <Grid item xs={0}>
              <img src="github.png" alt="Click to see my Github" className="logo" />
            </Grid>
            <Grid item xs={0}>
              <Typography variant="h3" className="text-align">/gunveerv</Typography>
            </Grid>
          </Grid>
        </Link>
      </Box>
      <Box className="margin-grid-item">
        <Link rel="noopener" target="_blank" href="https://linkedin.com/in/gunveervilkhu">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="left"
          >
            <Grid item xs={0}>
              <img src="linkedin.png" alt="Click to see my Linkedin" className="logo" />
            </Grid>
            <Grid item xs={0}>
              <Typography variant="h3" className="text-align">/gunveervilkhu</Typography>
            </Grid>
          </Grid>
        </Link>
      </Box>
    </div>
  );
}

export default Intro;
