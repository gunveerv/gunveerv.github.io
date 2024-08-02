import './App.css';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Projects from './components/Projects';

function App() {
  const [dimensions, setDimensions] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(true);
  const [mobile, setMobile] = useState(false);
  const handleSetToggle = (event) => {
    setToggle(event.target.checked);
  };
  const handleTheme = () => (toggle ? 'dark' : 'light');
  const handleMobile = () => (mobile ? 'mobile' : 'desktop');

  useEffect(() => {
    // eslint-disable-next-line
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    if (dimensions <= 1200) {
      setMobile(true);
    }

    window.addEventListener('resize', handleResize);
    return () => (window.removeEventListener('resize', handleResize));
  }, []); // empty dependency

  return (
    <div className={`App ${handleTheme()} ${handleMobile()}`}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="left"
        justifyContent="center"
        className="padding-top"
      >
        <Grid
          item
          md={3}
          className="padding-space"
        >
          <Box>
            <Intro handleSetToggle={handleSetToggle} toggle={toggle} />
          </Box>
        </Grid>

        <Grid
          item
          md={4}
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
              <Experience />
            </Grid>
            <Grid item xs={0}>
              <Education />
            </Grid>
            <Grid item xs={0}>
              <Awards />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          md={4}
          className="padding-space"
        >
          <Projects />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
