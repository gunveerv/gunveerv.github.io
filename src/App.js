import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleSetToggle = (event) => {
    setToggle(event.target.checked);
  };
  const handleTheme = () => (toggle ? 'dark' : 'light');
  return (
    <div className={`App ${handleTheme()}`}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="left"
        justifyContent="center"
        className="padding-space padding-top"
      >
        <Grid
          item
          xs={0}
          className="padding-space"
        >
          <Box>
            <Intro handleSetToggle={handleSetToggle} toggle={toggle} />
          </Box>
        </Grid>
        <Grid
          item
          xs={0}
          className="padding-space"
        >
          <Grid
            container
            direction="column"
            spacing={6}
            alignItems="left"
            justifyContent="center"
          >
            <Grid item xs={0}>
              <Education />
            </Grid>
            <Grid item xs={0}>
              <Experience />
            </Grid>
            <Grid item xs={0}>
              <Awards />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
