import './App.css';
import { useState } from 'react';
import { Box } from '@mui/material';
import Intro from './components/Intro';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleSetToggle = (event) => {
    setToggle(event.target.checked);
  };
  const handleTheme = () => (toggle ? 'dark' : 'light');
  return (
    <Box className={`App ${handleTheme()}`}>
      <Box className="padding-space">
        <Intro handleSetToggle={handleSetToggle} toggle={toggle} />
      </Box>
    </Box>
  );
}

export default App;
